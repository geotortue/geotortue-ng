/** When using ANTLR 4 with modern TypeScript configurations (specifically verbatimModuleSyntax: true or importsNotUsedAsValues: "error"),
 *  the ANTLR tools (even via antlr-ng) generate code using standard `import { X } from ...` syntax.
 *  They ignore type-only import syntax (available since TS 3.8), even when the imported symbol is only used as a type (like Contexts, Listeners, or Visitors).
 *
 *  Check all the typescript files under the specified folder (relative path as first command line argument).
 *  Search all the occurrences of specified types (comma separated list of types as second command line argument).
 */
import { readdirSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { argv, cwd, exit } from 'node:process';

// FUTURE define default parameters
const relativePath = argv[2]?.trim();
const typesToFixStr = argv[3]?.trim();

if (!relativePath || !typesToFixStr) {
  console.error('❌ Usage: tsx fix-generated.ts <relative-path> <types-comma-separated>');
  exit(1);
}

const typesToFix = typesToFixStr.split(',');
const targetDir = join(cwd(), relativePath);

async function processFile(fileName: string) {
  const filePath = join(targetDir, fileName);
  try {
    const content = await readFile(filePath, 'utf-8');
    let modified = false;

    // Split lines to process imports safely
    const lines = content.split('\n');
    const newLines = lines.map((line) => {
      // Fast preliminary check to ensure it's a named import line
      if (line.startsWith('import ') && line.includes('{') && line.includes('}')) {
        // Target ONLY the text inside the { } block to avoid corrupting file paths
        return line.replace(/\{([^}]+)\}/, (_match, innerImports) => {
          let updatedImports = innerImports;

          typesToFix.forEach((type) => {
            // Negative lookbehind ensures we don't duplicate 'type type X'
            const regex = new RegExp(`(?<!type\\s+)\\b${type}\\b`, 'g');
            if (regex.test(updatedImports)) {
              updatedImports = updatedImports.replace(regex, `type ${type}`);
              modified = true;
            }
          });

          // Return the reconstructed bracket block
          return `{${updatedImports}}`;
        });
      }
      return line;
    });

    if (modified) {
      await writeFile(filePath, newLines.join('\n'), 'utf-8');
      console.log(`[Generated] ✅ Fixed type imports in ${fileName}`);
    }
  } catch (e) {
    // Don't fail the whole process, but log the warning
    console.warn(`⚠️ Could not process ${fileName}: ${(e as Error).message}`);
  }
}

try {
  // Retrieve all the standard generated files to check
  const files = readdirSync(targetDir).filter((name) => name.endsWith('.ts'));

  // Await all file processing concurrently for maximum speed
  await Promise.all(files.map(processFile));
} catch (e) {
  console.error(`💥 Failed to read target directory: ${(e as Error).message}`);
  exit(1);
}
