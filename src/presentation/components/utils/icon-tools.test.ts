import {
  isIconName,
  assertIconName,
  toIconName,
  tryToIconName,
  getIconFromName,
  STANDARD_ICON_VIEWBOX,
  GOOGLE_SYMBOLS_VIEWBOX
} from './icon-tools';

describe('registered-icons', () => {
  describe('isIconName()', () => {
    it('should return true for valid icon names', () => {
      expect(isIconName('check')).toBe(true);
      expect(isIconName('home')).toBe(true);
      expect(isIconName('draw')).toBe(true);
    });

    it('should return false for invalid string names', () => {
      expect(isIconName('nonexistent-icon')).toBe(false);
      expect(isIconName('')).toBe(false);
    });

    it('should return false for non-string types', () => {
      expect(isIconName(null)).toBe(false);
      expect(isIconName(undefined)).toBe(false);
      expect(isIconName(123)).toBe(false);
      expect(isIconName({})).toBe(false);
      expect(isIconName([])).toBe(false);
    });

    it('should prevent prototype pollution (e.g.: toString, hasOwnProperty)', () => {
      // These exist on the object's prototype but are not valid icon keys
      expect(isIconName('toString')).toBe(false);
      expect(isIconName('hasOwnProperty')).toBe(false);
    });
  });

  describe('assertIconName()', () => {
    it('should not throw if the icon name is valid', () => {
      expect(() => assertIconName('menu')).not.toThrow();
    });

    it('should throw an Error if the icon name is invalid', () => {
      expect(() => assertIconName('fake-icon')).toThrowError(/Invalid IconName: "fake-icon"/);
      expect(() => assertIconName(null)).toThrowError(/Invalid IconName: "null"/);
    });
  });

  describe('toIconName()', () => {
    it('should return the typed IconName if valid', () => {
      expect(toIconName('settings')).toBe('settings');
    });

    it('should throw an Error if the icon name is invalid', () => {
      expect(() => toIconName('fake')).toThrowError(/Invalid IconName: "fake"/);
    });
  });

  describe('tryToIconName()', () => {
    it('should return the IconName if valid', () => {
      expect(tryToIconName('user')).toBe('user');
    });

    it('should return undefined for invalid or empty inputs', () => {
      expect(tryToIconName('fake-icon')).toBeUndefined();
      expect(tryToIconName(null)).toBeUndefined();
      expect(tryToIconName(undefined)).toBeUndefined();
      expect(tryToIconName(123)).toBeUndefined();
    });
  });

  describe('getIconFromName()', () => {
    let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      // Mock console.warn to keep test output clean and verify it gets called
      consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    });

    afterEach(() => {
      consoleWarnSpy.mockRestore();
    });

    it('should return the icon definition with default viewBox if none is specified', () => {
      const result = getIconFromName('check');
      expect(result).toBeDefined();
      expect(result?.content).toBeDefined();
      expect(result?.viewBox).toBe(STANDARD_ICON_VIEWBOX);
    });

    it('should return the icon definition with its specific viewBox if defined', () => {
      const result = getIconFromName('draw');
      expect(result).toBeDefined();
      expect(result?.content).toBeDefined();
      expect(result?.viewBox).toBe(GOOGLE_SYMBOLS_VIEWBOX);
    });

    it('should return undefined and log a warning for invalid icon names', () => {
      const result = getIconFromName('invalid-icon');

      expect(result).toBeUndefined();
      expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
      expect(consoleWarnSpy).toHaveBeenCalledWith('[GtnIcon] Icon not found: "invalid-icon"');
    });

    it('should return undefined and log a warning for null/undefined', () => {
      const resultNull = getIconFromName(null);
      expect(resultNull).toBeUndefined();

      const resultUndefined = getIconFromName(undefined);
      expect(resultUndefined).toBeUndefined();

      // Called twice, once for null, once for undefined
      expect(consoleWarnSpy).toHaveBeenCalledTimes(2);
    });
  });
});
