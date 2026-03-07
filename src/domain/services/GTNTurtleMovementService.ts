import { create, all } from 'mathjs';

import type { GTNTurtle } from '@domain/entities/GTNTurtle';
import type { GTNGeometryService } from '@domain/services/GTNGeometryService';
import type { GTNTurtleBoundaryMode } from '@domain/types';
import { GTNPenPosition, GTNVector3 } from '@domain/value-objects';

/*
 * The value of 1e-9 is a practical compromise for geometric robustness, not a mathematically unique constant:
 * - It’s small enough not to visibly alter normal turtle geometry.
 * - It’s large enough to absorb typical floating-point noise from trig/linear calculations.
 * - It gives stable behavior at borders without introducing noticeable snapping.
 *
 * Note. Number in javascript are in IEEE 754 double-precision 64-bit floating-point format, i.e.
 *       1 bit for the sign, 11 for the exponent, and 52 for the fraction/mantissa.
 *       It can only safely represent numbers up to about 15 to 17 decimal places of precision.
 *       Usually, 1e−8 is the optimal balance between theoretical accuracy and floating-point error in JS.
 *
 * Note. By default math.js use IEEE 754 double-precision 64-bit floating-point format as javascript.
 *
 * We don't need here the same tolerance value as math.js `absTol` (i.e. by default 1e-15). Let start with:
 */
// Create a local, isolated math.js instance specifically for turtle geometry resolution.
// This sets both relative and absolute tolerances to 1e-9, overriding the 1e-12/1e-15 defaults,
// without polluting the global math.js configuration used by the AST evaluator.
const math = create(all!, {
  relTol: 1e-9,
  absTol: 1e-9
});

const { equal, larger, smaller } = math;

type Viewport = { width: number; height: number };

export type MovementAction =
  | { type: 'draw'; start: GTNVector3; end: GTNVector3 }
  | { type: 'move'; start: GTNVector3; end: GTNVector3 };

export class GTNTurtleMovementService {
  constructor(private readonly geometryService: GTNGeometryService) {}

  public moveForward(
    turtle: GTNTurtle,
    distance: number,
    boundaryMode: GTNTurtleBoundaryMode,
    viewport: Viewport
  ): void {
    const start = turtle.state.position;
    const candidate = this.geometryService.calculateNewPosition(
      start,
      turtle.state.rotation,
      distance
    );

    const actions = this.resolveTarget(boundaryMode, start, candidate, viewport);
    this.applyActions(turtle, actions);
  }

  private applyActions(turtle: GTNTurtle, actions: MovementAction[]): void {
    // 'move' actions are implicitly handled because the next action
    // picks up from the new teleported start point, and the final
    // position update handles the rest.
    actions
      .filter((action) => action.type === 'draw')
      .forEach((action) => this.drawSegment(turtle, action.start, action.end));

    // Update the turtle's final position to the end of the very last segment
    turtle.state.position = actions[actions.length - 1]!.end;
  }

  private resolveTarget(
    boundaryMode: GTNTurtleBoundaryMode,
    start: GTNVector3,
    target: GTNVector3,
    viewport: Viewport
  ): MovementAction[] {
    if (boundaryMode === 'WINDOW' || !this.hasFiniteViewport(viewport)) {
      return this.resolveWindow(start, target);
    } else if (boundaryMode === 'FENCE') {
      return this.resolveFence(start, target, viewport);
    } else {
      // WRAP
      return this.resolveWrap(start, target, viewport);
    }
  }

  private resolveWindow(start: GTNVector3, end: GTNVector3): MovementAction[] {
    return [{ type: 'draw', start, end }];
  }

  private resolveFence(start: GTNVector3, end: GTNVector3, viewport: Viewport): MovementAction[] {
    const hit = this.findFirstCrossing(start, end, viewport);
    if (!hit) {
      return [{ type: 'draw', start, end }];
    }

    // Treat “hit at start” as no movement, avoiding accidental micro-moves
    if (equal(hit.t, 0)) {
      return [{ type: 'draw', start, end: start }];
    }

    return [{ type: 'draw', start, end: hit.point }];
  }

