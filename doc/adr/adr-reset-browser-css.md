# ADR Reset browser CSS

The short answer is: **Yes, it is still highly recommended**, unless you are using a CSS framework that already handles normalization for you.

Even though modern browsers (Chrome, Firefox, Safari, Edge) are much more consistent than they were ten years ago, they still have annoying default differences in their "User Agent Stylesheets."

Here is the breakdown of why you likely still want it, and when you can skip it.

### Why you (probably) still need it

`modern-normalize` is distinct from the older `normalize.css` because it drops support for legacy browsers (like Internet Explorer) and focuses on how we build apps today.

1. **`box-sizing: border-box`**:
   This is the single biggest reason developers install it. By default, browsers use `content-box`. `modern-normalize` switches everything to `border-box`, which makes calculating widths/padding logical. Without this, you have to write that rule yourself anyway.
2. **System Fonts**:
   It automatically sets the font-family to use the native OS font stack (San Francisco on macOS, Segoe UI on Windows, etc.). This makes your app feel "native" and load faster (no font file downloads) immediately.
3. **Removes Default Margins**:
   Browsers usually add an 8px margin to the `<body>`. `modern-normalize` removes this so your layout hits the edges of the screen.
4. **Form Elements**:
   Buttons, inputs, and textareas have notoriously different default styles across browsers. `modern-normalize` makes them inherit fonts and look more consistent across platforms (e.g., preventing iOS from rounding corners on inputs automatically).

### When you do NOT need it

You can skip installing `modern-normalize` explicitly if you are using a UI framework that includes its own "Reset" or "Base" layer.

- **Tailwind CSS:** Uses **Preflight**, which is essentially `modern-normalize` injected with extra opinionated resets. If you use Tailwind, you do **not** need `modern-normalize`.
- **Bootstrap:** Uses **Reboot**, which serves the same purpose.
- **MUI (Material UI):** Includes a `<CssBaseline />` component that handles this.

### Summary Table

| Feature             | `normalize.css`           | `modern-normalize`          | No Normalization      |
| ------------------- | ------------------------- | --------------------------- | --------------------- |
| **Target Browsers** | Everything (incl. old IE) | Modern (Chrome, FF, Safari) | N/A                   |
| **File Size**       | Larger                    | Tiny                        | 0kb                   |
| **Box Sizing**      | No (usually)              | **Yes (border-box)**        | Content-box (painful) |
| **Fonts**           | Default serif             | **System UI fonts**         | Times New Roman       |

### Recommendation

If you are writing **custom CSS** (SCSS, Modules, Vanilla CSS) for this `geotortue-ng` project:
**Yes, install it.** It saves you from writing the same 20 lines of "fix-it" CSS at the start of every project.

```bash
npm install modern-normalize

```

_Then import it in your top-level CSS file:_

```css
@import 'modern-normalize/modern-normalize.css';
```

Since you mentioned TypeScript earlier, are you planning to use a specific styling solution like **Tailwind**, **Styled-Components**, or standard **SCSS**? This determines the best setup for you.
