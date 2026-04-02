# adr - licenses audit

## TODO

- try Snyk or `licensee`

## license-checker-rseidelsohn grumbles

/!\ coming back to `license-checker-rseidelsohn`: avoid critical vulnerabilities with `nlf` is too complex/!\

Even with `license-checker-rseidelsohn` is still complex but at least it's OK with in package.json:

```json
  "overrides": {
    "ajv": "^8.18.0",
    "tar": "^7.5.8",
    "glob": "^11.0.0",
    "minimatch": "^10.0.1",
    "minimist": "^1.2.8",
    "lodash.set": "^4.3.2",
    "@eslint/eslintrc": "^3.2.0",
    "license-checker-rseidelsohn": {
      "glob": "^11.0.0",
      "minimatch": "^10.0.1"
    },
    "read-installed-packages": {
      "read-package-json": {
        "glob": "^11.0.0"
      }
    }

},
```

In fact a simpler `overrides` is enough:

```json
  "overrides": {
    "ajv": "^8.18.0",
    "tar": "^7.5.8",
    "glob": "^11.0.1",
    "minimatch": "^10.0.1",
    "minimist": "^1.2.8",
    "lodash.set": "^4.3.2",
    "@eslint/eslintrc": "^3.2.0"
},
```

But there is still an issue `ajv`:
TypeError: Cannot set properties of undefined (setting 'defaultMeta')

Compromise : remove ajv from overrides and accept some moderate severity vulnerabilities

```json
  "overrides": {
    "tar": "^7.5.8",
    "glob": "^11.0.1",
    "minimatch": "^10.0.1",
    "minimist": "^1.2.8",
    "lodash.set": "^4.3.2"
  },
```

```bash
rm -rf node_modules package-lock.json
npm install
# npm warn deprecated read-package-json@6.0.4: This package is no longer supported. Please use @npmcli/package-json instead.
# npm warn deprecated puppeteer@23.11.1: < 24.15.0 is no longer supported
# npm warn deprecated glob@11.1.0: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
#
# > geo-tortue-web-app@1.2.11 prepare
# > husky
#
#
# added 1211 packages, and audited 1362 packages in 1m
#
# 250 packages are looking for funding
#   run `npm fund` for details
#
# 5 moderate severity vulnerabilities
#
# To address all issues (including breaking changes), run:
#   npm audit fix --force
#
# Run `npm audit` for details.

npm list ajv
# [...]/frontend
# ├─┬ @commitlint/cli@20.4.2
# │ └─┬ @commitlint/load@20.4.0
# │   └─┬ @commitlint/config-validator@20.4.0
# │     └── ajv@8.18.0
# └─┬ eslint@9.39.2
#   ├─┬ @eslint/eslintrc@3.3.3
#   │ └── ajv@6.12.6
#   └── ajv@6.12.6

git add .

git commit -m 'refactor: mainly sandbox'
✔ Backed up original state in git stash (b97a178)
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Cleaning up temporary files...
[main 87eb398] refactor: mainly sandbox
 47 files changed, 5143 insertions(+), 1765 deletions(-)
 create mode 100644 doc/adr/adr-licenses-audit.md
 create mode 100644 scripts/fix-antlr-types-generated.ts
 delete mode 100644 scripts/fix-generated.ts
 create mode 100644 scripts/generate-antlr-token-enum.ts
 delete mode 100644 scripts/generate-token-enum.ts
 create mode 100644 src/presentation/components/sandbox/gtn-color-panel.ts
 create mode 100644 src/presentation/components/sandbox/gtn-commands-panel.ts
 create mode 100644 src/presentation/components/sandbox/gtn-compass-panel.ts
 create mode 100644 src/presentation/components/sandbox/gtn-controls-panel.ts
 create mode 100644 src/presentation/components/sandbox/gtn-navigation-panel.ts
 create mode 100644 src/presentation/components/sandbox/gtn-settings-panel.ts
 create mode 100644 src/presentation/components/utils/gtn-icon.test.ts
 create mode 100644 src/presentation/components/utils/gtn-icon.ts
 create mode 100644 src/presentation/components/utils/gtn-keyboard.ts
 create mode 100644 src/presentation/components/utils/keyboard.test.ts
 create mode 100644 src/presentation/components/utils/keyboard.ts
 //create mode 100644 src/presentation/components/utils/registered-icons.test.ts
 src/presentation/components/utils/icon-tools.test.ts
 src/presentation/components/utils/icon-tools.ts
 create mode 100644 src/presentation/components/utils/registered-icons.ts
```

## Rational

License auditing tools are essentially scanners. They don't need to change unless the way package.json files or LICENSE files are written changes—and those standards have been rock-solid for a decade.

When **GPLv3** is choose for a project, it is committing to a "copyleft" philosophy. This means that any software derived from the project code must also be released under the same (or a compatible) license.

Checking dependencies is critical because **not all Open Source licenses play well together.** Even if a library is "free," its specific legal terms might contradict the requirements of the GPLv3, creating a legal deadlock.

