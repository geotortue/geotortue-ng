import { GTNTurtleState } from '@domain/components/GTNTurtleState';
import type { GTNGeometryService } from '@domain/services/GTNGeometryService';
import { type GTNTurtleId, toDegree, type Degree } from '@domain/types';
import {
  GTNPenPosition,
  type GTNColor,
  type GTNLineSegment,
  type GTNPenState
} from '@domain/value-objects';

const defaultPenState: GTNPenState = {
  position: GTNPenPosition.DOWN,
  color: 0x000000, // Black
  width: 1,
  opacity: 1.0
} as const;

/**
 * ATM, each turtle embeds its own trails/
 * FUTURE
 */
export class GTNTurtle {
  public state: GTNTurtleState;
  public penState: GTNPenState;
  public isVisible: boolean = true;
  public lines: GTNLineSegment[] = [];

  // Composition:
  // - Geometric behavior is externalized (Dependency Injection)
  // - The turtle HAS a pen, it ISN'T a pen
  constructor(
    public readonly id: GTNTurtleId,
    private readonly geometryService: GTNGeometryService
  ) {
    // Initial State: center, facing Up/Y+
    this.state = new GTNTurtleState();
    this.penState = { ...defaultPenState };
  }

  public forward(distance: number): void {
    const startPos = this.state.position;

    // Calculate new position
    const newPos = this.geometryService.calculateNewPosition(
      this.state.position,
      this.state.rotation,
      distance
    );

    // If pen is down, record the line
    if (this.penState.position === GTNPenPosition.DOWN) {
      this.lines.push({
        start: startPos,
        end: newPos,
        color: this.penState.color,
        width: this.penState.width,
        opacity: this.penState.opacity
      });
    }

    this.state.position = newPos;
  }

  public backward(distance: number): void {
    this.forward(-distance);
  }

  public right(angle: Degree): void {
    this.state.rotation = this.geometryService.rotateZ(this.state.rotation, toDegree(-angle));
  }

  public left(angle: Degree): void {
    this.state.rotation = this.geometryService.rotateZ(this.state.rotation, angle);
  }

  public penUp(): void {
    this.penState.position = GTNPenPosition.UP;
  }

  public penDown(): void {
    this.penState.position = GTNPenPosition.DOWN;
  }

  public setPenColor(color: GTNColor): void {
    this.penState.color = color;
  }

  public setPenSize(size: number): void {
    this.penState.width = size;
  }

  public setPenOpacity(opacity: number): void {
    // Clamp between 0 and 1 for safety
    this.penState.opacity = Math.max(0, Math.min(1, opacity));
  }

  /** Soft reset: don't clear the trails. Just reset the position, pen and visibility
   */
  public reset() {
    this.isVisible = true;
    this.state = new GTNTurtleState();
    this.penState = { ...defaultPenState };
  }

  /** Soft reset: Just clear the trails.
   */
  public clearLines(): void {
    this.lines = [];
  }
}
