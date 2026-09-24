# Tarun Sivagnanam — Portfolio

A dark, glassmorphism-styled portfolio built with **React + Vite + MUI + Framer Motion**.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Editing content

All the text — name, stats, skills, timeline, and project case studies — lives in one place:

```
src/data/portfolioData.js
```

Edit that file and the whole site updates. No need to touch any component.

## Deploying for free (Vercel — recommended)

Vercel auto-builds and redeploys on every push to your GitHub repo, for free, with zero config for a Vite app.

1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, select your repo.
4. Vercel auto-detects Vite — leave the defaults (Build Command: `vite build`, Output Directory: `dist`) and click **Deploy**.
5. You'll get a free `your-project.vercel.app` URL. Every future `git push` to `main` redeploys automatically.
6. Optional: add a custom domain for free under Project → Settings → Domains (you'd still need to own/buy the domain itself).

### Alternative: GitHub Pages

If you'd rather use GitHub Pages instead, you'll need to:
- Set `base: "/<repo-name>/"` in `vite.config.js`.
- Add a GitHub Actions workflow to build and publish the `dist` folder to the `gh-pages` branch.
Ask me if you'd like this set up instead — it takes a few extra steps compared to Vercel.

### Alternative: Netlify

Same flow as Vercel — connect the GitHub repo at [netlify.com](https://netlify.com), build command `vite build`, publish directory `dist`.

## Tech stack

- React 18 + Vite
- MUI (Material UI) v6
- Framer Motion for animation
- Google Fonts: Space Grotesk (headings) + Inter (body)
