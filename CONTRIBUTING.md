# GéoTortue - Contributing Guide

**Welcome!**

:tada::+1: First, thank you for considering contributing to `GéoTortue`! :tada::+1:

## Guidelines

We would like to highlight the following points:

1. Be respectful
   - We appreciate the contributions to GéoTortue and we ask you to respect each other.
2. Be responsible
   - You are responsible for submissions of your Pull Request.
3. Give credit
   - If a submission or contribution is based on the work of a third party (e.g. research article, open-sweet project, public code), please quote or attach any information about the original sources. Everyone has to be credited with the work they have done.

## License

By contributing to **GéoTortue**, you agree that your contributions will be licensed [GPL 3](./LICENSE).

## Road Map

- enhance the look & feel
- enhance the grammar
- more features from legacy GéoTortue: Procedure, Geometries, Audio, Video, ...
- tool to retrieve hard coded text and deal with them in i18n
- typography enhancers
- collaboration features and tools (e.g. with TogetherJS)
- API with the real world (Audio, ...)
- QA: more tests, versionning, SonarQube, ...
- replace license-checker-rseidelsohn?

## GéoTortue Legacy DSL versus Logo

Differences between GéoTortue grammar and mainstream Logo dialects:

1. **French structural keywords instead of the classic English core**
   - GéoTortue reserves keywords such as `pour`, `fin`, `alors`, `sinon`, `de`, and `à`.
   - Mainstream Logo dialects are usually presented with `to`, `end`, `if`, `else`, and related English forms.

2. **French turtle-command lexicon for core movement primitives**
   - The documented base commands are `av`, `re`, `td`, and `tg`.
   - In mainstream Logo, the common equivalents are usually `fd`, `bk`, `rt`, and `lt`.

3. **Different control-flow naming conventions**
   - Repetition/control constructs are documented with `rep`, `tant_que`, and `boucle`.
   - Mainstream dialects typically teach `repeat`, `while`, and dialect-specific `for` syntaxes.

4. **Multi-turtle addressing is explicit in grammar usage**
   - GéoTortue documents direct addressing of one or more turtles with `à`.
   - Many mainstream environments are centered on a single active turtle by default.

5. **Statement separator supports both newline and semicolon (`;`)**
   - The command parser explicitly splits instructions on either `;` or line breaks.
   - In mainstream Logo teaching material, line-based instruction flow is common, while semicolon has dialect-dependent meaning (often not a universal statement terminator).

6. **Comments support multiple styles (`#`, `//`, and `/* ... */`)**
   - GéoTortue comment parsing accepts shell-style, C++-style, and C-style block comments.
   - Mainstream Logo dialects more commonly center semicolon-based or dialect-specific comment conventions.

7. **String delimiter is the double quote (`"`) with escape handling**
   - String scopes are parsed from `"` to `"`, and escaped quotes (`\"`) are handled explicitly.
   - This differs from classic Logo traditions where quote is frequently tied to word notation and where string conventions vary by implementation.

8. **Colon (`:`) usage differs from mainstream Logo conventions**
   - In GéoTortue examples, `:` appears notably in function signatures (for example `def f:x->x^2+1`) and assignment is expressed with `:=`.
   - In mainstream Logo dialects, a common convention is `:name` to read a variable value (with dialect-specific write forms such as `make`).

9. **Native 3D and 4D primitives in the command surface**
   - Commands such as `pvh`, `pvb`, `pvxy`, `pvxz`, and `pvyz` are explicitly documented.
   - This goes beyond the mainstream Logo baseline, which is most often 2D-first.

10. **Dimension-aware runtime semantics and errors**
    - The runtime message catalog includes dedicated dimension errors (`GTJEP_NOT_3D`, `GTJEP_NOT_4D`).
    - Command execution checks dimensional constraints before applying geometry-dependent rotations.

11. **Integrated music/MIDI command layer**
    - The command set includes `PLAY`, `SCORE`, and `CONCERT` (documented in French as `chante`, `partition`, `concert`).
    - Runtime handling validates MIDI events/channels and raises dedicated MIDI errors.

