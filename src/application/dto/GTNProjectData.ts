import { type GTNColor } from '@domain/value-objects';

/**
 * Represents the structure of the JSON file on disk.
 * Matches the "Application Model" requirement.
 */
export interface GTNProjectData {
  meta: {
    version: string;
    author: string;
    created_at?: string;
  };
  settings: {
    realTimePainting: boolean;
    delay: number;
  };
  turtles: GTNTurtleDTO[];
  // To save what is in the editor
  code: string;
  // Future proofing for procedures
  procedures: GTNProcedureDTO[];
}

export interface GTNTurtleDTO {
  id: string;
  color: GTNColor;
  position: { x: number; y: number; z: number };
  // We add rotation to ensure we don't lose the turtle's heading
  rotation?: { x: number; y: number; z: number; w: number };
  isVisible: boolean;
}

export interface GTNProcedureDTO {
  name: string;
  args: string[];
  body: string;
}
