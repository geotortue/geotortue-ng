# GéoTortue NG - Frontend (POC)

## 💡 Rational

This project is a [POC](https://en.wikipedia.org/wiki/Proof_of_concept) for a "new generation" of **[GéoTortue](http://geotortue.free.fr/)**, i.e. a **modern web rewriting** of the original desktop Java application [**GéoTortue**](http://geotortue.free.fr/). With as main goals:

- select the technical stack for [WEB development](https://en.wikipedia.org/wiki/Web_development);
- validate an architecture based on [DDD](https://en.wikipedia.org/wiki/Domain-driven_design);
- validate a multi-language [DSL](https://en.wikipedia.org/wiki/Domain-specific_language), i.e. in french, english, ...
- use [AI](https://en.wikipedia.org/wiki/Artificial_intelligence), e.g. [Google Gemini](https://gemini.google.com),
  to do reverse engineering of legacy code and coding the `New Generation` application.

Then "GéoTortue NG", with "NG" for "Nouvelle Génération", i.e. _GeoTurtle - New Generation_.

## ✨ Presentation

[**GéoTortue**](http://geotortue.free.fr/) is an educational software inspired (°) by the [Logo](<https://en.wikipedia.org/wiki/Logo_(programming_language)>) language to discover mathematics and algorithms.

The GéoTortue software stands out on two points:

- it was designed for all, whether in class (from elementary school to high school), home, with friends, ...
- it extends the scope of application to geometry in space and to non-Euclidean geometries.

It allows users to draw geometric figures using a turtle moving on the screen. The turtle is controlled via a simple and intuitive language (e.g., `fw` to advance, `tl` to turn right). By moving, the turtle draws a path, enabling the construction of complex geometric figures.

> (°) The language used by GéoTortue is a Logo-like but it's not a Logo language. It doesn't have the functional richness of a [Berkeley Logo (UCBLogo)](https://people.eecs.berkeley.edu/~bh/logo.html).
> And it doesn't follow certain well-established logo syntax conventions.

## ⚙️ A bit of technical

### Features

- **Interpreter**: Parse Logo commands and mathematical expressions in real-time.
- **Command Console**: A modern code editor to input Logo-like commands.
- **Graphic Console**: A 2D/3D visualization where turtles execute commands.
- **Procedure Console**: Create, save, and reuse custom procedures (macros).
- **Sandbox**: A simplified interface allowing beginners and the youngest to become familiar with GéoTortue.

These last two features have not been implemented yet.

### Technology Stack

The main parts:

- **UI Framework**: [Lit](https://lit.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **3D Engine**: [WebGL](https://developer.mozilla.org/fr/docs/Web/API/WebGL_API) ([three.js](https://threejs.org/))
- **Turtle Move Parser**: [ANTLR4](https://www.antlr.org/) ([antlr4ng](https://github.com/mike-lischke/antlr4ng))
- **Math Parser**: [Math.js](https://mathjs.org/)
- **Editor**: [CodeMirror](https://codemirror.net/)

> [DI](https://en.wikipedia.org/wiki/Dependency_injection) is done without using any dedicated framework.

### Tools

- [VSC](https://code.visualstudio.com/) as [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment)
- [GIT](https://git-scm.com/) as [VCS](https://en.wikipedia.org/wiki/Version_control)
- [Vite](https://vite.dev/) as build tool
- [Vitest](https://vitest.dev/) for testing
- mainly [Google Gemini Pro](https://gemini.google.com/) as [AI](https://en.wikipedia.org/wiki/Artificial_intelligence).

## 🏁 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- NPM
- GIT

### Installation

Clone the repository and install dependencies:

```bash
git clone [https://github.com/geotortue/geoturtle-ng-frontend.git](https://github.com/geotortue/geoturtle-ng-frontend.git)

cd geoturtle-ng-frontend

npm install
```

### Run

```bash
npm run start:open

```

The application opens in a new tab under the current browser, the turtle is ready to meet all your wishes.

## 🛠️ Développement

If you are interested in the project, you can contribute to it, including:

- By talking about the software to your colleagues and friends;
- By reporting the bugs;
- By sending your figures to enrich the documentation;
- By proposing improvements or suggesting new features;
- By writing tutorials.

See more details here: [Contributing Guide](./CONTRIBUTING.md).

## 🛡️ Licensing

This project is licensed under the [GPLv3 License](./LICENSE).

## 📜 Credits

- [GéoTortue](http://geotortue.free.fr/) (_site in french_) was designed and developed by [Salvatore Tummarello](mailto:geotortue@free.fr).
  The software owes a lot to the ideas, suggestions and enthusiastic remarks of Stéphan Petitjean, Erwan Adam, Jean-François Jamart and Frédéric Clerc.

- [GéoTortue](http://geotortue.free.fr/) was developed within the [IREM Paris-Nord](https://www-irem.univ-paris13.fr):
  - [GéoTortue 3D: utilisation et exemples d’activités](https://www-irem.univ-paris13.fr/site_spip/spip.php?article352) _(in french)_: _GéoTortue 3D: use and examples of activities_
  - [LOGO, ordinateurs et apprentissages](https://www-irem.univ-paris13.fr/site_spip/spip.php?article32) _(in french)_: _LOGO, computers and learning_
  - ...

- R. Hartig drew the [mascot](src/main/resources/cfg/tortue-v4.png).

## 🔗 Logo Links

- [Logo Foundation](https://el.media.mit.edu/logo-foundation/)

- [Berkeley Logo (UCBLogo)](https://people.eecs.berkeley.edu/~bh/logo.html)

- [Logo Language](https://wiki.c2.com/?LogoLanguage)

- [Wikipedia - Logo (programming language)](<https://en.wikipedia.org/wiki/Logo_(programming_language)>)

- [LbyM Web](https://app.lbym.org/), online interpreter

- [jsLogo](https://www.calormen.com/jslogo/), online interpreter (code source available)

- _Turtle Geometry_, the classic text on the subject
  Abelson, Harold & Andrea diSessa
  MIT Press, 1981, ISBN-13 978-0262010634
