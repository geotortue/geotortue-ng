import { Quaternion as ThreeQuaternion, Vector3 } from 'three';
import { type IGTNMathProvider } from '@domain/interfaces/IGTNMathProvider';
import { GTNVector3, GTNQuaternion } from '@domain/value-objects';
import { type Degree, fromDegreeToRadian } from '@domain/types';

export class GTNThreeMathProvider implements IGTNMathProvider {
  calculateForwardMove(
    position: GTNVector3,
    rotation: GTNQuaternion,
    distance: number
  ): GTNVector3 {
    // 1. Convert to Three.js types
    const vec = new Vector3(position.x, position.y, position.z);
    const quat = new ThreeQuaternion(rotation.x, rotation.y, rotation.z, rotation.w);

    // 2. Determine Forward Direction (Turtle starts facing +Y in our world)
    const forwardDir = new Vector3(0, 1, 0);
    forwardDir.applyQuaternion(quat); // Rotate the 'up' vector to match turtle
    forwardDir.multiplyScalar(distance); // Scale by distance

    // 3. Add to current position
    const newPos = vec.add(forwardDir);

    // 4. Return Domain Value Object
    return new GTNVector3(newPos.x, newPos.y, newPos.z);
  }

  calculateRotationZ(currentRotation: GTNQuaternion, angle: Degree): GTNQuaternion {
    // 1. Convert
    const quat = new ThreeQuaternion(
      currentRotation.x,
      currentRotation.y,
      currentRotation.z,
      currentRotation.w
    );

    // 2. Create rotation delta (around Z axis)
    const radians = fromDegreeToRadian(angle);
    const deltaRotation = new ThreeQuaternion();
    deltaRotation.setFromAxisAngle(new Vector3(0, 0, 1), radians);

    // 3. Apply (Multiply)
    quat.multiply(deltaRotation);

    // 4. Return
    return new GTNQuaternion(quat.x, quat.y, quat.z, quat.w);
  }
}
