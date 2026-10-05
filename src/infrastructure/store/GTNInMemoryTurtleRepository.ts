import { GTNTurtle } from '@domain/entities/GTNTurtle';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import type { GTNGeometryService } from '@domain/services/GTNGeometryService';
import {
  DEFAULT_TURTLE_BOUNDARY_MODE,
  type GTNTurtleBoundaryMode,
  generateGTNTurtleId,
  type GTNTurtleId
} from '@domain/types';

export class GTNInMemoryTurtleRepository implements IGTNTurtleRepository {
  // The actual storage: a Map of ID -> Turtle Object
  private readonly turtles: Map<GTNTurtleId, GTNTurtle> = new Map();

  // Track the ID of the active turtle
  private activeTurtleId: GTNTurtleId | null = null;

  private boundaryMode: GTNTurtleBoundaryMode = DEFAULT_TURTLE_BOUNDARY_MODE;
  private viewportWidth = Number.POSITIVE_INFINITY;
  private viewportHeight = Number.POSITIVE_INFINITY;

  private _structureVersion: number = 0;

  constructor(private readonly geometryService: GTNGeometryService) {
    // Called immediately upon app startup
    this.initializeDefaultTurtle();
  }

  private initializeDefaultTurtle() {
    this.turtles.clear();
    // Creates the default turtle (ID === '1') at coordinates (0,0,0)
    // FUTURE turtleId is a business id => DI for generateGTNTurtleId
    // ATM simple id chrono
    const id = generateGTNTurtleId([]);
    const defaultTurtle = new GTNTurtle(id, this.geometryService);
    this.turtles.set(defaultTurtle.id, defaultTurtle);
  }

  public get globalVersion(): number {
    let totalVersion = this._structureVersion;

    for (const turtle of this.turtles.values()) {
      totalVersion += turtle.version;
    }

    return totalVersion;
  }

  public getById(id: GTNTurtleId): GTNTurtle | undefined {
    return this.turtles.get(id);
  }

  public getAll(): GTNTurtle[] {
    return Array.from(this.turtles.values());
  }

  public getActiveTurtle(): GTNTurtle | undefined {
    if (!this.activeTurtleId) return undefined;
    return this.turtles.get(this.activeTurtleId);
  }

  public save(turtle: GTNTurtle): void {
    this.turtles.set(turtle.id, turtle);
    // If it's the first turtle, make it active by default
    this.activeTurtleId ??= turtle.id;
    this._structureVersion++;
  }

  public setActiveTurtle(id: GTNTurtleId): void {
    if (this.turtles.has(id)) {
      this.activeTurtleId = id;
    } else {
      console.warn(`Cannot set active turtle: ID ${id} not found.`);
    }
  }

  public exists(id: GTNTurtleId): boolean {
    return this.turtles.has(id);
  }

  public setBoundaryMode(mode: GTNTurtleBoundaryMode): void {
    this.boundaryMode = mode;
  }

  public getBoundaryMode(): GTNTurtleBoundaryMode {
    return this.boundaryMode;
  }

  public setViewportSize(width: number, height: number): void {
    this.viewportWidth = width;
    this.viewportHeight = height;
  }

  public getViewportSize(): { width: number; height: number } {
    return { width: this.viewportWidth, height: this.viewportHeight };
  }

  public clear(): void {
    let lostVersions = 0;
    for (const turtle of this.turtles.values()) {
      lostVersions += turtle.version;
    }

    // FUTURE if a delete or remove function is added to the repository,
    // version transfer (Monotonicity) should be also applied
    this._structureVersion += lostVersions + 1;
    this.turtles.clear();
    this.activeTurtleId = null;
  }

  public clearAllLines(): void {
    this.turtles.forEach((turtle) => {
      turtle.clearLines();
    });
  }

  public reset(): void {
    this.turtles.forEach((turtle) => {
      turtle.reset();
    });
  }

  /**
   * Helper if we ever need to create a NEW turtle (e.g. "Hatch" command)
   */
  getNextId(): GTNTurtleId {
    const currentIds = Array.from(this.turtles.keys());
    return generateGTNTurtleId(currentIds);
  }
}
