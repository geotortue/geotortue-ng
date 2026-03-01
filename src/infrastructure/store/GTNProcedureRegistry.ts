import type { IGTNProcedureRegistry } from '@domain/interfaces/IGTNProcedureRegistry';
import type {
  FunctionDefContext,
  ProcedureDefinitionContext
} from '@infrastructure/antlr/generated/GeoTortueParser';

export class GTNProcedureRegistry implements IGTNProcedureRegistry {
  private readonly procedures = new Map<string, ProcedureDefinitionContext>();
  private readonly functions = new Map<string, FunctionDefContext>();

  public register(name: string, ctx: ProcedureDefinitionContext): void {
    this.procedures.set(name, ctx);
  }

  public registerFunction(name: string, ctx: FunctionDefContext): void {
    throw new Error('Method not implemented.');
  }

  public getProcedure(name: string): ProcedureDefinitionContext | undefined {
    return this.procedures.get(name);
  }

  public getAllNames(): string[] {
    return Array.from(this.procedures.keys());
  }

  public clear(): void {
    this.procedures.clear();
  }
}