  private resolveWrap(start: GTNVector3, end: GTNVector3, viewport: Viewport): MovementAction[] {
    const actions: MovementAction[] = [];
    let current = start;
    let remainingDx = end.x - start.x;
    let remainingDy = end.y - start.y;

    // Safety limit of 16 boundary crossings to prevent infinite loops
    for (let i = 0; i < 16; i++) {
      const target = new GTNVector3(current.x + remainingDx, current.y + remainingDy, end.z);
      const hit = this.findFirstCrossing(current, target, viewport);

      if (!hit) {
        actions.push({ type: 'draw', start: current, end: target });
        break;
      }

      if (larger(hit.t, 0)) {
        actions.push({ type: 'draw', start: current, end: hit.point });
      } else {
        // Treat “hit at start” as no movement (hit.t <= EPSILON) for fence mode, avoiding accidental micro-moves
      }

      const teleported = this.teleportAcrossBoundary(hit.point, hit.axis, viewport);

      // Register the teleportation jump without drawing
      actions.push({ type: 'move', start: hit.point, end: teleported });

      const remainingRatio = 1 - hit.t;
      current = teleported;
      remainingDx *= remainingRatio;
      remainingDy *= remainingRatio;

      if (equal(remainingDx, 0) && equal(remainingDy, 0)) {
        break;
      }
    }

    return actions;
  }

  private drawSegment(turtle: GTNTurtle, start: GTNVector3, end: GTNVector3): void {
    if (this.isSamePoint(start, end)) return;
    if (turtle.penState.position === GTNPenPosition.DOWN) {
      turtle.lines.push({
        start,
        end,
        color: turtle.penState.color,
        width: turtle.penState.width,
        opacity: turtle.penState.opacity
      });
    }
  }

  private isSamePoint(a: GTNVector3, b: GTNVector3): boolean {
    return !!equal(a.x, b.x) && !!equal(a.y, b.y) && !!equal(a.z, b.z);
  }

  private hasFiniteViewport(viewport: Viewport): boolean {
    return (
      Number.isFinite(viewport.width) &&
      Number.isFinite(viewport.height) &&
      viewport.width > 0 &&
      viewport.height > 0
    );
  }

  private teleportAcrossBoundary(
    point: GTNVector3,
    axis: 'x' | 'y',
    viewport: Viewport
  ): GTNVector3 {
    const halfW = viewport.width / 2;
    const halfH = viewport.height / 2;
    if (axis === 'x') {
      return new GTNVector3(point.x > 0 ? -halfW : halfW, point.y, point.z);
    }

    return new GTNVector3(point.x, point.y > 0 ? -halfH : halfH, point.z);
  }

  private findFirstCrossing(
    start: GTNVector3,
    end: GTNVector3,
    viewport: Viewport
  ): { t: number; axis: 'x' | 'y'; point: GTNVector3 } | null {
    const halfW = viewport.width / 2;
    const halfH = viewport.height / 2;
    const dx = end.x - start.x;
    const dy = end.y - start.y;

    let bestT = Number.POSITIVE_INFINITY;
    let axis: 'x' | 'y' | null = null;

    const tx = this.computeBoundaryHitT(start.x, dx, halfW);
    if (tx !== null) {
      bestT = tx;
      axis = 'x';
    }

    // Stabilize crossing detection and tie-breaking #1
    const ty = this.computeBoundaryHitT(start.y, dy, halfH);
    if (ty !== null && smaller(ty, bestT)) {
      bestT = ty;
      axis = 'y';
    }

    // Stabilize crossing detection and tie-breaking #2
    if (axis === null || larger(bestT, 1)) {
      return null;
    }

    const t = Math.max(0, Math.min(1, bestT));
    return { t, axis, point: new GTNVector3(start.x + dx * t, start.y + dy * t, end.z) };
  }

  private computeBoundaryHitT(start: number, delta: number, halfRange: number): number | null {
    if (equal(delta, 0)) {
      return null;
    }

    if (delta > 0) {
      if (equal(start, halfRange)) {
        return 0;
      }

      const t = (halfRange - start) / delta;
      if (t >= 0 && t <= 1 && larger(start + delta, halfRange)) {
        return t;
      }

      return null;
    }

    if (equal(start, -halfRange)) {
      return 0;
    }

    const t = (-halfRange - start) / delta;
    if (t >= 0 && t <= 1 && smaller(start + delta, -halfRange)) {
      return t;
    }

    return null;
  }
}
