# GéoTortue NG - Commands & keywords

Work in progess. See also [CONTRIBUTING](../../CONTRIBUTING.md#géotortue-ng-dsl-versus-géotortue-legacy-dsl-versus-mainstream-logos)

Source: [GéoTortue Legacy - Index des commandes](http://geotortue.free.fr/index.php?page=aide_index), `[fr|en]/dsl.json` & `[fr|en]/ui.json` files

## GeoTortue Command Reference

| English           | _Original (FR)_             | Description                                                  | Example                           |
| ----------------- | --------------------------- | ------------------------------------------------------------ | --------------------------------- |
| **fd** (forward)  | _av (avance)_               | Moves the turtle forward by a given distance.                | `fd 50`                           |
| **bk** (backward) | _re (recule)_               | Moves the turtle backward by a given distance.               | `bk 50`                           |
| **rt** (right)    | _td (tournedroite, droite)_ | Rotates the turtle to the right by a given angle.            | `rt 90`                           |
| **lt** (left)     | _tg (tournegauche, gauche)_ | Rotates the turtle to the left by a given angle.             | `lt 45`                           |
| **cs** (erase)    | _vg (efface)_               | Clears the graphics from the screen.                         | `cs`                              |
| **cls** (clean)   | _rz (raze, nettoie)_        | Resets the screen and returns the turtle to the center.      | `cls`                             |
| **ht**            | _ct_                        | Hides the turtle icon.                                       | `ht`                              |
| **st**            | _mt_                        | Shows the turtle icon.                                       | `st`                              |
| **pu**            | _lc_                        | Lifts the pen (the turtle moves without drawing).            | `pu`                              |
| **pd**            | _bc_                        | Lowers the pen (the turtle draws while moving).              | `pd`                              |
| **color**         | _crayon_                    | Sets the color of the pen.                                   | `color red`                       |
| **fill**          | _remplis_                   | Fills a closed area with the current color.                  | `fill`                            |
| **write**         | _ecris (écris)_             | Displays text at the turtle's current position.              | `write "Hello"`                   |
| **repeat**        | _rep (repete, répète)_      | Repeats a block of commands for a specified count.           | `repeat 4 [fd 50 rt 90]`          |
| **while**         | _tantque (tant_que)_        | Executes a block as long as a condition is true.             | `while :x < 100 [...]`            |
| **if**            | _si_                        | Executes a block if a condition is met.                      | `if :a = 1 [...]`                 |
| **then**          | _alors_                     | Keyword used following a condition in an 'if' structure.     | `if :a = 1 then [...]`            |
| **else**          | _sinon_                     | Specifies a block to execute if the 'if' condition is false. | `if :a = 1 then [...] else [...]` |
| **foreach**       | _boucle (pour_chaque)_      | Iterates through each element in a list.                     | `foreach :i in [1 2 3] [...]`     |
| **from**          | _de_                        | Defines the starting value in a loop.                        | `from 1 to 10`                    |
| **to**            | _à_                         | Defines the ending value in a loop.                          | `from 1 to 10`                    |
| **in**            | _dans_                      | Used to specify a list to iterate through.                   | `foreach :x in :mylist`           |
| **tlp**           | _tlp_                       | Instantly teleports the turtle to coordinates (x, y).        | `tlp 100 100`                     |
| **aim**           | _vise_                      | Faces the turtle toward a specific point or turtle.          | `vise "Achille"`                  |
| **rod / rou**     | _pvb / pvh_                 | Rotate Down / Rotate Up (3D movements).                      | `pvb 30`                          |
| **ror / rol**     | _pvd / pvg_                 | Rotate Right / Rotate Left (3D movements).                   | `pvd 45`                          |

## Turtle screen boundary modes

Three modes dictate what happens when the turtle moves outside the visible screen:

- **WRAP (the default):** The screen acts like a continuous loop (a torus). If the turtle moves past the right edge of the screen, it instantly reappears on the left edge at the same trajectory. If it goes off the top, it wraps around to the bottom.
- **WINDOW:** The screen acts as a restricted viewing window into an infinite digital canvas. If the turtle goes past the edge, it simply continues moving off-screen. You will no longer be able to see it, but the program continues to track its exact mathematical coordinates. If you command it to turn around and walk back, it will eventually re-enter the visible window.
- **FENCE:** The screen edges act as impenetrable walls. If you command the turtle to move past the edge, it will stop exactly at the boundary and refuse to go further.

You can switch between these behaviors at any time by either:

- selecting the mode from the toolbar;
- or simply typing `WRAP`, `WINDOW`, or `FENCE` into the command prompt.
