import { readdirSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { argv, cwd, exit } from 'node:process';

const relativePath = argv[2]?.trim();
const typesToFixStr = argv[3]?.trim();

if (!relativePath || !typesToFixStr) {
  console.error('Usage: tsx fix-generated.ts <relative-path> <types-comma-separated>');
  exit(1);
}

const typesToFix = typesToFixStr.split(',');
const targetDir = join(cwd(), relativePath);

async function processFile(fileName: string) {
  const filePath = join(targetDir, fileName);
  try {
    let content = await readFile(filePath, 'utf-8');
    let modified = false;

    // Split lines to process imports safely
    const lines = content.split('\n');
    const newLines = lines.map((line) => {
      if (line.includes('import') && line.includes('from')) {
        let newLine = line;
        typesToFix.forEach((type) => {
          // Regex to find the type in the import list and add 'type ' if missing
          // Matches: import { ..., Type, ... } or import { Type }
          // Avoids already typed imports
          const regex = new RegExp(`(?<!type\\s+)\\b${type}\\b`, 'g');
          if (regex.test(newLine)) {
            newLine = newLine.replace(regex, `type ${type}`);
            modified = true;
          }
        });
        return newLine;
      }
      return line;
    });

    if (modified) {
      await writeFile(filePath, newLines.join('\n'), 'utf-8');
      console.log(`[Generated] Fixed imports in ${fileName}`);
    }
  } catch (e) {
    // File might not exist or other error, ignore strictly for this script scope
  }
}

// Retrieve all the standard generated files to check
const files = readdirSync(targetDir).filter((name) => name.endsWith('.ts'));
await Promise.all(files.map(processFile));
