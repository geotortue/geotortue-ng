# Technical stack

En fait il s'agit plus d'une liste de choix techniques et d'architecture, soit :

- Solid Architecture: DDD + DI
- Visuals: 3D Viewport, Code Editor, Toolbar
- Persistence: Save/Open Projects (JSON)
- Polish: i18n, Splash Screen, Material Icons

Soit :

- Langage : TypeScript (ES Modules natifs).
- Core :
  - Vanilla JS/TS (pas de framework lourd type Angular/React pour le cœur).
  - Math.js pour les calculs mathématiques "généraux"
  - Three.js pour les calculs vectoriels en 3D
- Look & feel : Vanilla CSS (ni SCSS, SASS, Tailwind ou autres)
- UI :
  - DI : pas de bibliothèque externe, codage direct d'un conteneur.
  - UI Components : Lit (très légère librairie pour faciliter la création de WebComponents natifs) ou Vanilla Custom Elements.
  - i18next, codemirror & antlr4
- Rendu 2D : HTML5 Canvas API.
- Rendu 3D : Three.js (Standard de facto, modulable) ou OGL (alternative très légère WebGL).
- Build Tool : Vite (pour la compilation rapide et le support ESM).

Les polices de caratères et les icônes sont téléchargées depuis le serveur d'application et non depuis un CDN.
