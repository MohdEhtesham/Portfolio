# Mohd Ehtesham — Portfolio

Live: https://mohdehtesham.github.io/Portfolio/

React + Vite + Tailwind, with a react-three-fiber background. Hosted on GitHub Pages (`gh-pages` branch).

## Updating content

All text lives in [`src/data/portfolioData.js`](src/data/portfolioData.js) — profile, skills, experience, projects, education.
Years of experience are calculated automatically from Sep 2022 in [`src/utils/experience.js`](src/utils/experience.js).

To replace the resume, overwrite `public/Mohd_Ehtesham_Resume.pdf` (keep the same file name).

## Commands

```bash
npm install       # once
npm run dev       # local dev server
npm run build     # production build (also writes dist/404.html so deep links work on GitHub Pages)
npm run deploy    # build + publish to the gh-pages branch
```
