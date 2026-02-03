import { GTNTurtle } from '@domain/entities/GTNTurtle';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import type { GTNGeometryService } from '@domain/services/GTNGeometryService';
import { generateGTNTurtleId, type GTNTurtleId } from '@domain/types';

export class GTNInMemoryTurtleRepository implements IGTNTurtleRepository {
  // The actual storage: a Map of ID -> Turtle Object
  private readonly turtles: Map<GTNTurtleId, GTNTurtle> = new Map();

  // Track the ID of the active turtle
  private activeTurtleId: GTNTurtleId | null = null;

  constructor(private readonly geometryService: GTNGeometryService) {
    // 1. Called immediately upon app startup
    this.initializeDefaultTurtle();
  }

  private initializeDefaultTurtle() {
    this.turtles.clear();
    // 2. Creates the default turtle (ID === '1') at coordinates (0,0,0)
    // FUTURE turtleId is a business id => DI for generateGTNTurtleId
    // ATM simple id chrono
    const id = generateGTNTurtleId([]);
    const defaultTurtle = new GTNTurtle(id, this.geometryService);
    this.turtles.set(defaultTurtle.id, defaultTurtle);
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

  public clear(): void {
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
