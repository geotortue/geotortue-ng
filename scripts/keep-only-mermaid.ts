import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { EOL } from 'node:os';

// Configuration: Change this to your specific Mermaid start tag
const DIAGRAM_KEYWORDS = ['graph', 'flowchart', 'classDiagram', 'stateDiagram', 'erDiagram'];

// class labels are not displayed by some reader as Gnome viewer
// even with the configuration below.
const config = `---
config:
    htmlLabels: false,
    flowchart:
        htmlLabels: false
---
`;
const headerLines = config.split(EOL);

headerLines.forEach((l) => {
  stdout.write(l + EOL);
});

const rl = createInterface({
  input: stdin,
  terminal: false
});

let foundDiagram = false;

rl.on('line', (line: string) => {
  // Check if the line contains the tag (or starts with it)
  const trimmed = line.trim();
  if (!foundDiagram && DIAGRAM_KEYWORDS.some((kw) => trimmed.startsWith(kw))) {
    foundDiagram = true;
  }

  // Once the tag is found, start printing lines
  if (foundDiagram) {
    stdout.write(line + '\n');
  }
});

rl.on('error', (err) => {
  console.error('Stream Error:', err);
});
