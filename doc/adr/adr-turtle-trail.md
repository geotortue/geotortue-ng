# clearGraphics and Turtles Repository

## Rational

Having a method named `clearGraphics` (which sounds like a UI/View operation) defined in a "Repository" (which deals with data storage) feels like a violation of **Separation of Concerns**.

However, in a **Data-Driven Architecture** (like the one which is build here with the Render Loop), there is a crucial distinction:

1. **The Renderer is Stateless:** It simply asks every frame: _"What data exists?"_ and draws it.
2. **The Canvas is Ephemeral:** If you command the Renderer to "clear the screen" (delete pixels) but the **Data** (the `lines` array in `GTNTurtle`) still exists, the very next frame (1/60th of a second later), the Render Loop will see the data and **draw everything back immediately.**

Therefore, to "Clear the Screen" permanently, we must **Delete the Data**.

## The Semantic Solution

The issue isn't _what_ is happening (deleting data), but _what we call it_. The Repository shouldn't know about "Graphics," but it **should** know about "Turtle Trails" or "Lines."

This is the reason to rename the method in the Repository to reflect a **Data Operation**, not a Visual Operation.

## What to do

**Recommended Change:** `clearGraphics()` -> **`clearAllTrails()`** or **`clearAllLines()`**

### 1. Update Repository Interface

We change the contract to speak in terms of Domain Data (`lines`), not UI (`graphics`).

```typescript
// src/domain/interfaces/IGTNTurtleRepository.ts
import { GTNTurtle } from '../entities/GTNTurtle';
import { GTNTurtleId } from '../types';

export interface IGTNTurtleRepository {
  getById(id: GTNTurtleId): GTNTurtle | undefined;
  getAll(): GTNTurtle[];

  /**
   * Clears the history of lines (trails) for all turtles.
   * This results in the screen being cleared by the renderer.
   */
  clearAllLines(): void; // <--- Renamed from clearGraphics

  reset(): void;
}
```

### 2. Update Implementation

```typescript
// src/infrastructure/repositories/GTNInMemoryTurtleRepository.ts
// ...

export class GTNInMemoryTurtleRepository implements IGTNTurtleRepository {
  // ...

  clearAllLines(): void {
    // This is a pure data operation: "Empty the arrays"
    this.turtles.forEach((turtle) => {
      turtle.clearLines();
    });
  }

  // ...
}
```

### 3. Update the Visitor (The Bridge)

The **Visitor** (Application Layer) is the one that translates the User's Intent (`VG` command) into the Domain Action (`clearAllLines`).

```typescript
// src/application/visitors/GTNExecutionVisitor.ts

// The USER said "VG" (Visual Intent)
visitClearGraphics = (ctx: GTN.ClearGraphicsContext): any => {
  // We translate that to a DATA change
  this.turtleRepo.clearAllLines();

  // Optional: Log it
  this.logger.debug('Command: VG - Cleared all turtle trails');
};
```

## Why this is correct

In this architecture, the **Model** (Repository/Entities) is the "Source of Truth." The **View** (Renderer) is just a projection.

- **VG Command** -> **Empty the List of Lines** (Model) -> **Renderer sees empty list** (View) -> **Screen becomes blank**.

> To truly separate "Lines" from "Turtles" (so the Repository doesn't hold lines at all), a separate `DrawingRepository` or `SceneGraphService` would be needed, but that adds significant complexity. For a Logo interpreter, storing the trail _on_ the turtle is a standard and simple approach.
