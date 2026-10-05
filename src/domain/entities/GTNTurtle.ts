import { GTNTurtleState } from '@domain/components/GTNTurtleState';
import type { GTNGeometryService } from '@domain/services/GTNGeometryService';
import { type GTNTurtleId, toDegree, type Degree } from '@domain/types';
import {
  GTNPenPosition,
  GTNQuaternion,
  GTNVector3,
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
 *
 */
export class GTNTurtle {
  public state: GTNTurtleState;
  public penState: GTNPenState;
  public isVisible: boolean = true;
  public lines: GTNLineSegment[] = [];

  private _version: number = 0;

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

  /**
   * Volatile in-memory version. Increments with every geometric or visual modification.
   */
  public get version(): number {
    return this._version;
  }

  /**
   * To be called by the domain services whenever they change the state of the turtle.
   */
  public markModified(): void {
    this._version++;
  }

  public forward(distance: number): void {
    const startPos = this.state.position;

    // Calculate new position
    const newPos = this.geometryService.calculateNewPosition(
      this.state.position,
      this.state.orientation,
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
    this.markModified();
  }

  public backward(distance: number): void {
    this.forward(-distance);
  }

  public right(angle: Degree): void {
    this.state.orientation = this.geometryService.rotateZ(this.state.orientation, toDegree(-angle));
    this.markModified();
  }

  public left(angle: Degree): void {
    this.state.orientation = this.geometryService.rotateZ(this.state.orientation, angle);
    this.markModified();
  }

  /**
   * Instantly moves the turtle to new absolute coordinates.
   */
  public teleportTo(position: GTNVector3): void {
    this.state.position = position;
    this.markModified();
  }

  /**
   * Sets the absolute orientation of the turtle.
   */
  public setOrientation(orientation: GTNQuaternion): void {
    this.state.orientation = orientation;
    this.markModified();
  }

  public penUp(): void {
    this.penState.position = GTNPenPosition.UP;
    this.markModified();
  }

  public penDown(): void {
    this.penState.position = GTNPenPosition.DOWN;
    this.markModified();
  }

  public setPenColor(color: GTNColor): void {
    this.penState.color = color;
    this.markModified();
  }

  public setPenSize(size: number): void {
    this.penState.width = size;
    this.markModified();
  }

  public setPenOpacity(opacity: number): void {
    // Clamp between 0 and 1 for safety
    this.penState.opacity = Math.max(0, Math.min(1, opacity));
    this.markModified();
  }

  /** Soft reset: don't clear the trails. Just reset the position, pen and visibility
   */
  public reset() {
    this.isVisible = true;
    this.state = new GTNTurtleState();
    this.penState = { ...defaultPenState };
    this.markModified();
  }

  /** Soft reset: Just clear the trails.
   */
  public clearLines(): void {
    this.lines = [];
    this.markModified();
  }
}
