# Jay Grafwallner — Portfolio

Personal portfolio site for Jay Grafwallner, Senior Full Stack Software Engineer.

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**. Single page, no backend, dark theme with a green accent, fully responsive, and respects reduced-motion settings.

## Sections

- **Hero**: availability badge, headline, orbiting tech-logo visual, and a stats bar
- **Marquee**: scrolling rows of technologies
- **About**: summary plus a "Why work with me?" checklist
- **Expertise**: expandable list of six focus areas
- **Stack**: floating tech logos with mouse parallax, plus a full list of tools
- **Selected work**: case-study cards that stack as you scroll
- **Process**: four-step delivery approach
- **Experience**: roles at Verizon, DealerSocket, and Expedia Group, plus education
- **Under the hood**: animated terminal showing an illustrative release workflow
- **Interactive**: clickable RAG pipeline walkthrough
- **Contact**: message form (opens the visitor's email app), email with copy button, phone, résumé download, and FAQ

Tech logos in `src/assets/tech/` come from [Devicon](https://devicon.dev) (MIT).

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check and build to dist/
npm run preview   # serve the production build
```

## Editing content

All text lives in [`src/data/profile.ts`](src/data/profile.ts): contact details, summary, expertise, stack, case studies, process, roles, terminal lines, and FAQ. Components read from that file, so most updates don't need any component changes. Theme colors and fonts are in [`src/index.css`](src/index.css).

The downloadable résumé is [`public/resume.pdf`](public/resume.pdf). Replace that file to update it.

To add GitHub or LinkedIn links, add them to `profile` and render them in `Hero.tsx` and `Contact.tsx`.

## Deploying

### GitHub Pages

1. Push this folder to a GitHub repository on the `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

### Netlify, Vercel, or Azure Static Web Apps

- Build command: `npm run build`
- Output directory: `dist`

The Vite `base` is set to `./`, so the build works at a domain root or under a sub-path.

## Project structure

```
src/
  data/profile.ts        # all site content
  data/tech.ts           # tech logo imports and display names
  assets/tech/           # tech logo SVGs
  components/            # one component per section, plus shared Section/Reveal helpers
  hooks/                 # useActiveSection (nav highlighting), useInView (scroll reveals)
  index.css              # Tailwind import, theme tokens, animations, base styles
public/
  resume.pdf
  favicon.svg
```
