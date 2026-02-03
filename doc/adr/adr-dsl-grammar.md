# DSL - Grammar

GéoTortue utilise un langage proche de celui de Logo, mais adapté aux spécificités de GéoTortue :

- Multi tortues
- Représentation 3D
- Géométries non euclidiennes.

Sur certains points ce langage diffère des versions courantes de Logo :

- pas de préfixage avec un 2 points des noms de variables pour y faire référence
- point virgule comme séparateur de commande, mais optionel en fin de ligne

On pourrait envisager de donner plus de souplesse à GéoTortue :

- rendre optionnel le ";" de fin de commande
- utiliser le : de façon optionnel pour lever l'ambigüité d'une expression telle que `crayon rouge`: ici 'rouge' est un litéral et non une variable.

Cf. :

- [GéoTortue - Index des commandes](http://geotortue.free.fr/index.php?page=aide_index)
- [GéoTortue - Les fonctions mathématiques](http://geotortue.free.fr/index.php?page=aide_maths)
- [GéoTortue - Les variables](http://geotortue.free.fr/index.php?page=aide_tutos_intro_variables)
- etc.

La distribution de Logo prise en référence est UCBLogo (appelé aussi Berkeley Logo).

- <https://people.eecs.berkeley.edu/~bh/logo.html>
- <https://cs.brown.edu/courses/bridge/1997/Resources/LogoTutorial.html>

Technologie DSL basée sur une grammaire Antlr4 (G4) :

- elle délègue tous les calculs mathématiques à Math.js
- mais elle contrôle la validité des expressions mathématiques
  afin de pouvoir faire remonter au plus tôt vers l'utilisateur les erreurs de syntaxe.

Utiliser Antlr4 avec CodeMirror 6 permet d'avoir une coloration syntaxique précise et une autocomplétion contextuelle (intelligente) basée sur la grammaire réelle, plutôt que sur des expressions régulières approximatives.

## DSL or not?

In many ways Logo is often considered one of the earliest and most influential examples of a **Domain-Specific Language (DSL)**, though it sits in a unique position between a DSL and a General-Purpose Language (GPL).

Here is the breakdown of why it fits both categories:

### 1. Why it is a DSL (The "Turtle Graphics" Domain)

Logo was designed specifically for the domain of **education and constructive learning**.

- **Targeted Functionality:** Its primary "domain" is **Turtle Graphics**. The commands (`FORWARD`, `LEFT`, `REPEAT`) are a specialized vocabulary designed to manipulate a specific environment.
- **Cognitive Accessibility:** It was created by Seymour Papert to provide a "low floor" (easy to start) for children to explore mathematical and geometrical concepts through a "microworld."
- **Abstraction:** It abstracts away complex computer science concepts (like memory management or low-level syntax) to focus entirely on the logic of geometry and movement.

### 2. Why it is also a General-Purpose Language

Technically, Logo is a dialect of **Lisp**. This means it is "Turing complete" and can do much more than just draw shapes:

- **List Processing:** It has powerful capabilities for handling strings and lists (hence the name "Logo," from the Greek _logos_ for word/thought).
- **Recursion & Logic:** You can use it to write complex algorithms, handle file systems, or perform advanced mathematics.

---

### The Verdict: A "Domain-First" Language

In modern terminology, we often call Logo a **"Pedagogical DSL"** that grew into a full language.

| Aspect          | Domain-Specific (DSL)                | General-Purpose (GPL)             |
| --------------- | ------------------------------------ | --------------------------------- |
| **Primary Use** | Turtle Graphics & Geometry           | Data processing & Logic           |
| **Syntax**      | Natural language-like (`FORWARD 50`) | Lisp-based functional programming |
| **Environment** | The "Microworld"                     | Any computational problem         |

### Connection to DDD

If you were applying **Domain-Driven Design** to an educational software project, Logo would be your "Ubiquitous Language" made manifest. It takes the expert's language (the teacher's geometry concepts) and turns it directly into executable code.

Would you like me to show you how a **DSL** is typically implemented in a modern TypeScript/DDD architecture using a pattern like the _Interpreter_ or _Fluent Interface_?
