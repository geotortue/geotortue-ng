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

- script to check consistency between dsl.json files on one side and lexer, parser, GTNToken & C° in other side
- enhance the look & feel
- deal with turtle moving outside the canvas
- find a replacement for icons of Tango Desktop Project.
  other than Material+Symbols, FontAwesome or those currently in src/presentation/components/utils/registered-icons.ts
  see OpenMoji, Microsoft Fluent Emoji, Phosphor Icons, others?
- complete the grammar
- add prefixed operators and predicates as a layer on top of infixed ones (see math.js), in the style of functional programming
- provide some pieces of tutorial
- more features from legacy GéoTortue: Settings, Procedure, Geometries, Audio, Video, ...
- tool to retrieve hard coded text and deal with them in i18n
- typography enhancers
- translator of old GéoTortue scripts
- collaboration features and tools (e.g. with TogetherJS)
- API with the real world (Audio, ...)
- QA: more tests, versionning, SonarQube, ...
- replace license-checker-rseidelsohn?

## GéoTortue NG DSL _versus_ GéoTortue Legacy DSL _versus_ mainstream Logo(s)

Analyzing all the differences is a long and ongoing task. Not all the intricacies of the GeoTurtle Legacy DSL have been explored yet. Any help would be greatly appreciated.

### GéoTortue Legacy DSL versus Logo

Differences between GéoTortue Legacy DSL and mainstream Logo dialects are of two kinds:

- french as default language of GéoTortue DSL (°): it includes points from 1 to 3 and partially the 4 one.
- structural and feature points: all the other ones.

