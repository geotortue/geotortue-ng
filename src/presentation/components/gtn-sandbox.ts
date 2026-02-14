import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import { fromRadianToDegree, toDegree, toRadian } from '@domain/types';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';
import { UiLanguageController } from '@ui/controllers/UiLanguageController';
import type { GTNTokenName } from '@domain/types/GTNToken';
import { NamedCssColor, toNamedCssColor, type GTNColor } from '@domain/value-objects';

import styles from './gtn-sandbox.scss?inline';

@customElement('gtn-sandbox')
export class GtnSandbox extends LitElement {
  static override readonly styles = css`
    ${unsafeCSS(styles)}
  `;

  // Dependency Injection
  private readonly turtleRepo: IGTNTurtleRepository;
  private readonly langService: IGTNLanguageService;

  // Controller to trigger re-render on language change
  private readonly langController = new UiLanguageController(this);

  // --- Configuration State (Inputs) ---
  @state() private accessor distanceStep = 50;
  @state() private accessor angleStep = toDegree(90);

  // --- Runtime State ---
  @state() private accessor consoleLogs: string[] = [];
  @state() private accessor compassHeading = 0; // In degrees
  @state() private accessor isKeyboardActive = false;

  constructor() {
    super();
    const container = GTNContainer.getInstance();
    this.turtleRepo = container.resolve(GTN_TYPES.TurtleRepository);
    this.langService = container.resolve(GTN_TYPES.LanguageService);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // --- Helpers ---

  /**
   * Helper to get localized UI strings
   */
  private t(key: string): string {
    return this.langService.translate(key);
  }

  /**
   * Helper to get localized DSL command names for console log.
   * Example: 'FORWARD' -> 'AV' (fr) or 'FD' (en)
   *
   * Note. The button labels stay managed with UI Language.
   *
   */
  private getCmdName(internalKeyword: GTNTokenName): string {
    const localizedKeyword = this.langService
      .getLocalizedKeyword(internalKeyword, this.selectShortest)
      .toUpperCase();
    return localizedKeyword;
  }

  private selectShortest(values: string[]) {
    if (values.length < 1) {
      return undefined;
    }

    const result = values.reduce((shortest, current) => {
      return current.length < shortest.length ? current : shortest;
    }, values[0]!);
    return result;
  }

  // --- Actions ---

  private execute(commandName: string, args: (string | number)[], action: () => void) {
    // 1. Execute Domain Logic
    action();

    // 2. Log to Console (Reverse DSL)
    // We reconstruct the command string, e.g. "AV 50"
    const commandCode = `${commandName} ${args.join(' ')}`.trim();

    const timestamp = new Date().toLocaleTimeString().split(' ')[0];
    this.consoleLogs = [`[${timestamp}] ${commandCode}`, ...this.consoleLogs];

    // 3. Update Compass
    // Auto-scroll to bottom not needed since we use flex-reverse for history log usually,
    // but here we put newest at top.
    this.updateCompass();

    // 4. Request Update to ensure UI reflects changes immediately
    this.requestUpdate();
  }

  private updateCompass() {
    const turtle = this.turtleRepo.getAll()[0];
    if (turtle) {
      // Convert Quaternion to Euler Z (Heading/Yaw)
      // Math matches standard 3D to 2D heading conversion
      const q = turtle.state.rotation;
      const siny_cosp = 2 * (q.w * q.z + q.x * q.y);
      const cosy_cosp = 1 - 2 * (q.y * q.y + q.z * q.z);
      const headingRad = toRadian(Math.atan2(siny_cosp, cosy_cosp));

      // Convert to degrees
      this.compassHeading = -fromRadianToDegree(headingRad);
    }
  }

  // --- D-Pad Commands (Using Inputs) ---

  private readonly doForward = () => {
    const cmd = this.getCmdName('GT_FORWARD');
    this.execute(cmd, [this.distanceStep], () => {
      this.turtleRepo.getAll().forEach((t) => t.forward(this.distanceStep));
    });
  };

  private readonly doBackward = () => {
    const cmd = this.getCmdName('GT_BACKWARD');
    this.execute(cmd, [this.distanceStep], () => {
      this.turtleRepo.getAll().forEach((t) => t.backward(this.distanceStep));
    });
  };

  private readonly doLeft = () => {
    const cmd = this.getCmdName('GT_LEFT');
    this.execute(cmd, [this.angleStep], () => {
      this.turtleRepo.getAll().forEach((t) => t.left(this.angleStep));
    });
  };

  private readonly doRight = () => {
    const cmd = this.getCmdName('GT_RIGHT');
    this.execute(cmd, [this.angleStep], () => {
      this.turtleRepo.getAll().forEach((t) => t.right(this.angleStep));
    });
  };

  // --- Direct Commands (Fixed Values) ---

  private readonly doForwardDist = (dist: number) =>
    this.runMove('GT_FORWARD', dist, (t, v) => t.forward(v));
  private readonly doBackwardDist = (dist: number) =>
    this.runMove('GT_BACKWARD', dist, (t, v) => t.backward(v));

  // Note: angles in buttons are Degrees in UI
  private readonly doLeftAngle = (deg: number) =>
    this.runRotate('GT_LEFT', toDegree(deg), (t, v) => t.left(v));
  private readonly doRightAngle = (deg: number) =>
    this.runRotate('GT_RIGHT', toDegree(deg), (t, v) => t.right(v));

  // --- Generic Helpers ---

  private runMove(token: GTNTokenName, dist: number, op: (t: any, v: number) => void) {
    const cmd = this.getCmdName(token);
    this.execute(cmd, [dist], () => {
      this.turtleRepo.getAll().forEach((t) => op(t, dist));
    });
  }

  private runRotate(token: GTNTokenName, angle: number, op: (t: any, v: number) => void) {
    const cmd = this.getCmdName(token);
    // Display integer degrees in log for readability if possible, or keeping raw value
    // Assuming the interpreter works with the configured unit.
    this.execute(cmd, [angle], () => {
      this.turtleRepo.getAll().forEach((t) => op(t, angle));
    });
  }

  // --- Tools ---

  private readonly doPenUp = () => {
    const cmd = this.getCmdName('GT_PEN_UP');
    this.execute(cmd, [], () => {
      this.turtleRepo.getAll().forEach((t) => t.penUp());
    });
  };

  private readonly doPenDown = () => {
    const cmd = this.getCmdName('GT_PEN_DOWN');
    this.execute(cmd, [], () => {
      this.turtleRepo.getAll().forEach((t) => t.penDown());
    });
  };

  private readonly doShowTurtle = () => this.runSimple('GT_SHOW_TURTLE', (t) => t.setVisible(true));
  private readonly doHideTurtle = () =>
    this.runSimple('GT_HIDE_TURTLE', (t) => t.setVisible(false));

  private readonly doClear = () => {
    const cmd = this.getCmdName('GT_VG');
    this.execute(cmd, [], () => {
      this.turtleRepo.clearAllLines();
    });
  };

  private readonly doReset = () => {
    const cmd = this.getCmdName('GT_RZ');
    this.execute(cmd, [], () => {
      this.turtleRepo.reset();
      this.compassHeading = 0;
      this.consoleLogs = [];
    });
  };

  private readonly doColor = (colorName: GTNColor) => {
    const cmd = this.getCmdName('GT_PEN_COLOR'); // Assuming GT_SET_COLOR maps to CR/SETPENCOLOR
    this.execute(cmd, [colorName], () => {
      // In a real implementation, we would parse the color string or pass it to the turtle
      // Assuming the repository handles string colors or we map them here
      // For simplicity in sandbox, we assume the repository/turtle understands css names
      this.turtleRepo.getAll().forEach((t) => t.setPenColor(colorName));
    });
  };

  private runSimple(token: GTNTokenName, op: (t: any) => void) {
    const cmd = this.getCmdName(token);
    this.execute(cmd, [], () => this.turtleRepo.getAll().forEach((t) => op(t)));
  }

  // --- Keyboard Handling ---

  private readonly handleKeyDown = (e: KeyboardEvent) => {
    if (!this.isKeyboardActive) return;

    // Prevent default scrolling for arrow keys
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
    }

    switch (e.key) {
      case 'ArrowUp':
      case 'w':
        return this.doForward();
      case 'ArrowDown':
      case 's':
        return this.doBackward();
      case 'ArrowLeft':
      case 'a':
        return this.doLeft();
      case 'ArrowRight':
      case 'd':
        return this.doRight();
      case 'Backspace':
      case 'Delete':
        return this.doClear();
      case 'Escape':
        return this.doReset();
    }
  };

