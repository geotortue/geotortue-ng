import {
  GTN_DEFAULT_ACCEPTED_TYPE,
  GTN_DEFAULT_MIME_TYPE,
  type IGTNFileSystem
} from '@domain/interfaces/IGTNFileSystem';
import type { Ms } from '@domain/types';

const ALL_FILES_JOKER = '*.*';

/**
 * Fallbacks used for Firefox, Safari, or if API fails
 */
export class GTNBrowserFileSystem implements IGTNFileSystem {
  public async saveFile(
    suggestedName: string,
    content: string,
    type = GTN_DEFAULT_ACCEPTED_TYPE
  ): Promise<void> {
    if (!('showSaveFilePicker' in self)) {
      // Fallback: Classic "Download" link
      this.fallbackSave(content, suggestedName);
      return;
    }

    // Try Modern File System Access API (Chrome/Edge)
    try {
      const handle = await (self as any).showSaveFilePicker({
        suggestedName,
        types: [type]
      });

      const writable = await handle.createWritable();
      await writable.write(content);
      await writable.close();
      return; // Success! Stop here.
    } catch (err: any) {
      // If user cancelled the picker, stop everything. Don't fallback.
      if ('name' in err && err.name === 'AbortError') {
        return; // User cancelled
      }
      // If other error occurred, log it and try fallback (Classic "Download" link)
      console.warn(`Using save file fallback as File System Access API failed : `, err);
      this.fallbackSave(content, suggestedName);
    }
  }

  public async openFile(type = GTN_DEFAULT_ACCEPTED_TYPE): Promise<string> {
    const acceptExtensions = (Object.entries(type.accept)[0] ?? [])[1];

    if (!('showOpenFilePicker' in self)) {
      // Fallback: Hidden Input File
      return this.fallbackOpen(acceptExtensions);
    }

    // Try Modern File System Access API
    try {
      const [handle] = await (self as any).showOpenFilePicker({
        types: [type],
        multiple: false
      });

      const file = await handle.getFile();
      return await file.text();
    } catch (err: any) {
      if ('name' in err && err.name === 'AbortError') {
        throw new Error('Cancelled');
      }
      console.warn('Using open file fallback as File System Access API failed: ', err);
      // Fallback: Hidden Input File
      return this.fallbackOpen(acceptExtensions);
    }
  }

  // --- Fallback Implementations ---

  private fallbackSave(content: string, filename: string, type = GTN_DEFAULT_MIME_TYPE): void {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      document.body.removeChild(a);
      self.URL.revokeObjectURL(url);
    }, 100 as Ms);
  }

  private fallbackOpen(acceptExtensions: readonly string[] | undefined): Promise<string> {
    return new Promise((resolve, reject) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = acceptExtensions ? acceptExtensions.join() : ALL_FILES_JOKER;
      input.style.display = 'none';

      input.onchange = (e: Event) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) {
          reject(new Error('No file selected'));
          return;
        }

        const reader = new FileReader();
        reader.onload = (evt) => {
          if (evt.target?.result) {
            resolve(this.ensureString(evt.target.result));
          } else {
            reject(new Error('File is empty'));
          }
        };
        reader.onerror = () => reject(new Error('Error reading file'));
        reader.readAsText(file);
      };

      // Trigger dialog
      document.body.appendChild(input);
      input.click();

      // Cleanup
      setTimeout(() => document.body.removeChild(input), 1000 as Ms);
    });
  }

  // FUTURE extract as a static function
  private ensureString(data: string | ArrayBuffer): string {
    if (typeof data === 'string') {
      return data;
    }

    // Create a decoder (defaults to 'utf-8')
    const decoder = new TextDecoder();
    return decoder.decode(data);
  }
}