> Note (°): voir [GéoTortue - DSL - I18n](#i18n).

1. **French structural keywords instead of the classic English core**
   - GéoTortue reserves keywords such as `pour`, `fin`, `alors`, `sinon`, `de`, and `à`.
   - Mainstream Logo dialects are usually presented with `to`, `end`, `if`, `else`, and related English forms.

2. **French turtle-command lexicon for core movement primitives**
   - The documented base commands are `av`, `re`, `td`, and `tg`.
   - In mainstream Logo, the common equivalents are usually `fd`, `bk`, `rt`, and `lt`.

3. **Different control-flow naming conventions**
   - Repetition/control constructs are documented with `rep`, `tant_que`, `boucle` and `pour_chaque`.
   - Mainstream dialects typically teach `repeat`, `while`, and dialect-specific `for` syntaxes.

4. **Multi-turtle addressing is explicit in grammar usage**
   - GéoTortue documents direct addressing of one or more turtles with `à` (see above).
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
   - In mainstream Logo dialects, a common convention is `:name` to read a variable value (with dialect-specific assignment forms such as `make`).

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

### GéoTortue - Future

- semi-colon no more required as command separator (but still accepted)
- GT_LOOP (`boucle`) as simple alias of GT_FOR_EACH (`pour_chaque`) (°).
- GT_RESET (`rz`) no more a simple alias of GT_CLEAR_GRAPHICS (`vg`).
- `palette`is already deprecated in GéoTortue Legacy v. 4, see `crayon` (°°).

> Note (°). It seems that `boucle` would have been rendered obsolete in the near future of GéoTortue Legacy.
> In GéoTortue NG, we will keep it (see below about `boucle` on a collection).
> May be with an alias as `parcourir`?
>
> Note (°°): but keep it as alias?

### GéoTortue DSL - Legacy versus NG

#### I18n

GeoTortue NG is fully internationalized. It is managed independently for:

- the user interface (UI),
- the command language (DSL)(°).

This is important from a pedagogical point of view: it lowers the barrier to learning in a foreign language.

And the best part? You can choose the language for either one on the fly, at any time.

> Note (°): GeoTurtle NG has a "canonical" DSL, meaning a DSL independent of any natural language. This makes it very easy to create a version of the DSL for any natural language of your choice. GeoTurtle NG currently offers French (selected by default) and English.

#### Fonts

GéoTortue Legacy uses `DejaVue Sans` as default font. GéoTortue NG uses `Nunito`.

> GéoTortue NG keeps `Inconsolat` as monospace font.

1. The "Roundness" Factor (Friendliness)

`Nunito` is a **Rounded Sans-Serif**. Notice how the ends of the letters (terminals) are soft and rounded, not sharp.

- **Psychology:** Sharp corners feel "serious" and "corporate" (like a tax form). Rounded corners feel "safe," "playful," and "approachable."
- **Context:** It mimics the visual language of crayons and markers, which fits perfectly with a "Turtle drawing" application.

Numito is particularly well-suited for an educational application targeting a wide audience, even very young children, potentially under 10 years old.

1. High Legibility (X-Height)

Nunito has a generous "x-height" (the height of lowercase letters like `a`, `c`, `e`). This makes the text easier to read at smaller sizes on buttons or tooltips, which is critical for young readers whose eyes are still developing tracking skills.

2. "Single-Story" Letters

While Nunito uses a standard double-story 'a', its overall structure is very open. If you want to go even more pedagogical, you could look at **Nunito's cousin, "Quicksand,"** or **"Andika"** (which uses the handwriting-style single-story `ɑ` that children learn to write in school), but Nunito is generally the better-balanced choice for a modern UI.

3. It's a Google Font (Zero Cost, 100% Consistency)

As for having the "exact same look everywhere," Nunito is hosted by Google Fonts. It will look identical on an iPad, a Windows PC, or a cheap Android tablet.

> This last argument is less relevant here as the GéoTurtle NG web site hosts the font files itself.

#### Grammar

The french legacy DSL raises some lexical difficulties. To keep the grammar and its processing simple with regard to a multi-user language DSL, the new French DSL deviates from it on a very limited number of points.

1. **french lexeme "à"**

The french legacy DSL uses the same lexeme `à` in two contexts:

- to select one or more turtles, in the meaning of "à appliquer à" (_"to apply to"_):
  `à` \*argument\*\*

- to specify the upper limit of a range for a loop:
  `boucle` _identifier_ `de` _expression_ `à` _expression_ _block_

To avoid any ambiguity between these two uses, and also regarding the meaning of "à" as a turtle selector, we should change this french keyword,
i.e. to replace it by something as "sur", "dans", "avec" or may be... "tortues"!

Let's try with ... `avec`. Any best idea would be welcome.

> The use of multiple turtles and the turtle selector is already at an advanced level. It doesn't hinder the discovery of Geoturtle or even the beginning of a deeper exploration. This change therefore seems acceptable to us.

2. **french lexeme "de"**

The french legacy DSL uses the same lexeme `de` in two contexts:

- to specify the lower limit of a range for a loop:
  `boucle` _identifier_ `de` _expression_ `à` _expression_ _block_

- to specifiy the set for a loop:
  `pour_chaque` _identifier_ `de` _expression_ _block_

To avoid any ambiguity between these two uses, let's try "dans" in this second case, i.e.:
`pour_chaque` _identifier_ `dans` _expression_ _block_

> The command `pour_chaque` is available since GéoTortue Legacy v. 4, see [GéoTortue 4 _(in french)_](http://geotortue.free.fr/index.php?page=v4).
>
> With `dans`in place of `de`, it should be possible to use `boucle`in place of `pour_chaque`.

## Codebase Presentation

### 1) What this project is (one sentence)

See the [README](./README.md#-presentation)

### 2) High-level structure (your mental map)

The code is layered:

- **`src/domain`**: core business logic (entities, domain services, types, interfaces), UI-independent.
- **`src/application`**: use-case orchestration (global state, project save/load service).
- **`src/infrastructure`**: concrete implementations (ANTLR interpreter, i18n service, browser file system, DI container).
- **`src/presentation`**: Lit Web Components (toolbar, editor, canvas, sandbox/workbench).

You can literally see this layering in the DI wiring file (`configureDependencyInjection`).

### 3) How app startup works (the runtime sequence)

`src/main.ts` bootstraps in this order:

1. Configure dependency injection.
2. Initialize i18n.
3. Dynamically load `<gtn-app>`.
4. Apply i18n to static DOM text.
5. Initialize language service internals.
6. Update splash text.
7. Fade/remove splash and reveal app.

If “the app doesn’t show correctly,” this is your first debugging checkpoint.

### 4) Most important building blocks

#### A) DI container (technical backbone)

`GTNContainer` is a singleton IoC container with lazy singleton creation (`registerSingleton`, `resolve`).

#### B) Composition root

`configureDependencyInjection()` is the single place that maps interfaces/tokens to concrete classes (interpreter, language service, renderers, project service, etc.).

#### C) Root UI component

`gtn-app` orchestrates state and user actions: run, clear, save/open, DSL language change, and editor/sandbox view switching.

### 5) Core engine flow: validate → parse → execute

#### Syntax validation

`GTNSyntaxService.validate()` builds ANTLR lexer/parser, attaches a custom error listener, and returns friendly errors for the UI.

#### Interpretation/execution

`GTNInterpreter.execute()`:

- canonicalizes localized keywords,
- builds ANTLR pipeline (lexer/token stream/parser),
- parses `program()`,
- executes via `GTNExecutionVisitor`.

#### Turtle domain model

`GTNTurtle` encapsulates position/rotation/pen/trail behavior (`forward`, `backward`, `left`, `right`, pen controls).

### 6) Internationalization (very important in this project)

i18n setup:

- `i18next` + HTTP backend,
- default language `fr`,
- separate namespaces: `ui` and `dsl`,
- resources loaded from `locales/{{lng}}/{{ns}}.json`.

`GTNI18nLanguageService` handles:

- UI language and DSL language as separate concerns,
- localStorage persistence,
- dictionary-backed keyword translation for DSL commands.

That separation is key to understanding how users can have UI in one language and commands in another.

### 7) Save/load project flow

`GTNProjectService` serializes runtime state (turtles + code + metadata) into a `.gtn` JSON file, and can restore that state back into runtime objects.

### 8) Best learning path for a newcomer

1. `README.md` (product + stack context).
2. `src/main.ts` (startup lifecycle).
3. `src/main/config/di.config.ts` (dependency map).
4. `src/presentation/gtn-app.ts` (UI orchestration).
5. `GTNSyntaxService` + `GTNInterpreter` (DSL pipeline).
6. `GTNTurtle` (core domain behavior).
7. i18n service (UI/DSL language split).
8. `GTNProjectService` (persistence).

### 9) Key takeaways

- The architecture is intentionally layered and decoupled (Domain/Application/Infrastructure/Presentation).
- Turtle behavior is domain logic; rendering and UI are separate concerns.
- DSL evolution will mainly involve ANTLR grammar and language services.
- UI language and DSL language are deliberately independent for better multilingual UX.

### 10) Business Reference Files

Some files with GéoTortue NG configuration data:

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
- license-checker-rseidelsohn for licenses checking
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
- **State**: _TBD_
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
