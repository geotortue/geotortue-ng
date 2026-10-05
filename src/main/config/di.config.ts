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
import { GTNMathJsExpressionValidator } from '@infrastructure/math/GTNMathJsExpressionValidator';
import { GTNExpressionAdapter } from '@infrastructure/math/GTNExpressionAdapter';
import { GTNThreeMathProvider } from '@infrastructure/math/GTNThreeMathProvider';
import { GTNInMemoryTurtleRepository } from '@infrastructure/store/GTNInMemoryTurtleRepository';

import { GTNGeometryService } from '@domain/services/GTNGeometryService';
import { GTNI18nLanguageService } from '@infrastructure/i18n/GTNI18nLanguageService';
import type { IGTNFileSystem } from '@domain/interfaces/IGTNFileSystem';
import { GTNApplicationState } from '@app/state/GTNApplicationState';
import { GTNConsoleLogger } from '@infrastructure/services/GTNConsoleLogger';
import { GTNReverseDictionaryService } from '@infrastructure/i18n/GTNReverseDictionaryService';
import { GTNSyntaxService } from '@domain/services/GTNSyntaxService';
import { GTNExecutionVisitor } from '@domain/services/GTNExecutionVisitor';
import { GTNProcedureRegistry } from '@infrastructure/store/GTNProcedureRegistry';

/**
 * Composition Root for the core application.
 * This wires together the Domain, Application services, and Infrastructure adapters.
 *
 * Note: The Presentation layer (UI components, graphical renderers) is excluded from
 * this container and manages its own concrete implementations and lifecycles.
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

  // DSL Service

  container.registerInstance(
    GTN_TYPES.ExecutionVisitorFactory,
    (repo: IGTNTurtleRepository) => new GTNExecutionVisitor(repo)
  );

  container.registerSingleton(GTN_TYPES.ProcedureRegistry, () => new GTNProcedureRegistry());

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

  container.registerSingleton(GTN_TYPES.SyntaxService, () => new GTNSyntaxService());

  // Mathematic expression inside GéoTortue DSL
  container.registerSingleton(GTN_TYPES.ExpressionAdapter, () => new GTNExpressionAdapter());
  container.registerSingleton(
    GTN_TYPES.MathExpressionValidator,
    () => new GTNMathJsExpressionValidator()
  );
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
  // The Presentation layer (UI components, graphical renderers) manages its own concrete implementations and lifecycles.

  // Logger
  container.registerSingleton(GTN_TYPES.Logger, () => new GTNConsoleLogger());
}
