# Jay Grafwallner — Portfolio

Personal portfolio site for Jay Grafwallner, Senior Full Stack Software Engineer.

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**. Single page, no backend, light and dark themes, fully responsive.

## Sections

- **Hero**: name, title, availability, résumé download, and quick stats
- **About**: summary, working principles, and education
- **Skills**: core stack plus the seven skill groups from the résumé
- **Experience**: timeline of roles at Verizon, DealerSocket, and Expedia Group
- **Selected work**: case studies, including an interactive RAG pipeline diagram
- **Contact**: email (with copy-to-clipboard), phone, location, and résumé

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check and build to dist/
npm run preview   # serve the production build
```

## Editing content

All text lives in [`src/data/profile.ts`](src/data/profile.ts): contact details, summary, skills, roles, and case studies. Components read from that file, so most updates don't need any component changes.

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
  components/            # Nav, Hero, About, Skills, Experience, Projects, RagPipeline, Contact, Footer
  hooks/                 # useTheme (light/dark), useActiveSection (nav highlighting)
  index.css              # Tailwind import, theme tokens, base styles
public/
  resume.pdf
  favicon.svg
```
