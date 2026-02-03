export const GTN_DEFAULT_MIME_TYPE = 'text/plain;charset=utf-8';

// export const GTN_DEFAULT_FILE_EXTENSIONS = ['text/*', 'application/json'] as const;
export const GTN_DEFAULT_FILE_EXTENSIONS = ['.txt'] as const;

export const GTN_DEFAULT_ACCEPTED_TYPE: IGTNFileType = {
  // description: 'GéoTortue Project',
  description: 'Text File',
  accept: { [GTN_DEFAULT_MIME_TYPE]: GTN_DEFAULT_FILE_EXTENSIONS }
} as const;

/** Option `types` of Window: showSaveFilePicker() method
 *  - description: a description of the category of files types allowed.
 *  - accept: an Object with the keys set to the MIME type and the values to an Array of file extensions.
 *
 *  See https://developer.mozilla.org/en-US/docs/Web/API/Window/showSaveFilePicker#types
 */
export interface IGTNFileType {
  description: string;
  accept: Record<string, readonly string[]>;
}

/**
 * Contract for File I/O operations.
 * Abstraction allows switching between Browser implementation, Electron, or Server-side storage.
 *
 */
export interface IGTNFileSystem {
  /**
   * Saves content to a file.
   * @param content The text content.
   * @param filename The name of the file to save.
   * @param type The MIME type (e.g., 'application/json'), file extension & description of acceptable files
   */
  saveFile(content: string, filename: string, type?: IGTNFileType): Promise<void>;

  /**
   * Opens a file dialog and returns content.
   * @param type The MIME type (e.g., 'application/json'), file extension & description of acceptable files
   * @returns The content of the selected file.
   */
  openFile(type: IGTNFileType): Promise<string>;
}
