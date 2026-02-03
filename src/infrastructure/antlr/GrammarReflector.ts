import {
  ATN,
  ATNState,
  AtomTransition,
  SetTransition,
  Transition,
  Token,
  RuleTransition
} from 'antlr4ng';

interface TransitionResult {
  nextStates: ATNState[];
  foundTokens: number[];
}
/**
 * A generic service that inspects an ANTLR4 parser class to extract
 * structural information (like which tokens belong to which rule) at runtime.
 */
export class GrammarReflector {
  private readonly atn: ATN;
  private readonly ruleTokenCache = new Map<number, Set<number>>();

  constructor(parserClass: any) {
    // Access static properties from the generated Parser class
    // In antlr4ng, _ATN is a static property on the parser class
    this.atn = parserClass._ATN;

    if (!this.atn) {
      throw new Error(`Could not find static _ATN on the provided parser class.`);
    }
  }

  /**
   * Returns a set of all Token IDs that are legally accepted
   * as direct children of a specific Parser Rule.
   * @param ruleIndex The integer index of the rule (e.g. GeoTortueParser.RULE_primitive)
   * @param ignoredRules Optional A set of sub-rules to skip if we decide to recurse (future proofing)
   */
  public getTokenIdsForRule(
    ruleIndex: number,
    recurse = false,
    ignoredRules: Set<number> = new Set()
  ): Set<number> {
    // Return cached result if available
    if (this.ruleTokenCache.has(ruleIndex)) {
      return this.ruleTokenCache.get(ruleIndex)!;
    }

    const allTokens = new Set<number>();

    const startState = this.atn.ruleToStartState[ruleIndex];
    if (!startState) {
      console.warn(`[GrammarReflector] No start state found for rule index ${ruleIndex}`);
      return allTokens;
    }

    // BFS/DFS Traversal
    const visitedstates = new Set<number>();
    const stack: ATNState[] = [startState];

    while (stack.length > 0) {
      const state = stack.pop()!;
      if (visitedstates.has(state.stateNumber)) {
        continue;
      }

      visitedstates.add(state.stateNumber);

      for (const transition of state.transitions) {
        // Pass only data, and receive a TransitionResult object back.
        // No lists are modified inside this function.
        const { foundTokens, nextStates } = analyzeTransition(transition, recurse, ignoredRules);

        // --- AGGREGATE RESULTS ---
        // 1. Add new tokens found
        for (const t of foundTokens) {
          allTokens.add(t);
        }

        // 2. Add next states to the queue
        for (const nextState of nextStates) {
          stack.push(nextState);
        }
      }
    }

    // Cache and return
    this.ruleTokenCache.set(ruleIndex, allTokens);
    return allTokens;
  }
}

const filterValidTokens = (tokens: number[]) =>
  tokens.filter((t) => t >= Token.MIN_USER_TOKEN_TYPE);

/**
 * Handles logic for a specific edge type to keep the main loop clean.
 * Returns the next states and tokens for a given transition
 */
function analyzeTransition(
  transition: Transition,
  recurse: boolean,
  ignoredRules: Set<number>
): TransitionResult {
  const nextStates: ATNState[] = [];
  const foundTokens: number[] = [];

  // 1. Single Token (Atom)
  if (transition instanceof AtomTransition) {
    // .label is an IntervalSet in antlr4ng
    foundTokens.push(...filterValidTokens(transition.label.toArray()));
    nextStates.push(transition.target);
  }

  // 2. Set of Tokens (e.g. 'PLUS' | 'MINUS')
  else if (transition instanceof SetTransition) {
    foundTokens.push(...filterValidTokens(transition.set.toArray()));
    nextStates.push(transition.target);
  }

  // 3. Traversal Logic
  // const isRuleTransition = transition.constructor.name === 'RuleTransition';
  else if (transition instanceof RuleTransition) {
    // Check if this specific rule is on the Ignore List
    const isIgnored = ignoredRules.has(transition.ruleIndex);
    // Path A: Recurse into sub-rule? (Only if asked AND not ignored)
    if (recurse && !isIgnored) {
      nextStates.push(transition.target);
    }

    // Path B: Continue in current rule (skip over)
    // (We always follow this to see what comes *after* the rule call)
    if (transition.followState) {
      nextStates.push(transition.followState);
    }
  }

  // 4. Default (Epsilon, Action, etc.)
  else {
    nextStates.push(transition.target);
  }

  return { nextStates, foundTokens };
}
