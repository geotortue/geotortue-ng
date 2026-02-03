// Type for a function that manufactures a service (Factory).
// It receives the container itself to resolve its own dependencies recursively.
type Factory<T> = (container: GTNContainer) => T;

/**
 * Dependency Injection Container (IoC Container).
 * Implements the Singleton pattern to be accessible globally.
 * Handles lazy instantiation (Lazy Loading) of services.
 */
export class GTNContainer {
  // Uniq Instance of container
  private static instance: GTNContainer;

  // Cache of already existing instances (Singletons)
  private readonly services = new Map<symbol, any>();

  // Storage for factory recipes
  private readonly factories = new Map<symbol, Factory<any>>();

  private constructor() {}

  /**
   * Global access point to the container.
   */
  public static getInstance(): GTNContainer {
    if (!GTNContainer.instance) {
      GTNContainer.instance = new GTNContainer();
    }
    return GTNContainer.instance;
  }

  /**
   * Registers a recipe to create a service.
   * The service will only be instantiated upon the first call to resolve().
   * * @param key The identification symbol (Token) (see GTNTypes)
   * @param factory The function that creates the instance
   */
  public registerSingleton<T>(key: symbol, factory: Factory<T>): void {
    this.factories.set(key, factory);
  }

  /**
   * Registers an already existing instance (useful for mocks or config).
   * * @param key The identification symbol
   * @param instance The ready-to-use instance
   */
  public registerInstance<T>(key: symbol, instance: T): void {
    this.services.set(key, instance);
  }

  /**
   * Resolves (retrieves) a service.
   * If the service does not exist yet, it is created via its factory.
   * * @param key The identification symbol
   * @returns The requested service instance
   * @throws Error if no provider is found for the key
   */
  public resolve<T>(key: symbol): T {
    // 1. If the instance already exists in cache, return it
    if (this.services.has(key)) {
      return this.services.get(key);
    }

    // 2. Otherwise, look for the factory recipe
    const factory = this.factories.get(key);
    if (!factory) {
      throw new Error(`DI Error: Aucun service enregistré pour la clé ${String(key)}`);
    }

    // 3. Manufacture the instance (Lazy Instantiation)
    // Pass 'this' so the factory can resolve other dependencies
    const instance = factory(this);

    // 4. Store the instance for future calls (Singleton)
    this.services.set(key, instance);

    return instance;
  }

  /**
   * Clears the container.
   * Destroys all instances and removes all factories.
   * Crucial for ensuring isolation between unit/integration tests.
   */
  public clear(): void {
    this.services.clear();
    this.factories.clear();
  }

  /**
   * Checks if a service is already registered (either as an active instance or a factory).
   * Useful for avoiding duplicate registrations or verifying test setup.
   */
  public isRegistered(key: symbol): boolean {
    return this.services.has(key) || this.factories.has(key);
  }
}