  private readonly toggleKeyboard = () => {
    this.isKeyboardActive = !this.isKeyboardActive;
  };

  // --- Render ---

  render() {
    // Helper for cleaner templates
    const t = (k: string) => this.t(k);
    const fd = t('commands.GT_FORWARD');
    const bk = t('commands.GT_BACKWARD');
    const lt = t('commands.GT_LEFT');
    const rt = t('commands.GT_RIGHT');
    const color = (c: string) => this.doColor(toNamedCssColor(c));

    return html`
      <div class="sandbox-layout">
        <aside class="column left-column">
          <div class="panel compass-panel">
            <div class="compass">
              <div class="compass-dial">
                <span class="label-n">${t('compass.n')}</span>
                <span class="label-e">${t('compass.e')}</span>
                <span class="label-s">${t('compass.s')}</span>
                <span class="label-w">${t('compass.w')}</span>
              </div>
              <div
                class="compass-needle"
                style="transform: rotate(${Math.round(this.compassHeading)}deg)"
              ></div>
            </div>
            <div class="compass-value">${Math.round(this.compassHeading)}°</div>
          </div>

          <div class="panel controls">
            <div class="d-pad">
              <div></div>
              <button
                id="fdbtn"
                @click=${this.doForward}
                title="${t('sandbox.tooltip.forward')} (↑)"
              >
                ▲
              </button>
              <div></div>

              <button id="leftbtn" @click=${this.doLeft} title="${t('sandbox.tooltip.left')} (←)">
                ◀
              </button>
              <button
                id="bkbtn"
                @click=${this.doBackward}
                title="${t('sandbox.tooltip.backward')} (↓)"
              >
                ▼
              </button>
              <button
                id="rightbtn"
                @click=${this.doRight}
                title="${t('sandbox.tooltip.right')} (→)"
              >
                ▶
              </button>
            </div>

            <div class="tools-grid">
              <button class="danger" @click=${this.doClear}>${t('sandbox.btn.clear_graph')}</button>
              <button class="danger" @click=${this.doReset}>${t('sandbox.btn.reset')}</button>
            </div>
          </div>

          <div class="panel settings">
            <h3>${t('sandbox.settings_title')}</h3>
            <div class="input-group">
              <label>${t('sandbox.step')}</label>
              <input
                type="number"
                .value=${this.distanceStep}
                @change=${(e: any) => (this.distanceStep = Number(e.target.value))}
              />
            </div>
            <div class="input-group">
              <label>${t('sandbox.angle')}</label>
              <input
                type="number"
                .value=${this.angleStep}
                @change=${(e: any) => (this.angleStep = toDegree(Number(e.target.value)))}
              />
            </div>
            <button
              class="toggle-btn ${classMap({ active: this.isKeyboardActive })}"
              @click=${this.toggleKeyboard}
            >
              ${this.isKeyboardActive
                ? `⌨️ ${t('sandbox.keyboard_on')}`
                : `⌨️ ${t('sandbox.keyboard_off')}`}
            </button>
          </div>
        </aside>

        <main class="column center-column">
          <div class="canvas-wrapper">
            <slot></slot>
          </div>

          <div class="panel console">
            <h3>${t('sandbox.history_title')}</h3>
            <div class="console-output">
              ${this.consoleLogs.length === 0
                ? html`<span class="empty">${t('sandbox.history_empty')}</span>`
                : this.consoleLogs.map((log) => html`<div class="log-line">${log}</div>`)}
            </div>
          </div>
        </main>

        <aside class="column right-column">
          <div class="panel direct-cmds">
            <h3>COMMANDES</h3>

            <div class="cmd-row">
              <button @click=${() => this.doForwardDist(10)}>${fd} 10</button>
              <button @click=${() => this.doForwardDist(25)}>${fd} 25</button>
              <button @click=${() => this.doForwardDist(100)}>${fd} 100</button>
            </div>

            <div class="cmd-row">
              <button @click=${() => this.doBackwardDist(10)}>${bk} 10</button>
              <button @click=${() => this.doBackwardDist(25)}>${bk} 25</button>
              <button @click=${() => this.doBackwardDist(100)}>${bk} 100</button>
            </div>

            <div class="separator"></div>

            <div class="cmd-row">
              <button @click=${() => this.doLeftAngle(30)}>${lt} 30&nbsp;°</button>
              <button @click=${() => this.doLeftAngle(45)}>${lt} 45&nbsp;°</button>
              <button @click=${() => this.doLeftAngle(90)}>${lt} 90&nbsp;°</button>
            </div>

            <div class="cmd-row">
              <button @click=${() => this.doRightAngle(30)}>${rt} 30&nbsp;°</button>
              <button @click=${() => this.doRightAngle(45)}>${rt} 45&nbsp;°</button>
              <button @click=${() => this.doRightAngle(90)}>${rt} 90&nbsp;°</button>
            </div>

            <div class="separator"></div>

            <div class="tools-grid">
              <button @click=${this.doPenUp}>${t('sandbox.btn.penup')}</button>
              <button @click=${this.doPenDown}>${t('sandbox.btn.pendown')}</button>
              <button @click=${this.doHideTurtle}>${t('sandbox.btn.hideturtle')}</button>
              <button @click=${this.doShowTurtle}>${t('sandbox.btn.showturtle')}</button>
            </div>
          </div>

          <div class="panel colors">
            <h3>CRAYON</h3>
            <div class="color-grid">
              <button
                class="color-btn"
                style="background:black; color:white"
                @click=${() => color(NamedCssColor.BLACK)}
                title="${t('sandbox.btn.colors.black')}"
              ></button>
              <button
                class="color-btn"
                style="background:red"
                @click=${() => color(NamedCssColor.RED)}
                title="${t('sandbox.btn.colors.' + NamedCssColor.RED)}"
              ></button>
              <button
                class="color-btn"
                style="background:blue"
                @click=${() => color(NamedCssColor.BLUE)}
                title="${t('sandbox.btn.colors.' + NamedCssColor.BLUE)}"
              ></button>
              <button
                class="color-btn"
                style="background:green"
                @click=${() => color(NamedCssColor.GREEN)}
                title="${t('sandbox.btn.colors.' + NamedCssColor.GREEN)}"
              ></button>
              <button
                class="color-btn"
                style="background:gold"
                @click=${() => color(NamedCssColor.YELLOW)}
                title="${t('sandbox.btn.colors.' + NamedCssColor.YELLOW)}"
              ></button>
              <button
                class="color-btn"
                style="background:orange"
                @click=${() => color(NamedCssColor.ORANGE)}
                title="${t('sandbox.btn.colors.' + NamedCssColor.ORANGE)}"
              ></button>
            </div>
          </div>
        </aside>
      </div>
    `;
  }
}
