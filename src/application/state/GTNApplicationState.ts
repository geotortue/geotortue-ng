import {
  DEFAULT_TURTLE_BOUNDARY_MODE,
  type GTNTurtleBoundaryMode
} from '@domain/types/GTNTurtleBoundaryMode';

export type AppMode = '2D' | '3D';
export type CameraType = 'PERSPECTIVE' | 'ORTHOGRAPHIC';

export const DEFAULT_MODE: AppMode = '2D';
export const DEFAULT_CAMERA_TYPE: CameraType = 'PERSPECTIVE';

export class GTNApplicationState {
  private readonly listeners: Set<() => void> = new Set();

  private currentMode: AppMode = DEFAULT_MODE;
  private currentCameraType: CameraType = DEFAULT_CAMERA_TYPE;
  private currentBoundaryMode: GTNTurtleBoundaryMode = DEFAULT_TURTLE_BOUNDARY_MODE;
  get mode(): AppMode {
    return this.currentMode;
  }

  get cameraType(): CameraType {
    return this.currentCameraType;
  }

  get boundaryMode(): GTNTurtleBoundaryMode {
    return this.currentBoundaryMode;
  }

  public setMode(mode: AppMode) {
    if (this.currentMode === mode) return;
    this.currentMode = mode;

    // Logic to swap Geometry Strategy could go here!
    // e.g. container.rebind(GTN_TYPES.MathProvider, ...)

    this.notify();
  }

  public toggleMode() {
    this.setMode(this.currentMode === '2D' ? '3D' : '2D');
  }

  public setCameraType(type: CameraType) {
    if (this.currentCameraType === type) {
      return;
    }

    this.currentCameraType = type;
    this.notify();
  }

  public toggleCameraType() {
    this.setCameraType(this.currentCameraType === 'PERSPECTIVE' ? 'ORTHOGRAPHIC' : 'PERSPECTIVE');
  }

  public setBoundaryMode(mode: GTNTurtleBoundaryMode) {
    if (this.currentBoundaryMode === mode) {
      return;
    }

    this.currentBoundaryMode = mode;
    this.notify();
  }

  public subscribe(callback: () => void): () => void {
    this.listeners.add(callback);
    // Immediately invoke callback with current state to sync UI
    callback();
    return () => this.listeners.delete(callback);
  }

  private notify() {
    this.listeners.forEach((callback) => callback());
  }
}
