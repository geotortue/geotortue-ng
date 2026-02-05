import { type GTNColor } from './GTNColor';

export enum GTNPenPosition {
  UP = 'UP',
  DOWN = 'DOWN'
}
export interface GTNPenState {
  position: GTNPenPosition;
  color: GTNColor;
  width: number;
  opacity: number;
}
