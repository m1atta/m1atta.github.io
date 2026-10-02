# m1atta.github.io

Personal portfolio site for Muhammad Rayan Atta — built with React, TypeScript, and Vite, styled with Tailwind CSS, and deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs a static site to `dist/`. `npm run preview` serves that build locally so you can sanity-check it before pushing.

## Project structure

```
src/
  data/            <- EDIT THESE to update content
    site.ts        name, tagline, bio, contact links, resume path
    projects.ts     all project cards + detail content
    experience.ts    work/leadership experience timeline
    skills.ts        skills grouped by category
  components/       UI components (you shouldn't need to touch these
                     often — see "Maintenance guide" below)
public/
  resume/
    hardware-resume.pdf   <- the PDF served by the Resume button
  favicon.svg
.github/workflows/deploy.yml   <- GitHub Actions deploy config
```

See the full maintenance guide in the chat reply this project was delivered with for step-by-step instructions on adding projects, swapping the resume, and deploying updates.