12. **Broader geometry scope than mainstream Logo introductions**

- The project README explicitly positions GéoTortue as extending Logo to 3D space and non-Euclidean geometries.
- Tips also highlight 4D geometry as part of the language environment.

## Business Reference Files

- src/infrastructure/antlr/grammar/GeoTortueLexer.g4
- src/infrastructure/antlr/grammar/GeoTortueParser.g4
- src/infrastructure/i18n.ts, for the default language, see DEFAULT_LANGUAGE
- src/domain/types/language.ts, for the supported languages, see SUPPORTED_LANGUAGES
- src/assets/locales/{{lang}}/ui.json
- src/assets/locales/{{lang}}/dsl.json, especially section 'colors' for the CSS Colors
- src/domain/value-objects/GTNColor.ts, for the known CSS colors, see NAMED_CSS_COLOR
- others?

## Development Technologies

### Technical Stack

- **UI Framework**: [Lit](https://lit.dev/) & [scss](<https://en.wikipedia.org/wiki/Sass_(style_sheet_language)>) (°)
- **Icons & fonts**: material-icons, fortawesome
- **DI**: internal component, see class `GTNContainer` and function `configureDependencyInjection`
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **3D Engine**: [WebGL](https://developer.mozilla.org/fr/docs/Web/API/WebGL_API) ([three.js](https://threejs.org/))
- **Turtle Move Parser**: [ANTLR4](https://www.antlr.org/) ([antlr4ng](https://github.com/mike-lischke/antlr4ng))
- **Math Parser**: [Math.js](https://mathjs.org/)
- **Editor**: [CodeMirror](https://codemirror.net/)
- **I18n**: [i18next](https://www.i18next.com/)

> (°) About `Semantic CSS` versus [Tailwind CSS](https://tailwindcss.com/), see [ADR - Semantic CSS](doc/adr/adr-css-semantic.md)

### Tools

- [VSC](https://code.visualstudio.com/) as [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment)
- [GIT](https://git-scm.com/) as [VCS](https://en.wikipedia.org/wiki/Version_control)
- [Vite](https://vite.dev/) as build tool
- [Vitest](https://vitest.dev/) for testing
- [prettier](https://prettier.io/) & [eslint](https://eslint.org/) for QA
- [@ysk8hori/typescript-graph](https://github.com/ysk8hori/typescript-graph) for dependency diagram
- [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) & [vite-bundle-visualizer](https://github.com/KusStar/vite-bundle-visualizer) for bundle size management
- mainly [Google Gemini Pro](https://gemini.google.com/) and [ChatGPT Codex](https://chatgpt.com/codex) as [AI](https://en.wikipedia.org/wiki/Artificial_intelligence).

## Development Workflow

### 1. Branching Strategy

We use a feature-branch workflow.

- **main**: The stable production branch.
- **feature/your-feature-name**: Create a new branch for every feature or bug fix.

### 2. Commit Messages

We follow the **Conventional Commits** specification. Please format your commit messages as follows:

`<type>(<scope>): <subject>`

**Types:**

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Example:**
`feat(compiler): add support for nested repeat loops`

### 3. Coding Standards

We follow the **[Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)** best practices:

- **Formatting**: Handled by _\*\*[Prettier](https://prettier.io/)_. Run `npm run lint` to verify.
- **Linting**: Handled by **[ESLint](https://eslint.org/)**.
- **Architecture**: We follow a [DDD](https://en.wikipedia.org/wiki/Domain-driven_design) architecture.
- **State**: ...
- **Components**: [Lit](https://lit.dev/) with DI.

### 4. Pull Requests

1. Fork the repo and create your branch from `main`.
2. Ensure your code passes all tests (`npm test`) and linting (`npm run lint`).
3. Submit a Pull Request (PR) to the `main` branch.
4. Provide a clear description of the changes and link to any relevant issues.

## Reporting Bugs

If you find a bug, please create an issue on GitHub describing:

1. The steps to reproduce the bug.
2. The expected behavior.
3. The actual behavior.
4. Screenshots or console logs if applicable.

Thank you for helping improve `GéoTortue NG`!
