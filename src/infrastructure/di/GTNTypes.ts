/**
 * The unique Ids for dependency injection.
 *
 * Using Symbol-s ensures that there are no name collisions.
 */
export const GTN_TYPES = {
  // --- Domain & Core (Business Logic) ---
  MathEvaluator: Symbol.for('MathEvaluator'), // To deal with mathematic expression inside GéoTortue commands (e.g. with mathjs)
  MathProvider: Symbol.for('MathProvider'), // Adapter for math (ThreeJS or other)
  GeometryService: Symbol.for('GeometryService'), // Service for movement calculus
  TurtleRepository: Symbol.for('TurtleRepository'),
  Interpreter: Symbol.for('Interpreter'),
  ExecutionContext: Symbol.for('ExecutionContext'),
  DslTranslationHelper: Symbol.for('DslTranslationHelper'),
  LanguageService: Symbol.for('LanguageService'), // For i18n of dynamique commands
  SyntaxService: Symbol.for('SyntaxService'),
  Logger: Symbol.for('Logger'),
  AudioService: Symbol.for('AudioService'),

  // --- Infrastructure / Application ---

  ApplicationState: Symbol.for('ApplicationState'),
  FileSystem: Symbol.for('FileSystem'),
  ProjectService: Symbol.for('ProjectService'),

  // --- Presentation / Rendering ---
  RenderLoop: Symbol.for('RenderLoop'),
  Renderer2D: Symbol.for('Renderer2D'),
  Renderer3D: Symbol.for('Renderer3D')
};
