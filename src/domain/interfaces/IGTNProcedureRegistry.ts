import type {
  FunctionDefContext,
  ProcedureDefinitionContext
} from '@infrastructure/antlr/generated/GeoTortueParser';

export interface IGTNProcedureRegistry {
  register(name: string, ctx: ProcedureDefinitionContext): void;
  registerFunction(name: string, ctx: FunctionDefContext): void;
  getProcedure(name: string): ProcedureDefinitionContext | undefined;
  getAllNames(): string[];
  clear(): void;
}
