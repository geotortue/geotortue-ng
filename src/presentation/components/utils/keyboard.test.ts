import { describe, it, expect } from 'vitest';
import { Keyboard } from './keyboard';

describe('Keyboard Namespace', () => {
  describe('isTypingContent()', () => {
    it('should return true for single character keys (printable content)', () => {
      // Testing with Enum values
      expect(Keyboard.isTypingContent(Keyboard.Keys.A)).toBe(true);
      expect(Keyboard.isTypingContent(Keyboard.Keys.Digit1)).toBe(true);
      expect(Keyboard.isTypingContent(Keyboard.Keys.Space)).toBe(true);
      expect(Keyboard.isTypingContent(Keyboard.Keys.Semicolon)).toBe(true);

      // Testing with raw strings
      expect(Keyboard.isTypingContent('a')).toBe(true);
      expect(Keyboard.isTypingContent('5')).toBe(true);
      expect(Keyboard.isTypingContent('?')).toBe(true);
    });

    it('should return false for command/modifier keys', () => {
      // Testing with Enum values
      expect(Keyboard.isTypingContent(Keyboard.Keys.Enter)).toBe(false);
      expect(Keyboard.isTypingContent(Keyboard.Keys.Backspace)).toBe(false);
      expect(Keyboard.isTypingContent(Keyboard.Keys.Shift)).toBe(false);
      expect(Keyboard.isTypingContent(Keyboard.Keys.ArrowLeft)).toBe(false);
      expect(Keyboard.isTypingContent(Keyboard.Keys.Escape)).toBe(false);
      expect(Keyboard.isTypingContent(Keyboard.Keys.F12)).toBe(false);

      // Testing with raw strings
      expect(Keyboard.isTypingContent('Control')).toBe(false);
      expect(Keyboard.isTypingContent('PageUp')).toBe(false);
    });
  });

  describe('Enums mappings', () => {
    it('should map Keys correctly', () => {
      expect(Keyboard.Keys.Enter).toBe('Enter');
      expect(Keyboard.Keys.Space).toBe(' '); // Space is special
      expect(Keyboard.Keys.A).toBe('A');
      expect(Keyboard.Keys.Digit0).toBe('0');
      expect(Keyboard.Keys.Semicolon).toBe(';');
    });

    it('should map Codes correctly', () => {
      expect(Keyboard.Codes.Enter).toBe('Enter');
      expect(Keyboard.Codes.Space).toBe('Space');
      expect(Keyboard.Codes.KeyA).toBe('KeyA');
      expect(Keyboard.Codes.Digit0).toBe('Digit0');
      expect(Keyboard.Codes.Semicolon).toBe('Semicolon');
    });
  });
});
