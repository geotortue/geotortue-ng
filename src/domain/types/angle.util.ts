import { type Degree, toDegree } from './degree';
import { toRadian, type Radian } from './radian';

const DEGREE_PER_RADIAN = 180 / Math.PI;
const RADIAN_PER_DEGREE = Math.PI / 180;

/**
 * Converts Radians to Degrees.
 * Formula: degrees = radians * (180 / PI)
 */
export function fromRadianToDegree(radians: Radian): Degree {
  return toDegree(radians * DEGREE_PER_RADIAN);
}

/**
 * Converts Degrees to Radians.
 * Formula: radians = degrees * (PI / 180)
 */
export function fromDegreeToRadian(degrees: Degree): Radian {
  return toRadian(degrees * RADIAN_PER_DEGREE);
}
