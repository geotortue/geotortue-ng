import { GTNContainer } from '@infrastructure/di/GTNContainer';
import { GTN_TYPES } from '@infrastructure/di/GTNTypes';

// Interfaces (Required for strict typing in resolve<T>)
import { GTNProjectService } from '@app/services/GTNProjectService';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import type { IGTNLanguageService } from '@domain/interfaces/IGTNLanguageService';

// Import of concrete implementations
import { GTNInterpreter } from '@infrastructure/interpreters/GTNInterpreter';
import { GTNSimpleExecutionContext } from '@infrastructure/context/GTNSimpleExecutionContext';

// import { GTNWebAudioService } from '@infrastructure/audio/GTNWebAudioService';
import { GTNBrowserFileSystem } from '@infrastructure/fs/GTNBrowserFileSystem';

import { GTNMathJsEvaluator } from '@infrastructure/math/GTNMathJsEvaluator';
import { GTNThreeMathProvider } from '@infrastructure/math/GTNThreeMathProvider';
import { GTNInMemoryTurtleRepository } from '@infrastructure/store/GTNInMemoryTurtleRepository';
import { GTNRenderer2D } from '@ui/renderers/GTNRenderer2D';
import { GTNRenderer3D } from '@ui/renderers/GTNRenderer3D';

import { GTNGeometryService } from '@domain/services/GTNGeometryService';
import { GTNI18nLanguageService } from '@infrastructure/i18n/GTNI18nLanguageService';
import type { IGTNFileSystem } from '@domain/interfaces/IGTNFileSystem';
import { GTNApplicationState } from '@app/state/GTNApplicationState';
import { GTNBrowserRenderLoop } from '@infrastructure/services/GTNBrowserRenderLoop';
import { GTNConsoleLogger } from '@infrastructure/services/GTNConsoleLogger';
import { GTNReverseDictionaryService } from '@infrastructure/i18n/GTNReverseDictionaryService';
import { GeoTortueSyntaxService } from '@domain/services/GeoTortueSyntaxService';

/**
 * This is the single place where everything is wired together.
 * This file is the only place in the application that knows the concrete implementations (the classes).
 */
export function configureDependencyInjection(): void {
  const container = GTNContainer.getInstance();

  /* Core & Domain */
  // Math Provider (Infrastructure - ThreeJS)
  container.registerSingleton(GTN_TYPES.MathProvider, () => new GTNThreeMathProvider());

  // Geometry Service (Domain - Pur)
  container.registerSingleton(GTN_TYPES.GeometryService, (c) => {
    return new GTNGeometryService(c.resolve(GTN_TYPES.MathProvider));
  });

  // Turtle Repository (Store)
  container.registerSingleton(GTN_TYPES.TurtleRepository, (c) => {
    const geometry = container.resolve<GTNGeometryService>(GTN_TYPES.GeometryService);
    return new GTNInMemoryTurtleRepository(geometry);
  });

  // DSL Translation Helper
  container.registerSingleton(
    GTN_TYPES.DslTranslationHelper,
    () => new GTNReverseDictionaryService()
  );

  // Language Service
  container.registerSingleton(GTN_TYPES.LanguageService, () => new GTNI18nLanguageService());

  container.registerSingleton(GTN_TYPES.Interpreter, (c) => {
    const repository = c.resolve<IGTNTurtleRepository>(GTN_TYPES.TurtleRepository);
    const language = c.resolve<IGTNLanguageService>(GTN_TYPES.LanguageService);
    return new GTNInterpreter(repository, language);
  });

  container.registerSingleton(GTN_TYPES.SyntaxService, () => new GeoTortueSyntaxService());

  // Mathematic expression inside GéoTortue DSL
  container.registerSingleton(GTN_TYPES.MathEvaluator, () => new GTNMathJsEvaluator());

  /* Application Layer */

  // File System (LocalStorage or File System Access API)
  container.registerSingleton(GTN_TYPES.FileSystem, () => new GTNBrowserFileSystem());

  container.registerSingleton(GTN_TYPES.ProjectService, (c) => {
    const repository = c.resolve<IGTNTurtleRepository>(GTN_TYPES.TurtleRepository);
    const fileSystem = c.resolve<IGTNFileSystem>(GTN_TYPES.FileSystem);
    const geometry = c.resolve<GTNGeometryService>(GTN_TYPES.GeometryService);
    return new GTNProjectService(repository, fileSystem, geometry);
  });

  // // Enregistrement de l'Audio (Web Audio API)
  // container.registerSingleton(GTN_TYPES.AudioService, () => {
  //   return new GTNWebAudioService();
  // });

  // Execution Context
  container.registerSingleton(GTN_TYPES.ExecutionContext, () => new GTNSimpleExecutionContext());

  // Application state
  container.registerSingleton(GTN_TYPES.ApplicationState, () => new GTNApplicationState());

  /* Presentation Layer (Renderers) */

  container.registerSingleton(GTN_TYPES.Renderer2D, () => new GTNRenderer2D());
  container.registerSingleton(GTN_TYPES.Renderer3D, () => new GTNRenderer3D());

  // Register Loop
  container.registerSingleton(GTN_TYPES.RenderLoop, () => new GTNBrowserRenderLoop());

  // Logger
  container.registerSingleton(GTN_TYPES.Logger, () => new GTNConsoleLogger());
}
