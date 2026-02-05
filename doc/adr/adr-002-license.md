# ADR 002. Choice of a license

Date: 2025-12-31

## 1. Status

Accepted

## 2. Context

GéoTortue-NG is intended to be freely usable and re-usable.

When you make a creative work (which includes code), the work is under exclusive copyright by default. Unless you include a license that specifies otherwise, nobody else can copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation. Once the work has other contributors (each a copyright holder), “nobody” starts including you. (see [No License](https://choosealicense.com/no-permission/))

GéoTortue-NG is an application, not a library. It's the continuation of GéoTortue "legacy" which has been developped within the [IREM Paris-Nord](http://www-irem.univ-paris13.fr/), an EPSCP (Établissement public à caractère scientifique, culturel et professionnel), i.e. a French National Public Institution.

Link to:

- GéoTortue "legacy" [license GPL3](https://github.com/geotortue/geotortue/blob/main/LICENSE)
- [Installation de GéoTortue - Licence d'utilisation](http://geotortue.free.fr/index.php?page=telechargement):
  _GéoTortue est un logiciel libre et gratuit, distribué en l'état selon les termes de la licence [GNU GPL](http://www.gnu.org/licenses/gpl.html)._

## 3. Decision

GPL3

Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. See [GPL3 License](https://choosealicense.com/licenses/gpl-3.0/).

## 4. Consequences

Add reference in package.json, README.md & CONTRIBUTING.md

Add file LICENSE at the root of the repository, with the full text

### 1.1 Next

Manage dependencies licenses.

## 5. Considered Alternatives

_For the record. Keep empty._

## 6. More reading

[History of the Open Source effort](http://web.archive.org/web/19981206185148/http://www.opensource.org/history.html), Eric S. Raymond, 1998/12/06

[Choose an open source license](https://choosealicense.com)
aims at helping you in choosing an open source license for your project

[TLDRLegal.com](https://tldrlegal.com/)
aims at explaining complicated legal details of software licenses in easy to understand english

[OSI - Licenses](https://opensource.org/licenses)
especially their [FAQ](https://opensource.org/faq).

[GNU/FSF - How to choose a license for your own work](https://www.gnu.org/licenses/license-recommendations.html)

[Which License Should I Use? MIT vs. Apache vs. GPL](https://exygy.com/blog/which-license-should-i-use-mit-vs-apache-vs-gpl/), 21 June 2016, Joseph Morris
Seems to be the first of a long series of similar articles.

[Writing open-source? Pick MPL 2.0](http://veldstra.org/2016/12/09/you-should-choose-mpl2-for-your-opensource-project.html), 2013/12/09, Hassy Veldstra

[Why I Use the MIT License](https://trickingrockstothink.com/blog_posts/2019/08/27/why_mit.html), 2019/08/27, Chris Gerth

[Why the GPL sucks](https://sealedabstract.com/rants/why-the-gpl-sucks/), 25 July 2009, Drew Crawford
