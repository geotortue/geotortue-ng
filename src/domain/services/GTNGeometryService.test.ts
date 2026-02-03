import { GTNGeometryService } from './GTNGeometryService';
import type { IGTNMathProvider } from '../interfaces/IGTNMathProvider';
import { GTNVector3, GTNQuaternion } from '@domain/value-objects';
import { toDegree } from '@domain/types';

describe('GTNGeometryService', () => {
  let geometryService: GTNGeometryService;
  let mockMathProvider: IGTNMathProvider;

  // Helpers to create dummy objects
  const vec = (x: number, y: number, z: number) => new GTNVector3(x, y, z);
  const quat = (x: number, y: number, z: number, w: number) => new GTNQuaternion(x, y, z, w);

  beforeEach(() => {
    // 1. Mock the Math Provider
    mockMathProvider = {
      calculateForwardMove: vi.fn(),
      calculateRotationZ: vi.fn()
      // Add other methods if the interface has them
    } as unknown as IGTNMathProvider;

    // 2. Instantiate Service
    geometryService = new GTNGeometryService(mockMathProvider);
  });

  describe('calculateNewPosition', () => {
    it('should delegate forward movement to mathProvider', () => {
      const startPos = vec(0, 0, 0);
      const startRot = quat(0, 0, 0, 1);
      const distance = 100;
      const expectedNewPos = vec(0, 100, 0);

      // Setup Mock Return
      vi.mocked(mockMathProvider.calculateForwardMove).mockReturnValue(expectedNewPos);

      // Act
      const result = geometryService.calculateNewPosition(startPos, startRot, distance);

      // Assert
      expect(result).toBe(expectedNewPos);
      expect(mockMathProvider.calculateForwardMove).toHaveBeenCalledWith(
        startPos,
        startRot,
        distance
      );
    });
  });

  describe('rotateZ', () => {
    it('should delegate Z-axis rotation (Yaw) to mathProvider', () => {
      const startRot = quat(0, 0, 0, 1);
      const angle = toDegree(90);
      const expectedNewRot = quat(0, 0, 0.707, 0.707);

      // Setup Mock Return
      vi.mocked(mockMathProvider.calculateRotationZ).mockReturnValue(expectedNewRot);

      // Act
      const result = geometryService.rotateZ(startRot, angle);

      // Assert
      expect(result).toBe(expectedNewRot);
      expect(mockMathProvider.calculateRotationZ).toHaveBeenCalledWith(startRot, angle);
    });
  });
});
