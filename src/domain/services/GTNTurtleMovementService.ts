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

type WorkspaceBounds = { width: number; height: number };

export type MovementAction =
  | { type: 'draw'; start: GTNVector3; end: GTNVector3 }
  | { type: 'move'; start: GTNVector3; end: GTNVector3 };

/**
 * @description Domain service responsible for computing and applying the turtle's geometric movements.
 * It translates logical movement commands (e.g., moving forward) into concrete state mutations,
 * applying physical collision rules based on the active boundary mode.
 *
 * @why Separates the raw mathematical calculation of vectors (handled by `GTNGeometryService`) from
 * the domain-specific business rules of movement (such as stopping at a wall in `FENCE` mode).
 * This ensures the turtle's internal geometric state remains pure and independent of screen rendering.
 *
 * @how First, it computes a theoretical, unbounded target coordinate using the current position, orientation,
 * and distance. Then, it evaluates this candidate against the `GTNTurtleBoundaryMode`. If the turtle
 * is constrained by physical boundaries (`FENCE`), it calculates the exact intersection point with the
 * `WorkspaceBounds` and halts the turtle there. It finally generates `MovementAction`s and updates the turtle's state.
 *
 * @rule In `WRAP` and `WINDOW` modes, this service intentionally allows the turtle's coordinates to exceed
 * the `WorkspaceBounds` infinitely. The domain considers the space unbounded; visual wrapping or clipping
 * is strictly delegated to the Presentation layer (e.g., `GTNQuotientSpaceProjection`).
 *
 * @warning This service relies on a locally isolated `mathjs` instance with a specific tolerance (`1e-9`).
 * This is crucial to absorb standard IEEE 754 floating-point inaccuracies during trigonometric calculations
 * and boundary crossing detections, preventing infinite micro-movements or erratic snapping at the borders.
 *
 * @example
 * const movementService = new GTNTurtleMovementService(new GTNGeometryService());
 * const bounds: WorkspaceBounds = { width: 800, height: 600 };
 *
 * // Instructs the turtle to move forward by 100 units.
 * // If the boundaryMode is 'FENCE' and the border is only 40 units away,
 * // the turtle's path will be truncated and it will stop exactly at the border.
 * movementService.moveForward(myTurtle, 100, 'FENCE', bounds);
 */
export class GTNTurtleMovementService {
  constructor(private readonly geometryService: GTNGeometryService) {}

  public moveForward(
    turtle: GTNTurtle,
    distance: number,
    boundaryMode: GTNTurtleBoundaryMode,
    viewport: WorkspaceBounds
  ): void {
    const start = turtle.state.position;
    const candidate = this.geometryService.calculateNewPosition(
      start,
      turtle.state.orientation,
      distance
    );

    const actions = this.resolveTarget(boundaryMode, start, candidate, viewport);
    this.applyActions(turtle, actions);
  }

  private applyActions(turtle: GTNTurtle, actions: MovementAction[]): void {
    console.log('GTNTurtleMovementService.applyActions, actions: ', actions);
    actions
      .filter((action) => action.type === 'draw')
      .forEach((action) => this.drawSegment(turtle, action.start, action.end));

    // Update the turtle's final position to the end of the very last segment
    turtle.state.position = actions[actions.length - 1]!.end;
    turtle.markModified();
  }

  private resolveTarget(
    boundaryMode: GTNTurtleBoundaryMode,
    start: GTNVector3,
    target: GTNVector3,
    viewport: WorkspaceBounds
  ): MovementAction[] {
    // WINDOW and WRAP both retain the turtle's position in the unbounded
    // geometric plane. WRAP is a rendering projection, rather than a
    // teleportation of the domain position.
    if (boundaryMode === 'WINDOW' || boundaryMode === 'WRAP' || !this.hasFiniteViewport(viewport)) {
      return this.resolveUnBoundedMovement(start, target);
    } else {
      return this.resolveBoundedMovement(start, target, viewport);
    }
  }

  private resolveUnBoundedMovement(start: GTNVector3, end: GTNVector3): MovementAction[] {
    return [{ type: 'draw', start, end }];
  }

  private resolveBoundedMovement(
    start: GTNVector3,
    end: GTNVector3,
    viewport: WorkspaceBounds
  ): MovementAction[] {
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

  private hasFiniteViewport(viewport: WorkspaceBounds): boolean {
    return (
      Number.isFinite(viewport.width) &&
      Number.isFinite(viewport.height) &&
      viewport.width > 0 &&
      viewport.height > 0
    );
  }

  private findFirstCrossing(
    start: GTNVector3,
    end: GTNVector3,
    viewport: WorkspaceBounds
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
