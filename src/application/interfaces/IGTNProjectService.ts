import type { IGTNFileType } from '@domain/interfaces/IGTNFileSystem';

export const GTN_PROJECT_FILE_EXT = '.gtn';

export const GTN_PROJECT_MIME_TYPE = 'application/json';

export const GTN_PROJECT_FILE_EXTENSIONS = [GTN_PROJECT_FILE_EXT, '.json'] as const;

export const GTN_PROJECT_ACCEPTED_TYPES: IGTNFileType = {
  description: 'GéoTortue Project',
  accept: { [GTN_PROJECT_MIME_TYPE]: GTN_PROJECT_FILE_EXTENSIONS }
} as const;

export interface IGTNProjectService {
  saveProject(code: string): Promise<void>;
  loadProject(): Promise<string>;
}
