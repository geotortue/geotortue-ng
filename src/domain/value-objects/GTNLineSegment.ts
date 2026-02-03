import type { GTNColor } from './GTNColor';
import type { GTNVector3 } from './GTNVector3';

export interface GTNLineSegment {
  start: GTNVector3;
  end: GTNVector3;
  color: GTNColor;
  width: number;
  opacity: number;
}
