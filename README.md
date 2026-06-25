# QR Brand Generator

Branded QR code generator built with React and Vite. The app supports custom colors, embedded logos, SVG and PNG export, draggable placement, share links, and local design persistence.

## Local development

```bash
npm install
npm run dev
```

## InfinityFree deployment

This project also works as a static site on InfinityFree.

1. Build the app locally:

```bash
npm install
npm run build
```

2. In InfinityFree, open your domain's `htdocs` folder.

3. Upload the contents of `dist` into `htdocs`.

Do not upload the `dist` folder itself. Upload `index.html` and the `assets` folder so they sit directly inside `htdocs`.

When you build locally, the app uses `/` as its base path, which is correct for InfinityFree. When GitHub Actions builds it, the app automatically switches back to the `/nxtgenqr/` base path for GitHub Pages.

## GitHub Pages deployment

This project is configured for GitHub Pages at:

`https://Arunchandran-Lead-Dev.github.io/nxtgenqr/`

Deployment is handled by `.github/workflows/deploy-pages.yml`.

Push this project to the public repository `nxtgenqr` under the GitHub account `Arunchandran-Lead-Dev`, then run:

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Arunchandran-Lead-Dev/nxtgenqr.git
git push -u origin main
```

Then open the repository on GitHub and set:

1. `Settings`
2. `Pages`
3. `Source` = `GitHub Actions`

After the `Deploy to GitHub Pages` workflow completes, the site will be public at the URL above.
