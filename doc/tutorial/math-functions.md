# GéoTortue Math Functions (EN/FR)

This table lists the math functions currently available (see files `src/assets/locales/{{language code}}/dsl.json`).

| English              | _Original (FR)_               | Description                       | Example                |
| -------------------- | ----------------------------- | --------------------------------- | ---------------------- |
| **add** (plus)       | _add, plus, ajoute_           | Adds values.                      | `add(1, 2)`            |
| **subtract** (minus) | _subtract, moins, soustrait_  | Subtracts values.                 | `subtract(7, 2)`       |
| **multiply** (times) | _multiply, fois, multiplie_   | Multiplies values.                | `multiply(3, 4)`       |
| **divide** (over)    | _divide, divise, sur_         | Divides values.                   | `divide(9, 3)`         |
| **pow** (power)      | _pow, puissance_              | Exponentiation function.          | `pow(2, 8)`            |
| **mod** (modulo)     | _mod, modulo_                 | Modulo/remainder.                 | `mod(10, 3)`           |
| **sqrt**             | _racine_                      | Square root.                      | `sqrt(16)`             |
| **nthRoot**          | _nthRoot, racine_n_           | n-th root.                        | `nthRoot(27, 3)`       |
| **abs**              | _valeur_absolue_              | Absolute value.                   | `abs(-5)`              |
| **round**            | _round, arrondi_              | Rounds to nearest value.          | `round(3.6)`           |
| **floor**            | _floor, plancher_             | Rounds down.                      | `floor(3.9)`           |
| **ceil**             | _plafond_                     | Rounds up.                        | `ceil(3.1)`            |
| **min**              | _min_                         | Minimum of arguments.             | `min(2, 5, 1)`         |
| **max**              | _max_                         | Maximum of arguments.             | `max(2, 5, 1)`         |
| **log**              | _log_                         | Logarithm.                        | `log(8, 2)`            |
| **log10**            | _log10_                       | Base-10 logarithm.                | `log10(1000)`          |
| **ln**               | _ln_                          | Natural logarithm.                | `ln(2)`                |
| **exp**              | _exp_                         | Exponential function.             | `exp(1)`               |
| **sin**              | _sin_                         | Sine.                             | `sin(0.5)`             |
| **cos**              | _cos_                         | Cosine.                           | `cos(0.5)`             |
| **tan**              | _tan_                         | Tangent.                          | `tan(0.5)`             |
| **asin**             | _asin, arcsin_                | Inverse sine.                     | `asin(0.5)`            |
| **acos**             | _acos, arccos_                | Inverse cosine.                   | `acos(0.5)`            |
| **atan**             | _atan, arctan_                | Inverse tangent.                  | `atan(1)`              |
| **atan2**            | _atan2_                       | Angle from y,x coordinates.       | `atan2(1, 1)`          |
| **sinh**             | _sinh_                        | Hyperbolic sine.                  | `sinh(1)`              |
| **cosh**             | _cosh_                        | Hyperbolic cosine.                | `cosh(1)`              |
| **tanh**             | _tanh_                        | Hyperbolic tangent.               | `tanh(1)`              |
| **asech**            | _asech_                       | Inverse hyperbolic secant.        | `asech(0.5)`           |
| **acsch**            | _acsch_                       | Inverse hyperbolic cosecant.      | `acsch(2)`             |
| **acoth**            | _acoth_                       | Inverse hyperbolic cotangent.     | `acoth(2)`             |
| **gcd**              | _gcd, pgcd_                   | Greatest common divisor.          | `gcd(12, 18)`          |
| **lcm**              | _lcm, ppcm_                   | Least common multiple.            | `lcm(12, 18)`          |
| **factorial**        | _factorial, factorielle_      | Factorial.                        | `factorial(5)`         |
| **combinations**     | _combinations, combinaisons_  | Number of combinations.           | `combinations(5, 2)`   |
| **permutations**     | _permutations_                | Number of permutations.           | `permutations(5, 2)`   |
| **multinomial**      | _multinomial_                 | Multinomial coefficient.          | `multinomial(2, 3, 4)` |
| **random**           | _random, aleatoire_           | Random float.                     | `random()`             |
| **randomInt**        | _randomInt, aleatoire_entier_ | Random integer in range.          | `randomInt(1, 10)`     |
| **pickRandom**       | _pickRandom, choix_aleatoire_ | Picks random item(s).             | `pickRandom([1,2,3])`  |
| **complex**          | _complex, complexe_           | Creates a complex number.         | `complex(2, 3)`        |
| **re**               | _re_                          | Real part of complex number.      | `re(complex(2, 3))`    |
| **im**               | _im_                          | Imaginary part of complex number. | `im(complex(2, 3))`    |
| **conj**             | _conj, conjugue_              | Complex conjugate.                | `conj(complex(2, 3))`  |
| **arg**              | _arg_                         | Complex argument (angle).         | `arg(complex(1, 1))`   |

## Supported expression styles

- Infix operator style: `1 + 2 * 3`
- Prefix operator style: `(+ 1 2)` or nested `(* :x (+ :y 2))`
- Named prefix function style: `add(1, 2)`
