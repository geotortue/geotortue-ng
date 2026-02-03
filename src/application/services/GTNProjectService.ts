import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import type { IGTNFileSystem } from '@domain/interfaces/IGTNFileSystem';
import type { GTNProjectData, GTNTurtleDTO } from '../dto/GTNProjectData';
import { GTNTurtle } from '@domain/entities/GTNTurtle';
import { GTNGeometryService } from '@domain/services/GTNGeometryService';
import { GTNVector3, GTNQuaternion } from '@domain/value-objects';
import {
  GTN_PROJECT_ACCEPTED_TYPES,
  type IGTNProjectService
} from '@app/interfaces/IGTNProjectService';
import { toGTNTurtleId } from '@domain/types';

export class GTNProjectService implements IGTNProjectService {
  constructor(
    private readonly turtleRepo: IGTNTurtleRepository,
    private readonly fileSystem: IGTNFileSystem,
    private readonly geometryService: GTNGeometryService // Needed to create new turtles
  ) {}

  /**
   * Serialization: Runtime Global State -> JSON
   */
  public async saveProject(codeContent: string): Promise<void> {
    const turtles = this.turtleRepo.getAll();

    // 1. Map Turtles to DTOs
    const turtleDTOs: GTNTurtleDTO[] = turtles.map((t) => ({
      id: t.id,
      color: t.penState.color,
      isVisible: t.isVisible,
      position: t.state.position.toJSON(),
      rotation: { ...t.state.rotation } // Quaternion
    }));

    // 2. Build the Project Object
    const projectData: GTNProjectData = {
      meta: {
        version: '1.0',
        author: 'User', // Could be configurable
        created_at: new Date().toISOString()
      },
      settings: {
        realTimePainting: true, // TODO: Get from ConfigurationService
        delay: 0
      },
      turtles: turtleDTOs,
      procedures: [], // TODO: Get from ProcedureRepository
      code: codeContent
    };

    // 3. Write to disk
    const filename = `project-${new Date().toISOString().slice(0, 10)}.gtn`;
    const projectDataJson = JSON.stringify(projectData, null, 2);
    await this.fileSystem.saveFile(projectDataJson, filename, GTN_PROJECT_ACCEPTED_TYPES);
  }

  /**
   * Deserialization: JSON -> Runtime Global State
   * Returns the code to put back into the application.
   */
  public async loadProject(): Promise<string> {
    // 1. Read from disk
    const jsonString = await this.fileSystem.openFile(GTN_PROJECT_ACCEPTED_TYPES);
    if (!jsonString) return '';

    try {
      const data: GTNProjectData = JSON.parse(jsonString);

      // 2. Validate Version (Basic check)
      if (!data.meta || !data.turtles) {
        throw new Error('Invalid GTN Project file');
      }

      // 3. Restore Turtles
      this.turtleRepo.clear();

      data.turtles.forEach((dto) => {
        const turtle = new GTNTurtle(toGTNTurtleId(dto.id), this.geometryService);

        // Restore Position
        turtle.state.position = new GTNVector3(dto.position.x, dto.position.y, dto.position.z);

        // Restore Rotation (Handle legacy JSON without rotation)
        if (dto.rotation) {
          turtle.state.rotation = new GTNQuaternion(
            dto.rotation.x,
            dto.rotation.y,
            dto.rotation.z,
            dto.rotation.w
          );
        }

        // Restore State
        turtle.setPenColor(dto.color);
        turtle.isVisible = dto.isVisible ?? true;

        this.turtleRepo.save(turtle);
      });

      // 4. Return code
      return data.code;
    } catch (e) {
      console.error('Failed to load project', e);
      throw e;
    }
  }
}
