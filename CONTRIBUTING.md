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
   - If a submission or contribution is based on the work of a third party (e.g., research article, open-sweet project, public code), please quote or attach any information about the original sources. Everyone has to be credited with the work they have done.

## License

By contributing to **GéoTortue**, you agree that your contributions will be licensed [GPL 3](./LICENSE).

## Road Map

- enhance the look & feel
- enhance the grammar
- more features from legacy GéoTortue: Procedure, Sandbox, Geometries, Video, ...
- collaboration features and tools (e.g. with TogetherJS)
- API with the real world (Audio, ...)
- QA: more tests, versionning, SonarQube, ...

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

We follow the **[Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html** best practices:

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