## The "Compatibility" Trap

Licenses are essentially sets of permissions and obligations. For a dependency to be used in a GPLv3 project, its license must be **GPLv3-compatible**.

- **Permissive Licenses (Safe):** MIT, BSD, and Apache 2.0 are generally compatible. They say, "Do whatever you want," so the GPLv3 can simply add its extra requirements on top.
- **Incompatible Licenses (Danger):** Some older licenses (like the original BSD 4-clause or even GPLv2-only) have "advertising clauses" or patent terms that conflict with GPLv3. If you use an incompatible dependency, you cannot legally distribute your software because you cannot satisfy both licenses simultaneously.

## Preventing "License Creep" (AGPL Issues)

In the Node.js ecosystem, it is easy for a single `npm install` to bring in 100+ transitive dependencies. If one of those deep dependencies is licensed under **AGPL (Affero GPL)**, your obligations change.

- The AGPL requires you to provide source code even if the software is only used over a network (like a web API).
- If you don't check your tree, a "stealth" AGPL dependency could force you to open-source your backend infrastructure when you only intended to open-source the client application.

## Protecting Your Project’s "Viral" Integrity

The GPLv3 is designed to be **"viral"**—it ensures that the freedom of the code is preserved as it is shared.

- If you include a **Proprietary** or **Restrictive** dependency, you are effectively breaking that chain.
- You cannot legally claim your project is "Pure GPLv3" if it relies on a "Closed Source" library. This can lead to your project being flagged by package registries or rejected by open-source distributions (like Debian or Fedora).

## Avoiding "Zombie" Dependencies

In many JavaScript projects, developers use packages that have been abandoned. Sometimes these packages have **No License** or **Unclear Licenses**.

- Under international copyright law, "No License" usually means "All Rights Reserved" by the author.
- Including a "No License" package in your GPLv3 project is technically a copyright infringement, as you don't have the legal right to redistribute that code under the GPL.

## Summary Table: Common License Compatibility with GPLv3

| License Type         | Examples                      | Compatible with GPLv3?                 |
| -------------------- | ----------------------------- | -------------------------------------- |
| **Permissive**       | MIT, BSD-2-Clause, Apache 2.0 | **Yes**                                |
| **Weak Copyleft**    | LGPLv3                        | **Yes**                                |
| **Strict Copyleft**  | GPLv2-only                    | **No** (GPLv2 and v3 are incompatible) |
| **Network Copyleft** | AGPLv3                        | **Yes** (but the project becomes AGPL) |
| **Proprietary**      | Commercial SDKs               | **No**                                 |

## nlf versus license-checker-rseidelsohn

### 1. Superior Dependency Resolution

- `license-checker-rseidelsohn` often struggles with modern package managers (like `pnpm` or newer versions of `npm`) and deeply nested dependency trees. It frequently misses packages or returns "Unknown" for licenses it can't find.
- `nlf` is more thorough; it checks the `package.json`, the `LICENSE` file, and even the `README` to find a match, which is why your summary table is now so much more comprehensive.

### 2. Built-in "Summary" Logic

`nlf` does the heavy lifting of resolving which license "wins" if a package mentions several. This allowed to write a very simple CSV parser in `scripts/audit-licenses.ts` without having to write complex logic to guess the license ourselves.

### 3. Stability and Maintenance - "Stable" vs. "Dead"

`license-checker` was the industry standard for a long time, but it has gone through various forks (like the rseidelsohn one) because the original was abandoned. nlf is a lighter, more focused tool that does one thing—find licenses—without a massive footprint of its own dependencies.

- The "Unknown" Problem: Newer tools often rely strictly on the license field in package.json. If a developer forgets it, the tool fails. nlf is famous for its "Guessing" engine, which physically opens files to find the word "MIT" or "Apache."
- The rseidelsohn Problem: `license-checker-rseidelsohn` is a "maintenance fork" of a dead tool, and it was already starting to fail on modern Node.js versions (like the fs.existsSync deprecation warnings).

### 4. Integration with Custom Logic

By using `nlf` as a data source and wrapping it in a TypeScript script, that achieved two things:

- **Decoupling**: the project is not tied to a specific tool's config format.
- **Customization**: it's easy to add the logic to generate specific JSON, HTML, and Markdown reports exactly as wished.

### Summary nlf versus license-checker-rseidelsohn

| Feature              | `license-checker-rseidelsohn`       | `nlf` (with our script)              |
| -------------------- | ----------------------------------- | ------------------------------------ |
| **Accuracy**         | Moderate (often misses nested deps) | High (multi-source discovery)        |
| **Output**           | Hardcoded formats                   | Fully custom (MD, HTML, JSON)        |
| **Reliability**      | Known for "Unknown" results         | Excellent at resolving ambiguity     |
| **GPL-3 Compliance** | Hard to enforce custom rules        | **Strictly enforced by a whitelist** |
