import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GTNTurtle } from './GTNTurtle';
import { GTNTurtleState } from '@domain/components/GTNTurtleState';
import { GTNPenPosition, toCssColor } from '@domain/value-objects';
import type { GTNGeometryService } from '@domain/services/GTNGeometryService';
import { toDegree, type GTNTurtleId } from '@domain/types';

// Mock the GTNTurtleState class if it has complex logic,
// otherwise we rely on its real implementation if it's a simple DTO.
// For this test, we assume standard behavior or mock properties if needed.
vi.mock('@domain/components/GTNTurtleState', () => {
  return {
    GTNTurtleState: class {
      public position = { x: 0, y: 0, z: 0 };
      public rotation = { x: 0, y: 0, z: 0, w: 1 };
    }
  };
});

describe('GTNTurtle', () => {
  let turtle: GTNTurtle;
  let mockGeometryService: GTNGeometryService;
  const turtleId = 'turtle-1' as GTNTurtleId;

  // Mock Objects for Geometry results
  const MOCK_START_POS = { x: 0, y: 0, z: 0 };
  const MOCK_NEW_POS = { x: 10, y: 0, z: 0 };
  const MOCK_ROTATION = { x: 0, y: 0, z: 0, w: 1 };
  const MOCK_NEW_ROTATION = { x: 0, y: 1, z: 0, w: 0 }; // dummy quaternion

  beforeEach(() => {
    // 1. Setup Mock Geometry Service
    mockGeometryService = {
      calculateNewPosition: vi.fn().mockReturnValue(MOCK_NEW_POS),
      rotateZ: vi.fn().mockReturnValue(MOCK_NEW_ROTATION)
      // Add other methods if interface requires them, mocked as needed
    } as unknown as GTNGeometryService;

    // 2. Instantiate Turtle
    turtle = new GTNTurtle(turtleId, mockGeometryService);
  });

  describe('Initialization', () => {
    it('should initialize with correct defaults', () => {
      expect(turtle.id).toBe(turtleId);
      expect(turtle.isVisible).toBe(true);
      expect(turtle.lines).toHaveLength(0);

      // Check Pen State Defaults
      expect(turtle.penState.position).toBe(GTNPenPosition.DOWN);
      expect(turtle.penState.color).toBe(0x000000);
      expect(turtle.penState.width).toBe(1);
      expect(turtle.penState.opacity).toBe(1.0);
    });
  });

  describe('Movement & Drawing', () => {
    it('should move forward and draw a line when Pen is DOWN', () => {
      // Setup
      turtle.penDown(); // Ensure down
      const distance = 100;

      // Act
      turtle.forward(distance);

      // Assert Logic
      expect(mockGeometryService.calculateNewPosition).toHaveBeenCalledWith(
        MOCK_START_POS,
        MOCK_ROTATION,
        distance
      );

      // Assert State Update
      expect(turtle.state.position).toEqual(MOCK_NEW_POS);

      // Assert Line Creation
      expect(turtle.lines).toHaveLength(1);
      expect(turtle.lines[0]).toEqual({
        start: MOCK_START_POS,
        end: MOCK_NEW_POS,
        color: 0x000000,
        width: 1,
        opacity: 1.0
      });
    });

    it('should move forward BUT NOT draw when Pen is UP', () => {
      // Setup
      turtle.penUp();
      const distance = 50;

      // Act
      turtle.forward(distance);

      // Assert Logic
      expect(mockGeometryService.calculateNewPosition).toHaveBeenCalled();

      // Assert State Update
      expect(turtle.state.position).toEqual(MOCK_NEW_POS);

      // Assert NO Line Created
      expect(turtle.lines).toHaveLength(0);
    });

    it('should move backward (forward with negative distance)', () => {
      const distance = 50;
      turtle.backward(distance);

      expect(mockGeometryService.calculateNewPosition).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        -distance // Verify negation
      );
    });
  });

  describe('Rotation', () => {
    it('should turn right (negative rotation)', () => {
      turtle.right(toDegree(90));

      // Expect rotateZ to be called with current rotation and NEGATIVE degrees
      expect(mockGeometryService.rotateZ).toHaveBeenCalledWith(MOCK_ROTATION, -90);
      expect(turtle.state.rotation).toEqual(MOCK_NEW_ROTATION);
    });

    it('should turn left (positive rotation)', () => {
      turtle.left(toDegree(45));

      // Expect rotateZ to be called with current rotation and POSITIVE degrees
      expect(mockGeometryService.rotateZ).toHaveBeenCalledWith(MOCK_ROTATION, 45);
      expect(turtle.state.rotation).toEqual(MOCK_NEW_ROTATION);
    });
  });

  describe('Pen State Management', () => {
    it('should toggle pen position', () => {
      turtle.penUp();
      expect(turtle.penState.position).toBe(GTNPenPosition.UP);

      turtle.penDown();
      expect(turtle.penState.position).toBe(GTNPenPosition.DOWN);
    });

    it('should set pen color', () => {
      turtle.setPenColor(toCssColor('red'));
      expect(turtle.penState.color).toBe('red');
    });

    it('should set pen size', () => {
      turtle.setPenSize(5);
      expect(turtle.penState.width).toBe(5);
    });

    describe('Opacity', () => {
      it('should set valid opacity', () => {
        turtle.setPenOpacity(0.5);
        expect(turtle.penState.opacity).toBe(0.5);
      });

      it('should clamp opacity to 0 (min)', () => {
        turtle.setPenOpacity(-0.2);
        expect(turtle.penState.opacity).toBe(0);
      });

      it('should clamp opacity to 1 (max)', () => {
        turtle.setPenOpacity(1.5);
        expect(turtle.penState.opacity).toBe(1);
      });
    });
  });

  describe('Reset & Clear', () => {
    it('should clear lines without resetting state', () => {
      // 1. Create a line
      turtle.forward(10);
      expect(turtle.lines).toHaveLength(1);

      // 2. Clear
      turtle.clearLines();

      // 3. Verify
      expect(turtle.lines).toHaveLength(0);
      // Position should remain at "new pos" (10,0,0) from the forward move
      expect(turtle.state.position).toEqual(MOCK_NEW_POS);
    });

    it('should reset state but keep lines (Soft Reset)', () => {
      // 1. Change state
      turtle.setPenColor(toCssColor('blue'));
      turtle.penUp();
      turtle.isVisible = false;

      // 2. Reset
      turtle.reset();

      // 3. Verify State Reset
      expect(turtle.isVisible).toBe(true);
      expect(turtle.penState.color).toBe(0x000000); // Back to default
      expect(turtle.penState.position).toBe(GTNPenPosition.DOWN); // Back to default

      // 4. Verify Position Reset (New State instance created)
      expect(turtle.state.position).toEqual({ x: 0, y: 0, z: 0 });
    });

    it('should verify reset does not clear existing lines', () => {
      // 1. Create a line
      turtle.forward(10);
      expect(turtle.lines).toHaveLength(1);

      // 2. Reset
      turtle.reset();

      // 3. Verify lines persist
      expect(turtle.lines).toHaveLength(1);
    });
  });
});
