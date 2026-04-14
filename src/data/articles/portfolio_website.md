<centeredimage src="/projects/images/thumbnail_PortfolioWebsite.webp" alt="Portfolio Home Page"></centeredimage>

# Table of Contents
* [Introduction](#introduction)
* [Features & Technical Highlights](#features--technical-highlights)
* [Resources](#resources)

---

# Introduction

This **Portfolio Website** is a custom-built single-page application designed to serve as both a **central hub for my work** and a live **technical demonstration** of my frontend capabilities.

Rather than relying on a template or simple WordPress website, I built this from the ground up using **React** and **TypeScript** for 
type-safe architecture. The UI is styled completely with **Tailwind CSS**, utilizing **Framer Motion** for fluid, interactive animations. 
Finally, for easy maintenance of my project devlogs, I integrated **React Markdown** to dynamically render content like this very page!

# Features & Technical Highlights

Since this is a static application that required no backend or database design, I wanted to invest more effort into building a 
**smooth, unique design**. After some research, the **Bento Box UI** style caught my eye for its sleek, modern look.

Building this complex UI and making it responsive requires more than just standard flexbox layouts. Here are some of the technical features and challenges I tackled during development:

### 1. Responsive Bento Grid
The core layout of the page uses a complex **CSS Grid** architecture to create the Bento Box style UI.
* **The Challenge:** Bento grids are difficult to make responsive because elements must dynamically span different rows and columns depending on the screen size, without stretching the content inside.
* **The Solution:** I utilized Tailwind's prefixes for responsive design (e.g. `lg:col-span-2`, `xl:row-span-3`), combined with `auto-rows-min`, to ensure the grid snaps into place perfectly like a puzzle on large desktop monitors, while collapsing into a clean, single-column vertical stack on mobile devices.

### 2. Dynamic Markdown Rendering
I wanted maintaining my project devlogs to be as simple as writing a text file, without having to touch the React codebase or build a backend database.
* **The Solution:** I built a dynamic routing system using `react-router-dom`. When a user clicks a project, the app finds the corresponding local `.md` file and parses it using `react-markdown`. To work around native Markdown limitations, I used plugins such as `rehype-raw` & `remark-gfm` alongside custom React components to handle specific tags. This allows me to, for example, easily embed videos directly into my devlogs.

### 3. Custom Carousel & CSS Masking
To display my "Currently Working On" projects, I built a custom horizontal scrolling carousel with CSS scroll-snapping.
* **The Polish:** To prevent the project cards from abruptly cutting off at the edges of the container, I used Tailwind's **CSS Masking** utilities (`mask-x-from-95% mask-x-to-100%`). This creates a *fade-out* effect on the left and right edges, allowing the project cards to cleanly fade into the background as you scroll.

### 4. Fluid Animations
I used **Framer Motion** to implement fluid animations for my elements (like the *"entrance animations"* for Bento cards), giving the application a tactile, "premium" feel.

Furthermore, on mobile devices, I used it to **dynamically show & hide the Hamburger Menu button** based on whether you're scrolling up or down.

# Resources

For those interested in how this application was built, the **full source code** is available on my GitHub.

<resourceitem icon="github" href="https://github.com/dsnjg03">portfolio-website</resourceitem>