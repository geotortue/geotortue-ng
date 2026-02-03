# Rétro ingénierie

Legacy :

- <http://geotortue.free.fr/>
- <https://www-irem.univ-paris13.fr/site_spip/spip.php?article69>
- <https://github.com/geotortue/geotortue>

## Objectifs

Garantir que l'application est:

- compatible au mieux avec GéoTortue "legacy" (DSL, features, configuration)
- modulaire (ES Modules).
- maintenable (Typage fort, DDD, Interfaces).
- performante (WebGL pour la 3D, pas de overhead Swing).
- portable (Fonctionne sur navigateur mobile et desktop).

## Équivalences de classe

Voici comment les anciennes classes Swing/Java sont mappées vers le nouveau modèle:

| Legacy (Java)            | Modern (TS)            | Rôle                                  |
| ------------------------ | ---------------------- | ------------------------------------- |
| GeoTortue.java           | GTNApp.ts              | Point d'entrée, Bootstrap DI          |
| GTProcessingContext.java | GTNExecutionContext.ts | Contexte d'exécution d'un script      |
| Turtle.java              | GTNTurtle.ts           | Entité Domaine (Data + Logic pure)    |
| GTGraphicSpace.java      | GTNViewport.ts         | WebComponent (Contient le Canvas)     |
| GTRendererManager.java   | GTNRendererService.ts  | Service de choix du rendu (2D/3D)     |
| files.GTUserFileManager  | GTNStorageService.ts   | Gestion I/O (LocalStorage / File API) |

| Élément Legacy          | Élément Moderne  | Technologie                   |
| ----------------------- | ---------------- | ----------------------------- |
| GeoTortue.java (Window) | gtn-app          | Lit Element + CSS Grid        |
| GTGraphicSpace (JPanel) | gtn-viewport     | Lit Element + Canvas/Three.js |
| GTConsole (JPanel)      | gtn-console      | Lit Element + HTML Input      |
| GTProcessingContext     | GTNInterpreter   | Service TypeScript (Logic)    |
| Layout Managers Swing   | CSS Flexbox/Grid | CSS natif                     |

## Distinction calculatrice générale & moteur géométrique

| Interface      | IGTNMathEvaluator                                  | IGTNMathProvider                                          |
| -------------- | -------------------------------------------------- | --------------------------------------------------------- |
| Rôle           | Calculatrice & Parser                              | Moteur Géométrique                                        |
| Responsabilité | Comprendre et calculer des expressions textuelles. | Manipuler des vecteurs et des rotations dans l'espace 3D. |
| Entrée         | Chaîne de caractères ("50 + :x \* 2")              | Objets 3D (GTNVector3, GTNQuaternion)                     |
| Sortie         | Un nombre (Scalaire)                               | Une nouvelle position ou orientation                      |
| Technologie    | Wrapper autour de MathJS                           | Wrapper autour de Three.js Math                           |
| Legacy         | Remplace JEP (Java Expression Parser)              | Remplace la logique dans GTGeometryManager                |

En résumé :

- Evaluator gère le QUOI (Combien je dois avancer ? -> Valeur numérique).
- Provider gère le COMMENT (Quelles sont les coordonnées x,y,z finales ? -> Vecteur).

## Plan de Migration

Étape 1 : Infrastructure Core

    Créer le projet Vite + TS.

    Implémenter GTNPoint, GTNVector, GTNQuaternion.

    Créer le conteneur d'injection de dépendance.

Étape 2 : Le Moteur (Engine)

    Traduire le parser JEP (Java Math Expression Parser) vers une solution JS (ex: mathjs ou un parser custom simple si les dépendances doivent être minimes).

    Réécrire TurtleManager en GTNTurtleRepository.

    Remplacer les Threads Java par des async/await pour gérer les délais (wait) dans les scripts de la tortue.

Étape 3 : Rendu

    Implémenter ThreeJsAdapter implémentant IGTNRenderer.

    Gérer la boucle de rendu (requestAnimationFrame).

Étape 4 : UI

    Créer les WebComponents de base (gtn-app, gtn-menu).

    Intégrer CodeMirror pour l'édition.
