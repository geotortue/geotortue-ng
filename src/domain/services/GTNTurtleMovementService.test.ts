import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GTNTurtleMovementService } from './GTNTurtleMovementService';
import { GTNTurtle } from '@domain/entities/GTNTurtle';
import type { GTNGeometryService } from '@domain/services/GTNGeometryService';
import type { GTNTurtleId } from '@domain/types';

vi.mock('@domain/components/GTNTurtleState', () => {
  return {
    GTNTurtleState: class {
      public position = { x: 0, y: 0, z: 0 };
      public orientation = { x: 0, y: 0, z: 0, w: 1 };
    }
  };
});

describe('GTNTurtleMovementService', () => {
  let movement: GTNTurtleMovementService;
  let turtle: GTNTurtle;
  let mockGeometryService: GTNGeometryService;

  beforeEach(() => {
    mockGeometryService = {
      calculateNewPosition: vi.fn(),
      rotateZ: vi.fn()
    } as unknown as GTNGeometryService;

    movement = new GTNTurtleMovementService(mockGeometryService);
    turtle = new GTNTurtle('t1' as GTNTurtleId, mockGeometryService);
  });

  it('wrap should create movement segments without separating teleports', () => {
    (mockGeometryService.calculateNewPosition as any).mockReturnValue({ x: 60, y: 15, z: 0 });

    movement.moveForward(turtle, 10, 'WRAP', { width: 100, height: 100 });

    // the turtle position is outside the workspace bounds
    expect(turtle.state.position).toEqual({ x: 60, y: 15, z: 0 });
    // without any teleport segment
    expect(turtle.lines).toHaveLength(1);
    expect(turtle.lines[0]!.start).toEqual({ x: 0, y: 0, z: 0 });
    expect(turtle.lines[0]!.end).toEqual({ x: 60, y: 15, z: 0 });
  });

  it('fence should stop at boundary and not consume remaining command distance', () => {
    (mockGeometryService.calculateNewPosition as any).mockImplementation(
      (pos: any, _rot: any, d: number) => ({
        x: pos.x + d,
        y: pos.y,
        z: pos.z
      })
    );

    turtle.state.position = { x: 49, y: 0, z: 0 } as any;

    movement.moveForward(turtle, 10, 'FENCE', { width: 100, height: 100 });
    expect(turtle.state.position).toEqual({ x: 50, y: 0, z: 0 });

    movement.moveForward(turtle, 10, 'FENCE', { width: 100, height: 100 });
    expect(turtle.state.position).toEqual({ x: 50, y: 0, z: 0 });
  });
});
