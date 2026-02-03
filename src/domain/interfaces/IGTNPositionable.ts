import type { GTNPoint3D, GTNQuaternion } from '@domain/value-objects';

export interface IGTNPositionable {
  position: GTNPoint3D;
  orientation: GTNQuaternion;
}
