import { fixture, html } from '@open-wc/testing';

// Import the component so it registers in the customElements registry
import './gtn-icon';
import type { GtnIcon } from './gtn-icon';

describe('GtnIcon Component', () => {
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // Suppress console.warn during tests to keep terminal output clean
    consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  it('should render an empty template if no icon is provided', async () => {
    const el = await fixture<GtnIcon>(html`<gtn-icon></gtn-icon>`);

    // Shadow root should exist, but contain no SVG
    expect(el.shadowRoot).not.toBeNull();
    const svg = el.shadowRoot!.querySelector('svg');
    expect(svg).toBeNull();
  });

  it('should render an SVG when a valid icon name is provided', async () => {
    // 'check' is a known valid icon from your registered-icons.ts
    const el = await fixture<GtnIcon>(html`<gtn-icon icon="check"></gtn-icon>`);

    const svg = el.shadowRoot!.querySelector('svg');
    expect(svg).not.toBeNull();

    // Assert default attributes are applied correctly
    expect(svg!.getAttribute('aria-hidden')).toBe('true');
    expect(svg!.getAttribute('focusable')).toBe('false');
    expect(svg!.getAttribute('preserveAspectRatio')).toBe('xMidYMid meet');
    expect(svg!.getAttribute('viewBox')).toBe('0 0 24 24'); // DEFAULT_VIEWBOX
  });

  it('should apply a custom viewBox if the icon definition dictates it', async () => {
    // 'draw' is a known icon that uses GOOGLE_SYMBOLS_VIEWBOX
    const el = await fixture<GtnIcon>(html`<gtn-icon icon="draw"></gtn-icon>`);

    const svg = el.shadowRoot!.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg!.getAttribute('viewBox')).toBe('0 -960 960 960');
  });

  it('should render an empty template and log a warning for an invalid icon', async () => {
    const el = await fixture<GtnIcon>(html`<gtn-icon icon="invalid-fake-icon"></gtn-icon>`);

    const svg = el.shadowRoot!.querySelector('svg');
    expect(svg).toBeNull();

    // Verify the underlying getIconFromName triggered the warning
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
    expect(consoleWarnSpy).toHaveBeenCalledWith('[GtnIcon] Icon not found: "invalid-fake-icon"');
  });

  it('should dynamically update the SVG if the icon property changes', async () => {
    const el = await fixture<GtnIcon>(html`<gtn-icon icon="check"></gtn-icon>`);
    expect(el.shadowRoot!.querySelector('svg')).not.toBeNull();

    // Change property to invalid
    el.icon = 'fake';
    await el.updateComplete; // Wait for Lit to re-render

    expect(el.shadowRoot!.querySelector('svg')).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalled();
  });
});
