import { type GTNColor } from './GTNColor';

export interface GTNPenState {
  isDown: boolean;
  color: GTNColor;
  width: number;
  opacity: number;
}
