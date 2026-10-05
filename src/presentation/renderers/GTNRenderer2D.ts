import type { IGTNRenderer } from './IGTNRenderer';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import { GTNTurtle } from '@domain/entities/GTNTurtle';
import type { GTNColor, GTNLineSegment } from '@domain/value-objects';
import { GTNQuotientSpaceProjection, type QuotientSpace } from './GTNQuotientSpaceProjection';
import { toRadian } from '@domain/types';

export class GTNRenderer2D implements IGTNRenderer {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private width: number = 0;
  private height: number = 0;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.style.display = 'block';
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to create 2D context');
    this.ctx = ctx;
  }

  attach(container: HTMLElement): void {
    container.innerHTML = ''; // Clear container
    container.appendChild(this.canvas);
    // Initial size sync
    const rect = container.getBoundingClientRect();
    this.resize(rect.width, rect.height);
  }

  resize(width: number, height: number): void {
    const dpr = window.devicePixelRatio || 1;
    this.width = width;
    this.height = height;

    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;

    this.ctx.scale(dpr, dpr);
  }

  dispose(): void {
    this.canvas.remove();
  }

  render(repo: IGTNTurtleRepository): void {
    const w = this.width;
    const h = this.height;
    const cx = w / 2;
    const cy = h / 2;

    this.ctx.clearRect(0, 0, w, h);

    this.ctx.save();
    this.ctx.translate(cx, cy);
    this.ctx.scale(1, -1); // Standard Cartesian (Y-up)

    const boundaryMode = repo.getBoundaryMode();
    const isWrap = boundaryMode === 'WRAP';

    // Definition of the topological space based on screen size.
    // By default, WRAP mode is treated as standard (GluingMode = 1).
    // To utilize the Möbius strip (-1), the return value of repo.getBoundaryMode() will need to be extended in the future.
    const space: QuotientSpace = {
      latticeWidth: w,
      latticeHeight: h,
      xGluingMode: isWrap ? 1 : 0,
      yGluingMode: isWrap ? 1 : 0
    };

    repo.getAll().forEach((turtle) => {
      this.drawTurtleLines(turtle, boundaryMode, space);
      if (turtle.isVisible) {
        this.drawTurtleSprite(turtle, boundaryMode, space);
      }
    });

    this.ctx.restore();
  }

  private resolveColor(color: GTNColor): string {
    if (typeof color === 'number') {
      return '#' + color.toString(16).padStart(6, '0');
    }
    return color;
  }

  private drawTurtleLines(
    turtle: GTNTurtle,
    boundaryMode: ReturnType<IGTNTurtleRepository['getBoundaryMode']>,
    space: QuotientSpace
  ) {
    turtle.lines.forEach((line) => {
      const displayedLines: GTNLineSegment[] =
        boundaryMode === 'WRAP'
          ? GTNQuotientSpaceProjection.wrapLine(line, space)
          : [GTNQuotientSpaceProjection.clipLine(line, space)].filter(
              (candidate): candidate is NonNullable<typeof candidate> => candidate !== null
            );

      displayedLines.forEach((displayedLine) => {
        this.ctx.beginPath();
        this.ctx.moveTo(displayedLine.start.x, displayedLine.start.y);
        this.ctx.lineTo(displayedLine.end.x, displayedLine.end.y);

        this.ctx.strokeStyle = this.resolveColor(displayedLine.color);
        this.ctx.lineWidth = displayedLine.width;
        this.ctx.globalAlpha = displayedLine.opacity;
        this.ctx.lineCap = 'round';
        this.ctx.stroke();
      });
    });
    this.ctx.globalAlpha = 1.0;
  }

  private drawTurtleSprite(
    turtle: GTNTurtle,
    boundaryMode: ReturnType<IGTNTurtleRepository['getBoundaryMode']>,
    space: QuotientSpace
  ) {
    const position =
      boundaryMode === 'WRAP'
        ? GTNQuotientSpaceProjection.projectPosition(turtle.state.position, space)
        : turtle.state.position;

    const { x, y } = position;
    const q = turtle.state.orientation;
    const angle = toRadian(2 * Math.atan2(q.z, q.w));

    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(angle);

    this.ctx.beginPath();
    this.ctx.moveTo(0, 15);
    this.ctx.lineTo(-10, -10);
    this.ctx.lineTo(10, -10);
    this.ctx.closePath();

    this.ctx.fillStyle = this.resolveColor(turtle.penState.color);
    this.ctx.fill();
    this.ctx.strokeStyle = '#333';
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.restore();
  }
}
