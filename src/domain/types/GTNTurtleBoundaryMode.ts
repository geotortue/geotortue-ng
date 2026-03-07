export const GTN_TURTLE_BOUNDARY_MODES = ['WRAP', 'WINDOW', 'FENCE'] as const;

export type GTNTurtleBoundaryMode = (typeof GTN_TURTLE_BOUNDARY_MODES)[number];

export const DEFAULT_TURTLE_BOUNDARY_MODE: GTNTurtleBoundaryMode = 'WRAP';
