import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';

// Configuration: Supported Mermaid start tags
const DIAGRAM_KEYWORDS = ['graph', 'flowchart', 'classDiagram', 'stateDiagram', 'erDiagram'];

// class labels are not displayed by some reader as Gnome viewer
// even with the configuration below.
const config = `---
config:
    htmlLabels: false
    flowchart:
        htmlLabels: false
---
`;

stdout.write(config);

const rl = createInterface({
  input: stdin,
  terminal: false
});

let foundDiagram = false;

rl.on('line', (line: string) => {
  // Early exit: If we already found the diagram, just pipe the line and skip the checks
  if (foundDiagram) {
    stdout.write(line + '\n');
    return;
  }

  // Look for the start of the diagram
  const trimmed = line.trim();
  if (DIAGRAM_KEYWORDS.some((kw) => trimmed.startsWith(kw))) {
    foundDiagram = true;
    stdout.write(line + '\n');
  }
});

rl.on('error', (err) => {
  console.error('💥 Stream Error in keep-only-mermaid:', err);
});
