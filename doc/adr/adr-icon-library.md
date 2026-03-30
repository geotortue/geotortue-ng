# ADR [Number]: [Decision Summary - e.g., Adopt OAuth 2.0 for User Authentication]

## 1. Status

Status: **Proposed**

Date: 2026-03-28

## 2. Context

Currently, GéoTortue NG incorporates icons from several sources:

- Fortawesome,
- Google Material,
- The Polymer Project,
- Dazzle UI,
- Jackhenry Design,

resulting in somewhat heterogeneous styles.

GéoTortue Legacy uses the Tango icon project library.
The library is no longer maintained since 2009.
Even if the [Tango icon project website](https://tango.freedesktop.org/Tango_Icon_Library) is no longer accessible, the library itself remains available for download either from [Tango icon theme - Archive file](http://tango.freedesktop.org/releases/tango-icon-theme-0.8.90.tar.gz) itself or from a clone repository as [nigeltao/tango-icon-library-pngs](https://github.com/nigeltao/tango-icon-library-pngs) (SVG & PNG files). With a public domain license.
A presentation page is provided by [Wikimedia Commons - Tango icons](https://commons.wikimedia.org/wiki/Tango_icons).

It therefore seems wise to replace all of this with icons:

- whose rendering remains in the same spirit,
- whose maintenance is active,
- from a limited number of sources in order to ensure greater stylistic consistency,
- with a license compatible with the GPL3 licence.

The expected styles would:

- have a design to make interfaces feel welcoming and intuitive,
- prioritize **multi-color design, depth, and clear, real-world metaphors (skeuomorphism)**.

Young kids need "safe" buttons, i.e. that look like an actual object they can press, not just a minimalist wireframe outline.

For children, emojis are the modern equivalent of Tango's skeuomorphic icons. They are universally understood, colorful, and fun.

## 3. Decision

GéoTortue NG will primarily use the `Elementary OS Icon Set`, which will eventually be supplemented with icons from:

- Microsoft Fluent Emoji
- 3dicons.co

### Elementary OS Icon Set

The original Elementary icons were heavily influenced by the Tango color palette and its rules for lighting and perspective.
The current Elementary OS icon set has kept (°) a lot of its classic, semi-skeuomorphic roots. It features depth, gradients, drop shadows, and a playful, colorful aesthetic.

- **The Vibe:** This is arguably the most beautiful open-source skeuomorphic library available today.
  It strictly adheres to the "Tango Trick" of using 2D linear and radial gradients to create bright, colorful, and highly tactile objects.
- **Why it fits kids' software:** The icons are friendly, hyper-readable, and highly illustrative without being overly complex.
- **Format:** GPL-3, SVG.
- **Where to find it:** [Elementary OS - Icons](https://github.com/elementary/icons)

> (°) Unlike, for example, `Gnome icon theme` or [Adwaita icon theme](https://github.com/GNOME/adwaita-icon-theme), other heirs of the Tango project.

### Microsoft Fluent Emoji

Microsoft open-sourced their Fluent emoji library, which includes beautifully detailed, colorful 3D and flat SVGs.

- **The Vibe:** If Tango was made of shiny, hard plastic, Fluent Emoji is made of soft, vibrant digital clay. The 3D versions utilize a design trend called "claymorphism." They feature soft, pillowy lighting, bright pastel-leaning gradients, and exaggerated, friendly proportions. The flat versions share the same playful silhouettes but strip away the lighting for a clean, modern vector look.
- **Why it fits kids' software:** Emojis are the native visual language of modern children, making the metaphors instantly recognizable. The 3D assets, in particular, feel like tangible, squeezable toys. When a child sees a 3D Fluent star or a treasure coin, it carries a sense of physical reward and weight that a flat wireframe icon simply cannot match. They are incredibly expressive, which is perfect for social-emotional learning modules or character avatars.
- **Format:** MIT. It is a hybrid library, i.e.:
  - Flat Style: Provided as pure, open-source SVGs.
  - 3D Style: Provided as high-resolution PNGs.
- **Where to find it:** Github repository [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji).
  The repository is neatly categorized by emoji name, with subfolders for the 3D, Color (flat), and High Contrast versions of each asset, providing raw SVG and PNG files for developers.
  The whole library can be browsed by category on [fluentemoji.com](https://fluentemoji.com/).

### 3dicons

Only 122 icons and only PNG but nice ones.

- **The Vibe:** Playful, tactile, and highly approachable. The icons look like high-quality, matte-plastic or clay toys resting on the screen. They have a soft, friendly geometry with rich, warm bounce-lighting that screams "touch me."
- **Why it fits kids' software:** The skeuomorphic depth and realistic volume provide the exact physical metaphors young users need to understand interactivity.
- **Format:** CC0 (Public Domain), PNG only
- **Where to find it:** [3dicons - v1 Collection](https://3dicons.co/)

## 4. Consequences

GéoTortue NG is build with **Lit** framework, i.e. Web Components. Those components natively encapsulate their styles and markup within the Shadow DOM, which is perfect for isolating these complex, multi-color SVG assets from the rest of your application's CSS. But shadow DOM boundaries can complicate how SVGs reference external IDs: since styles inside a Lit component are scoped, the component won't automatically "see" the icon font unless explicitly link it or include the styles.

Moreover, skeuomorphic icons can lead to complex SVG files.

Particular attention should be paid to these two points.

## 5. Considered Alternatives

### Colorful & Illustrative Alternatives

I.e. children friendly libraries

#### Papirus Icon Theme

Papirus is the modern bridge between Tango's playful realism and today's flatter design trends.
Would constitute the main alternative from a flat design perspective.

- **The Vibe:** It uses bright, saturated colors and relies on subtle shadows and "folded paper" effects to create depth, rather than the heavy glass reflections of Tango or Oxygen.
- **Why it fits kids' software:** It feels like a high-quality popup book. It is incredibly colorful, highly legible, and lacks the sterile feeling of corporate wireframe icons.
  As it contains an icon for almost every concept imaginable, it's easy to find consistent, glossy illustrations for school subjects.
- **Why it doesn't fit this project:** Too close to a flat design.
- **Format:** GPL-3, SVG.
- **Where to find it:** [Papirus Icon Theme](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme)

#### Oxygen Icons (KDE)

To talk about Tango is to talk about Oxygen. In the open-source world of the 2000s, the Tango project and the Oxygen project were parallel efforts.

- **The Vibe:** A detailed SVG skeuomorphism. The icons are highly "glassy," shiny, and detailed.
- **Why it fits kids' software:** While some of the developer-focused icons are a bit complex, the generic UI elements, animals, and objects look exactly like physical toys.
- **Why it doesn't fit this project:** Drawn strictly straight-on (orthographic), when Tango is mainly drawn at a slight angle (isometric or forced perspective) then it loses the chunky, tangible feeling.
- **Format:** LGPL-2.1, PNG, SVG.
- **Where to find it:** [Oxigen Icons](https://invent.kde.org/frameworks/oxygen-icons)
  The whole library can be browsed on [Flaticons - Oxygen Icons](https://www.flaticon.com/free-icons/oxygen)

#### Icons8

Icons8 is a massive commercial library, but they categorize their icons by distinct artistic styles.
A part of it is available as a free tier for web projects, see details below.
The [Universal Multimedia License Agreement for Icons8](https://intercom.help/icons8-7fb7577e8170/en/articles/5534926-universal-multimedia-license-agreement-for-icons8)
is compatible with a GPL3 project only at the cost of a major contortion, which copyright law calls "simple aggregation":
the main source code is under GPLv3, but either in the project LICENSE or README file must be stated that the visual assets (the icons) are exempt from the GPL and are bound by the `Icons8 Universal Multimedia License Agreement`.

- **The Vibe:** They have a dedicated style literally called **"Skeuomorphism"** designed specifically to bring the mid-2000s Frutiger Aero/Tango aesthetic back to the modern web. They also have a **"Color"** style that is slightly flatter but incredibly vibrant.
- **Why it fits kids' software:** Because it contains an icon for almost every concept imaginable, it's easy to find consistent, glossy illustrations for school subjects (math, science, art) and game UI (coins, trophies, health bars).
- **Why it doesn't fit this project:** See License.
- **Format:** Available as both PNG and highly optimized SVGs.
- **License Type:** Free with attribution (requires linking back to them), or you can purchase a commercial subscription to use them without attribution and get the raw source files.
  Cf. [Universal Multimedia License Agreement for Icons8](https://intercom.help/icons8-7fb7577e8170/en/articles/5534926-universal-multimedia-license-agreement-for-icons8)
  See Open source use below.
- **Where to find it:**
  - [Icons8 - Skeuomorphism icons](https://icons8.com/icons/skeuomorphism)
    Colorful Skeuomorphism style based on simple geometric shapes. Realistic effect at the shapes gives Skeuomorphism icons a stylish appearance.
    The combination of geometric precision and playful colors makes this style suitable for various uses, from business apps to gaming and bright interfaces.
  - [Icons8 Icons - Color icons](https://icons8.com/icons/color)
    Flat colorful style with simple shapes and a vibrant color palette. Works well in almost any environment.
  - [Icons8 Icons - 3D Fluency icons](https://icons8.com/icons/3d-fluency)
    Vibrant 3D icons mimicking objects made from smooth, colorful, matte plastic.

Contact 03/28/2026
Thank you for contacting us! You can use our graphics in your open-source project. We offer a free 3-month license, including 100 download credits per month to access the icons you need.

In return, we ask that you include a link to our website on your GitHub page or website.

Please note that our icons cannot be redistributed or resold. We also ask that you include a notice informing your users that the extraction or reuse of our graphic resources is strictly prohibited. If your users wish to use the icons for their own projects, they are welcome to contact us directly so we can guide them regarding the appropriate license.

If you wish to use our icons, you must create an account so we can activate your subscription. Alternatively, you can use the free option. This allows you to download icons in PNG format up to 100 x 100 pixels.

### Minimalist UI Alternatives

I.e. corporate dashboard libraries

#### Phosphor Icons

- **Why it doesn't fit kids' software:**
  - Minimalist & Flat: Phosphor is inherently a 2D line-art library. Even with the "Fill" or "Duotone" variations, the icons remain entirely flat with zero depth, highlights, or shadows.
  - Not Skeuomorphic: These are abstract digital symbols rather than literal physical objects. A child will recognize them as digital UI elements, not as tactile, pressable toys.
  - Limited Color: While you can easily color them with CSS (or use the two-color Duotone weight), they lack the rich, multi-colored gradients and shading that give 3D icons their physical presence.
- **License Type:** MIT License.
- **Where to find it:** [Phosphor Icons](https://github.com/phosphor-icons/homepage)

#### OpenMoji

- **The Vibe:** It's an open-source library that provides a consistent, hand-drawn look across thousands of icons.
- **Why it doesn't fit kids' software:**
  - Zero Depth: OpenMoji's design language is strictly 2D and flat. There are no shadows, no highlights, and no volume.
  - Wireframe-Heavy: Its defining characteristic is the use of thick, uniform black outlines around basic flat colors.
  - Not Tactile: Because of the flat coloring and heavy outlines, the icons look like digital coloring book illustrations rather than physical, tangible objects. A child will not look at an OpenMoji icon and intuitively feel like it's a physical button they can press.
- **License Type:** CC BY-SA 4.0 (Free to use, but requires attribution and requires any derivative works to be shared under the same license).
- **Where to find it:** [OpenMoji](https://openmoji.org)

For children, emojis are the modern equivalent of Tango's skeuomorphic icons. They are universally understood, colorful, and fun. OpenMoji is an open-source library that provides a consistent, hand-drawn look across thousands of icons.

#### Lucide

- **The Vibe:** As a community-maintained fork of Feather Icons, it is technically exceptional:
  - **Lightweight:** The SVGs are incredibly optimized, meaning zero bloat in your bundle size.
  - **Customization:** You can easily pass props to change the `size`, `color`, and `strokeWidth` on the fly.
- **Why it doesn't fit kids' software:**
  - Minimalist Wireframe: Lucide is built strictly on thin, uniform 2D strokes. It is the exact definition of a wireframe outline.
  - No Depth or Multi-color: The icons are inherently flat, monochromatic paths with zero shading, gradients, or 3D volume.
  - Not Skeuomorphic: A child will see a sleek, abstract line-drawing of a house, not a tangible, pressable "home" button that resembles a plastic toy or physical object.
- **License Type:** ISC License (Functionally equivalent to MIT; completely free for commercial and personal use with no attribution required in the UI).
- **Where to find it:** [Lucide](lucide.dev)
