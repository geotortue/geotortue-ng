# ADR 004. Changelog and semantic versionning

Date: 2025-12-31

## 1. Status

Accepted

## 2. Context

As soon as a project is not a simple prototype that will be quickly thrown away, the memory of why things were done as they are will fade much more quickly than you expected.

Either for the coder itself or for any other future user or contributor, to see precisely what changes have been made will be of great help. Moreover, you should be able to link any change to a release of the code.

To address this, we aim for a "zero-manual-work" workflow where commit validation, code formatting, and versioning/changelogs are handled automatically by the CI/CD pipeline and local git hooks.

## 3. Decision

Use practices largely adopted through open source projects, specifically complying with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [Semantic Versioning 2.0.0](https://semver.org/#semantic-versioning-200).

We will utilize a modern (2026 standard) TypeScript toolchain to automate this:

1. **Husky:** Acts as the primary gatekeeper for Git hooks.
2. **Commitlint:** Enforces the `type(scope): description` format using native TypeScript configuration (`commitlint.config.ts`).
3. **Lint-staged:** Runs Prettier and ESLint only on changed files (`*.{ts,tsx,js,json,md}`) before the commit is finalized to ensure a clean codebase.
4. **Semantic Release:** Automatically analyzes commit history on the main branch to determine the next SemVer bump (Major, Minor, or Patch), generates a `CHANGELOG.md`, and handles npm publishing via `.releaserc.json`.

As it's an application, not a library, this project will not be published on NPM registry.

## 4. Consequences

- **Workflow Logic:** Contributors must strictly adhere to Conventional Commits. The commit type directly dictates the versioning impact:
  - `fix(...)` triggers a **Patch** (1.0.0 → 1.0.1)
  - `feat(...)` triggers a **Minor** (1.0.0 → 1.1.0)
  - `feat(...)!` or `BREAKING CHANGE:` triggers a **Major** (1.0.0 → 2.0.0)
  - `chore(...)` triggers no release.

- **Automation:** Release notes and version numbers are no longer manually managed; they are purely a derivative of the commit history.

- **Performance:** Commits will take slightly longer to complete locally as Node.js must spin up to run Husky and the associated linting tasks sequentially.

## 5. Considered Alternatives

### Lefthook (The Modern Powerhouse)

Lefthook was considered as a high-performance alternative to Husky.

- **Pros:** Written in Go (compiled binary), offers instant execution without Node.js startup overhead, and supports parallel execution of tasks (e.g., running lint and tests simultaneously). It also supports monorepos natively via a single `lefthook.yml`.
- **Cons:** Less "standard" in the JS/TS ecosystem compared to Husky.
- **Decision:** We chose **Husky** to maintain the "industry standard" familiarity for TypeScript developers, despite Lefthook's speed advantages.

### Native Git Hooks

- **Description:** Configuring `git config core.hooksPath .githooks` directly.
- **Cons:** Requires manual setup commands for every developer who clones the repo, whereas Husky/Lefthook automate installation via `npm install`.

## 6. More reading

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
a specification for adding human and machine readable meaning to commit messages

[Semantic Versioning 2.0.0](https://semver.org/#semantic-versioning-200)

[standard-version](https://github.com/conventional-changelog/standard-version)

[semantic-release](https://semantic-release.gitbook.io/semantic-release/)

[Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

[The perks of committing with conventions](https://slides.com/marionebl/the-perks-of-committing-with-conventions), Mario Nebl, 2018

[The way to fully automated releases in open source projects](https://kevinkreuzer.medium.com/the-way-to-fully-automated-releases-in-open-source-projects-44c015f38fd6), Kevin Kreuzer, Mar 4, 2019
How to use conventional-commits and semantic-release in combination with GitHub and Travis.

[How to automate your releases, versioning & release notes like a boss](https://itnext.io/automate-your-releases-versioning-and-release-notes-with-semantic-release-d5575b73d986), Khaled Osman, Mar 5, 2019

[Keep a Changelog](https://keepachangelog.com/en/1.0.0/), Don’t let your friends dump git logs into changelogs.

[The importance of being versioned](https://humanwhocodes.com/blog/2011/02/22/the-importance-of-being-versioned/), posted at February 22, 2011 by Nicholas C. Zakas

[Saying Goodbye to Husky: How Lefthook Supercharged Our TypeScript Workflow](https://dev.to/saltyshiomix/saying-goodbye-to-husky-how-lefthook-supercharged-our-typescript-workflow-35c8)

[Lefthook benefits vs Husky](https://dev.to/quave/lefthook-benefits-vs-husky-and-how-to-use-30je)
