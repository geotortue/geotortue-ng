import {
  AmbientLight,
  AxesHelper,
  BufferGeometry,
  Camera,
  Color,
  ConeGeometry,
  DirectionalLight,
  Float32BufferAttribute,
  GridHelper,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshLambertMaterial,
  OrthographicCamera,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import type { IGTNRenderer } from './IGTNRenderer';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import { GTNTurtle } from '@domain/entities/GTNTurtle';
import type { GTNColor } from '@domain/value-objects';
import { type CameraType, DEFAULT_CAMERA_TYPE } from '@app/state/GTNApplicationState';

export class GTNRenderer3D implements IGTNRenderer {
  private readonly renderer: WebGLRenderer;
  private readonly scene: Scene;
  // Cameras
  private readonly perspectiveCamera: PerspectiveCamera;
  private readonly orthographicCamera: OrthographicCamera;
  private activeCamera: Camera;

  private controls: OrbitControls | null = null;
  private container: HTMLElement | null = null;

  // Cache for meshes to avoid rebuilding everything every frame
  // Map<TurtleID, { trail: Line, sprite: Mesh }>
  private readonly turtleMeshes: Map<string, { trail: LineSegments; sprite: Mesh }> = new Map();
  // State tracking for resizing
  private width: number = 1;
  private height: number = 1;
  constructor() {
    this.scene = new Scene();
    this.scene.background = new Color(0xf0f0f0);

    // Helpers
    const grid = new GridHelper(500, 50);
    grid.rotation.x = Math.PI / 2; // Rotate to lie on XY plane if Z is up, OR keep flat XZ
    // In our Domain: Z is depth? Or Y is up?
    // Standard 2D Logic: X=Right, Y=Up. Z=Depth.
    // ThreeJS Default: Y=Up.
    // We will align the grid to the XY plane to match 2D logic.
    grid.rotation.x = Math.PI / 2;
    this.scene.add(grid);

    const axes = new AxesHelper(50);
    this.scene.add(axes);

    // 1. Setup Perspective Camera
    this.perspectiveCamera = new PerspectiveCamera(60, 1, 0.1, 2000);
    this.perspectiveCamera.position.set(0, -200, 150); // Look from "south-up"
    this.perspectiveCamera.up.set(0, 1, 0); // Y is up
    this.perspectiveCamera.lookAt(0, 0, 0);

    // 2. Setup Orthographic Camera (Frustum set in resize)
    this.orthographicCamera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 2000);
    this.orthographicCamera.position.set(0, -200, 150);
    this.orthographicCamera.up.set(0, 1, 0);
    this.orthographicCamera.lookAt(0, 0, 0);
    // Initial zoom for ortho usually needs adjustment so scene isn't tiny
    this.orthographicCamera.zoom = 1.5;

    this.activeCamera =
      DEFAULT_CAMERA_TYPE === 'PERSPECTIVE' ? this.perspectiveCamera : this.orthographicCamera;

    // Renderer
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Lighting
    const ambient = new AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);
    const dirLight = new DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(100, 100, 100);
    this.scene.add(dirLight);
  }

  // Switch cameras dynamically
  public setCameraType(type: CameraType) {
    const prevCamera = this.activeCamera;

    if (type === 'ORTHOGRAPHIC') {
      this.activeCamera = this.orthographicCamera;
    } else {
      this.activeCamera = this.perspectiveCamera;
    }

    // Sync position/rotation to maintain viewpoint continuity (optional but nice)
    this.activeCamera.position.copy(prevCamera.position);
    this.activeCamera.rotation.copy(prevCamera.rotation);

    // Update Controls to use new camera
    if (this.controls) {
      this.controls.object = this.activeCamera;
      this.controls.update();
    }

    // Ensure projection matrix is correct
    this.resize(this.width, this.height);
  }

  public attach(container: HTMLElement): void {
    this.container = container;
    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    // Add Interaction Controls
    this.controls = new OrbitControls(this.activeCamera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;

    const rect = container.getBoundingClientRect();
    this.resize(rect.width, rect.height);
  }

  resize(width: number, height: number): void {
    this.width = width;
    this.height = height;

    const aspect = width / height;

    // Update Perspective
    this.perspectiveCamera.aspect = aspect;
    this.perspectiveCamera.updateProjectionMatrix();

    // Update Orthographic
    // Frustum width/height usually based on window size / zoom factor
    const viewSize = 300; // How many units of world space to see vertically

    this.orthographicCamera.left = (-viewSize * aspect) / 2;
    this.orthographicCamera.right = (viewSize * aspect) / 2;
    this.orthographicCamera.top = viewSize / 2;
    this.orthographicCamera.bottom = -viewSize / 2;
    this.orthographicCamera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  public dispose(): void {
    this.renderer.domElement.remove();
    this.controls?.dispose();
    // Clean up ThreeJS resources (geometries, materials) strictly if needed
  }

  public render(repo: IGTNTurtleRepository): void {
    if (this.controls) this.controls.update();

    const turtles = repo.getAll();
    const activeIds = new Set<string>();

    turtles.forEach((turtle) => {
      activeIds.add(turtle.id);
      this.updateTurtleMesh(turtle);
    });

    // Cleanup removed turtles
    for (const [id, meshes] of this.turtleMeshes) {
      if (!activeIds.has(id)) {
        this.scene.remove(meshes.trail);
        this.scene.remove(meshes.sprite);
        this.turtleMeshes.delete(id);
      }
    }

    this.renderer.render(this.scene, this.activeCamera);
  }

  private updateTurtleMesh(turtle: GTNTurtle) {
    let meshes = this.turtleMeshes.get(turtle.id);

    // 1. Create Meshes if they don't exist
    if (!meshes) {
      // Sprite (Cone)
      const geometry = new ConeGeometry(5, 15, 8);
      geometry.rotateX(Math.PI / 2); // Point along Y axis initially
      const material = new MeshLambertMaterial({ color: 0x000000 });
      const sprite = new Mesh(geometry, material);

      // Trail (BufferGeometry for lines)
      const trailGeo = new BufferGeometry();
      const trailMat = new LineBasicMaterial({ vertexColors: true });
      const trail = new LineSegments(trailGeo, trailMat); // Using LineSegments for independent colored segments
      trail.frustumCulled = false;

      this.scene.add(sprite);
      this.scene.add(trail);

      meshes = { sprite, trail };
      this.turtleMeshes.set(turtle.id, meshes);
    }

    // 2. Update Sprite Position & Rotation
    meshes.sprite.visible = turtle.isVisible;
    meshes.sprite.position.set(
      turtle.state.position.x,
      turtle.state.position.y,
      turtle.state.position.z
    );

    // Convert GTNQuaternion (x,y,z,w) to Quaternion
    meshes.sprite.quaternion.set(
      turtle.state.rotation.x,
      turtle.state.rotation.y,
      turtle.state.rotation.z,
      turtle.state.rotation.w
    );

    // Update Sprite Color
    const colorHex = this.resolveColorHex(turtle.penState.color);
    (meshes.sprite.material as MeshLambertMaterial).color.setHex(colorHex);

    // 3. Update Trail (Expensive but correct for MVP)
    // To optimize: only append new points. For now, rebuild.

    // Optimized Trail Update
    const lineCount = turtle.lines.length;
    const geometry = meshes.trail.geometry;

    if (lineCount === 0) {
      if (geometry.getAttribute('position')) {
        geometry.deleteAttribute('position');
        geometry.deleteAttribute('color');
        geometry.setDrawRange(0, 0);
      }
      return;
    }

    const positions: number[] = [];
    const colors: number[] = [];

    turtle.lines.forEach((line) => {
      positions.push(line.start.x, line.start.y, line.start.z);
      positions.push(line.end.x, line.end.y, line.end.z);

      const c = new Color(this.resolveColorHex(line.color));
      colors.push(c.r, c.g, c.b);
      colors.push(c.r, c.g, c.b);
    });

    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
    geometry.computeBoundingSphere(); // Important for camera culling
  }

  private resolveColorHex(color: GTNColor): number {
    if (typeof color === 'number') return color;
    // Simple string parsing or fallback
    if (color.startsWith('#')) return parseInt(color.replace('#', ''), 16);
    // Basic fallback for named colors (add full map if needed)
    const map: any = {
      red: 0xff0000,
      green: 0x00ff00,
      blue: 0x0000ff,
      black: 0x000000,
      white: 0xffffff
    };
    return map[color.toLowerCase()] || 0x000000;
  }
}
