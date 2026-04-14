# Domagoj's Developer Portfolio

> A custom built, responsive single-page application serving as my personal developer portfolio and devlog hub.

**Live Demo:** [domagoj-dev.vercel.app](https://domagoj-dev.vercel.app/)

---

## Tech Stack
* **Framework:** React + Typescript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Content Parsing:** React-Markdown (with `remark-gfm` & `rehype-raw` plugins for custom component overrides)
* **Routing:** React Router DOM
* **Hosting:** Vercel

## Key Features:
* **Responsive Bento Box UI:** A complex CSS Grid architecture that perfectly snaps into place on desktop monitors while collapsing into a clean, readable vertical stack on mobile devices.
* **Dynamic Markdown Blogs:** Project devlogs are written entirely in `.md` files and parsed dynamically on the frontend. Includes custom React component overrides to implement embed videos, styled code blocks, and optimized image wrappers directly from Markdown.
* **Fluid Interactions:** Heavily utilizes Framer Motion for fluid entrance animations, hover states, and dynamic scroll-based UI elements (like the mobile hamburger menu).

More details & technical insights are available on the [Portfolio Website devlog](https://domagoj-dev.vercel.app/projects/portfolio_website)!

## Running Locally:

If you want to clone this repository and run it locally:

1. Clone the repo:
```bash
git clone https://github.com/dsnjg03/portfolio-website.git
```

2. Navigate into the directory:
```bash
cd portfolio-website
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```
npm run dev
```

---
*Designed and built by Domagoj*