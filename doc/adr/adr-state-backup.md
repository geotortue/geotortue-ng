# State Backup

## The Rational

There is a fundamental difference between:

- saving a script
- saving a project

### Saving a script (.logo / .txt)

- You only save what is written in the editor (e.g., FORWARD 50).
- If you reload this file tomorrow, the turtle will start from scratch (0,0,0). You will lose the final state (the position where it stopped).

### Saving the state of the project (.gtn.json)

- This is what the GTNProjectService does.
- It captures everything: the code, the current position of each turtle, its color, and its settings.
- It's a snapshot of your work session.

## The Feature

- Take the entire state of the application (Code + All Turtles' positions/colors + Settings).

- It converts everything into a text format (JSON).

- It triggers a file download (e.g., project.gtn.json) to your computer.

- Lifespan: Permanent. You can come back tomorrow, load this file, and the turtle will reappear exactly where it stopped.
