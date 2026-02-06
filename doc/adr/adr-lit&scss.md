# ADR - Lit & SCSS

**Lit** is a library for building **standard Web Components** that work natively in the browser.

When you combine **Lit** with **SCSS**, you get a very efficient, standards-based architecture.

### What is Lit?

Lit (formerly LitElement) is a lightweight library (around 5kb) from Google. Unlike React, which uses a "Virtual DOM" to figure out what to change, Lit uses the browser's native **Shadow DOM**.

- **Native Standard:** Components built with Lit work anywhere (in React apps, Vue apps, or plain HTML pages) because they are just standard HTML tags (e.g., `<my-geotortue-map>`).
- **Performance:** It updates only the parts of the DOM that change, making it extremely fast.

### Lit + SCSS Workflow

Using SCSS with Lit requires a slightly specific setup because Lit components encapsulate their styles inside the Shadow DOM (meaning global CSS files usually don't affect them).

Here is how they work together:

1. **Isolation (Shadow DOM):**
   Styles defined in a Lit component **cannot leak out**, and global styles **cannot leak in**. This solves the "class name conflict" problem natively without needing unique hashes like Styled-Components does.

2. **The SCSS Challenge:**

Lit expects styles to be JavaScript strings (tagged with `css` literal), not `.css` files.

- _Bad way:_ Compiling SCSS to a global `style.css` (Lit components won't see it).
- _Good way:_ Using a build tool (like Vite or Webpack) to compile your `.scss` files and import them directly into your Lit component as a string or CSS object.

**Example of Lit + SCSS code:**

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// Depending on your build tool, you might import SCSS like this:
import styles from './my-component.scss?inline';

@customElement('my-element')
export class MyElement extends LitElement {
  // Lit allows you to define styles in a static property
  static styles = [
    // The SCSS is compiled and injected here
    css`
      ${unsafeCSS(styles)}
    `
  ];

  render() {
    return html`
      <div class="container">
        <p>I am styled with SCSS!</p>
      </div>
    `;
  }
}
```

### Is `modern-normalize` still needed with Lit?

**Yes, but differently.**

Because Lit components use Shadow DOM, they start with a "clean slate" regarding inheritance.

- **Global Reset:** You still want `modern-normalize` in your main `index.html` to handle the page background, scrollbars, and `body` margin.
- **Component Reset:** Inside a Lit component, standard HTML elements (like `h1`, `button`) revert to browser defaults. You might need to import a small "reset" snippet into _each_ component (or a shared base class) to make sure `box-sizing: border-box` and font inheritance work as expected inside the Shadow DOM.

### Lit vs. Styled-Components (React)

| Feature              | Lit + SCSS                               | React + Styled-Components               |
| -------------------- | ---------------------------------------- | --------------------------------------- |
| **Technology**       | **Web Components** (Standard)            | **React Components** (Library specific) |
| **Styling**          | Native CSS/SCSS in Shadow DOM            | CSS-in-JS (JavaScript generates styles) |
| **Encapsulation**    | **Strict** (Shadow DOM)                  | **Simulated** (Unique class names)      |
| **Interoperability** | Works anywhere (Angular, Vue, Plain JS)  | Works only in React apps                |
| **Learning Curve**   | Moderate (Need to understand Shadow DOM) | Low (Just CSS in JS)                    |

### Recommendation for `geotortue-ng`

If you are building `geotortue-ng` to be a long-lasting, framework-agnostic tool (e.g., a map widget that could be embedded in any website), **Lit is an excellent choice**.

If you are building a standard Single Page Application (SPA) and want a huge ecosystem of existing libraries, **React** is usually easier.

Since you like **Husky and Prettier**, Lit works perfectly with them. You would just add `stylelint` with an SCSS configuration to lint your `.scss` files before they get compiled.

Would you like to see how to configure the **Vite** build tool to handle Lit and SCSS together automatically?

§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

Here is a complete guide to setting up a **Vite** project with **Lit**, **SCSS**, and your preferred tools **Husky** and **Prettier**.

### 1. Scaffold the Project (Vite + Lit + TypeScript)

Vite has a built-in template for Lit and TypeScript. Run this in your terminal:

```bash
# Create the project (replace 'geotortue-ng' with your folder name)
npm create vite@latest geotortue-ng -- --template lit-ts

# Enter the folder
cd geotortue-ng

# Install standard dependencies
npm install

```

### 2. Add SCSS Support

Vite supports SCSS out of the box, but you must install the Sass pre-processor so it can compile the files.

```bash
npm install -D sass

```

### 3. Configure the Lit + SCSS Integration

To use SCSS inside Lit components (Shadow DOM), we need to import the SCSS file as a **string** rather than injecting it globally. Vite makes this easy with the `?inline` suffix.

**Create a style file:** `src/my-element.scss`

```scss
$primary-color: #646cff;

:host {
  display: block;
  border: 1px solid $primary-color;
  padding: 2rem;
}

h1 {
  color: $primary-color;
  &:hover {
    text-decoration: underline;
  }
}
```

**Use it in your component:** `src/my-element.ts`

```typescript
import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Note the '?inline' suffix! This tells Vite: "Give me the CSS string, don't put it in the <head>"
import styles from './my-element.scss?inline';

@customElement('my-element')
export class MyElement extends LitElement {
  // We use unsafeCSS because we trust our own build process
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <h1>Hello from Lit + SCSS!</h1>
      <slot></slot>
    `;
  }
}
```

_Note: You may need to create a `src/vite-env.d.ts` declaration if TypeScript complains about the `?inline` import, but usually Vite handles this._

### 4. Install Husky, Prettier, and Modern-Normalize

Now we will apply your preferred configuration stack.

```bash
# Install tools
npm install -D husky prettier modern-normalize

# Initialize Husky (creates .husky folder)
npx husky init

```

### 5. Configure Prettier

Create a `.prettierrc` file in the root:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

Add a "format" script to your `package.json`:

```json
"scripts": {
  "format": "prettier --write ."
  // ... other scripts
}

```

### 6. Set up the Pre-commit Hook

Tell Husky to run Prettier before every commit to keep the codebase clean.

```bash
# This writes the command into the pre-commit hook file
echo "npm run format" > .husky/pre-commit

```

_(Optional: You can also add `git add .` inside the hook if you want it to auto-stage formatting changes, though some teams prefer to fail the commit if formatting is off.)_

### 7. Global Normalization

Since `modern-normalize` is global, import it in your main CSS entry point (which affects the page, not the Shadow DOM).

**In `src/index.css` (or wherever your global styles live):**

```css
/* This handles the global reset */
@import 'modern-normalize/modern-normalize.css';

:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}
```

### Summary of the Architecture

You now have:

1. **Vite**: Fast builds.
2. **Lit**: Standard Web Components.
3. **SCSS**: Powerful styling (imported via `?inline`).
4. **Husky/Prettier**: Enforcing code quality on commit.

Would you like me to create the `vite-env.d.ts` snippet to ensure TypeScript fully recognizes those `.scss?inline` imports?

§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

To prevent TypeScript from throwing an error when you try to import an SCSS file with the `?inline` suffix, you need to tell it that these files exist and what they return.

Create (or update) the file named **`src/vite-env.d.ts`** and add the following declaration code:

```typescript
/// <reference types="vite/client" />

// This allows importing SCSS files with the ?inline suffix
// It tells TypeScript: "When I import *.scss?inline, treat it as a string."
declare module '*.scss?inline' {
  const content: string;
  export default content;
}

// Optional: If you also plan to import regular CSS files inline
declare module '*.css?inline' {
  const content: string;
  export default content;
}
```

### Why this is necessary

Without this file, TypeScript sees `import styles from './styles.scss?inline'` and gets confused because it doesn't understand the `?inline` part or that an SCSS file should return a string variable. This snippet essentially maps that specific import pattern to a simple string type.

Now your `MyElement` component will compile without any red squiggly lines!

```typescript
// Now valid TS
import styles from './my-element.scss?inline';
```

Would you like help creating your first Lit component for the `geotortue` map logic?
