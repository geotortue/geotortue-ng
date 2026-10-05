import type { GTNLineSegment } from '@domain/value-objects';
import { GTNVector3 } from '@domain/value-objects';

/**
 * 0 : No wrapping (infinite plane or wall)
 * 1 : Normal wrapping (cylinder, torus)
 * -1 : Reversed/non-orientable wrapping (Möbius strip, Klein bottle)
 */
export type GluingMode = 0 | 1 | -1;

export type QuotientSpace = {
  latticeWidth: number;
  latticeHeight: number;
  xGluingMode: GluingMode;
  yGluingMode: GluingMode;
};

type Point = { x: number; y: number; z: number };

/**
 * @description Projects unbounded 3D coordinates and line segments into a bounded topological quotient space.
 * It maps infinite Euclidean space onto fundamental topological domains such as a plane, cylinder, torus, Möbius strip, or Klein bottle.
 *
 * @why In GéoTortue-NG, when the turtle moves infinitely, its path must be constrained to the visible viewport.
 * Simple modulo arithmetic fails for non-orientable surfaces (where coordinates must invert) and causes visual artifacts
 * (long diagonal lines) when a segment crosses a boundary. This class mathematically resolves these issues.
 *
 * @how By defining a fundamental lattice (width and height) and gluing rules (orientable, non-orientable, or none) for both the X and Y axes.
 * It translates points back to the central domain and applies coordinate reflections based on the parity of the crossed boundaries.
 *
 * @rule The fundamental quotient space is always centered on the origin `(0, 0)`.
 * Coordinate limits range from `-latticeWidth/2` to `latticeWidth/2` and `-latticeHeight/2` to `latticeHeight/2`.
 *
 * @warning The Z coordinate is currently preserved as-is. Topological transformations are strictly applied to the 2D XY plane.
 *
 * @example
 * const space: QuotientSpace = {
 *   latticeWidth: 800, latticeHeight: 600,
 *   xGluingMode: -1, yGluingMode: 1
 * }; // Möbius strip topology
 *
 * // Wraps the line into multiple segments, inverting Y coordinates if wrapping horizontally
 * const segments = GTNQuotientSpaceProjection.wrapLine(myLine, space);
 */
export class GTNQuotientSpaceProjection {
  public static projectPosition(point: Point, space: QuotientSpace): GTNVector3 {
    const tileX = Math.floor((point.x + space.latticeWidth / 2) / space.latticeWidth);
    const tileY = Math.floor((point.y + space.latticeHeight / 2) / space.latticeHeight);

    let localX = point.x;
    let localY = point.y;

    // Spatial translation (bring coordinates back into the quotient space)
    if (space.xGluingMode !== 0) localX -= tileX * space.latticeWidth;
    if (space.yGluingMode !== 0) localY -= tileY * space.latticeHeight;

    // Topological reflection for non-orientable spaces
    if (space.xGluingMode < 0 && tileX % 2 !== 0) {
      localY = -localY;
    }
    if (space.yGluingMode < 0 && tileY % 2 !== 0) {
      localX = -localX;
    }

    return new GTNVector3(localX, localY, point.z);
  }

  public static clipLine(line: GTNLineSegment, space: QuotientSpace): GTNLineSegment | null {
    const halfWidth = space.latticeWidth / 2;
    const halfHeight = space.latticeHeight / 2;
    const dx = line.end.x - line.start.x;
    const dy = line.end.y - line.start.y;
    let startT = 0;
    let endT = 1;

    const constraints: Array<[number, number]> = [
      [-dx, line.start.x + halfWidth],
      [dx, halfWidth - line.start.x],
      [-dy, line.start.y + halfHeight],
      [dy, halfHeight - line.start.y]
    ];
    for (const [p, q] of constraints) {
      if (p === 0) {
        if (q < 0) return null;
        continue;
      }
      const t = q / p;
      if (p < 0) startT = Math.max(startT, t);
      else endT = Math.min(endT, t);
      if (startT > endT) return null;
    }

    return {
      ...line,
      start: this.pointAt(line.start, dx, dy, startT, line.end.z),
      end: this.pointAt(line.start, dx, dy, endT, line.end.z)
    };
  }

  public static wrapLine(line: GTNLineSegment, space: QuotientSpace): GTNLineSegment[] {
    const dx = line.end.x - line.start.x;
    const dy = line.end.y - line.start.y;

    const crossings: number[] = [];
    if (space.xGluingMode !== 0) {
      crossings.push(...this.crossings(line.start.x, dx, space.latticeWidth));
    }
    if (space.yGluingMode !== 0) {
      crossings.push(...this.crossings(line.start.y, dy, space.latticeHeight));
    }

    const breakpoints = [0, ...crossings.sort((a, b) => a - b), 1].filter(
      (value, index, values) => index === 0 || value !== values[index - 1]
    );

    return breakpoints.slice(0, -1).map((startT, index) => {
      const endT = breakpoints[index + 1]!;
      const midpoint = this.pointAt(line.start, dx, dy, (startT + endT) / 2, line.end.z);

      const tileX = Math.floor((midpoint.x + space.latticeWidth / 2) / space.latticeWidth);
      const tileY = Math.floor((midpoint.y + space.latticeHeight / 2) / space.latticeHeight);

      const start = this.pointAt(line.start, dx, dy, startT, line.end.z);
      const end = this.pointAt(line.start, dx, dy, endT, line.end.z);

      // Translation
      let startX = space.xGluingMode !== 0 ? start.x - tileX * space.latticeWidth : start.x;
      let startY = space.yGluingMode !== 0 ? start.y - tileY * space.latticeHeight : start.y;
      let endX = space.xGluingMode !== 0 ? end.x - tileX * space.latticeWidth : end.x;
      let endY = space.yGluingMode !== 0 ? end.y - tileY * space.latticeHeight : end.y;

      // Reflection
      if (space.xGluingMode < 0 && tileX % 2 !== 0) {
        startY = -startY;
        endY = -endY;
      }
      if (space.yGluingMode < 0 && tileY % 2 !== 0) {
        startX = -startX;
        endX = -endX;
      }

      return {
        ...line,
        start: new GTNVector3(startX, startY, start.z),
        end: new GTNVector3(endX, endY, end.z)
      };
    });
  }

  private static crossings(start: number, delta: number, period: number): number[] {
    if (delta === 0) return [];
    const lower = Math.min(start, start + delta);
    const upper = Math.max(start, start + delta);
    const firstBoundary = Math.floor((lower + period / 2) / period) + 1;
    const lastBoundary = Math.floor((upper + period / 2) / period);
    const result: number[] = [];
    for (let tile = firstBoundary; tile <= lastBoundary; tile++) {
      const t = (tile * period - period / 2 - start) / delta;
      if (t > 0 && t < 1) result.push(t);
    }
    return result;
  }

  private static pointAt(start: Point, dx: number, dy: number, t: number, z: number): GTNVector3 {
    return new GTNVector3(start.x + dx * t, start.y + dy * t, z);
  }
}
