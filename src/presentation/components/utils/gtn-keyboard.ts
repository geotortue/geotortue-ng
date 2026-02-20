import { Keyboard } from './keyboard';

export type KeyboardCode = Keyboard.Codes;

export const KeyboardCode = Keyboard.Codes;

const dpadCode = {
  Enter: Keyboard.Codes.Enter,
  Escape: Keyboard.Codes.Escape,
  ArrowUp: Keyboard.Codes.ArrowUp,
  ArrowDown: Keyboard.Codes.ArrowDown,
  ArrowLeft: Keyboard.Codes.ArrowLeft,
  ArrowRight: Keyboard.Codes.ArrowRight,
  KeyUp: Keyboard.Codes.KeyW,
  KeyDown: Keyboard.Codes.KeyS,
  KeyLeft: Keyboard.Codes.KeyA,
  KeyRight: Keyboard.Codes.KeyD,
  Backspace: Keyboard.Codes.Backspace,
  Delete: Keyboard.Codes.Delete,
  Space: Keyboard.Codes.Space
} as const;

export type DpadCode = (typeof dpadCode)[keyof typeof dpadCode];

export const DpadCode = dpadCode;
