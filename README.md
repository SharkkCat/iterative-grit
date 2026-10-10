# iterative-grit.com

Personal portfolio for an Industrial & Systems Engineering student. Built with [Astro](https://astro.build), deployed to GitHub Pages on every push to `main`.

> **Every attempt is a data point.** Projects are "runs", each case study shows its iterations (v1 → v2 → v3), and skills link to the projects that prove them.

## Editing the site

**Almost everything you'll change is in one file: [`src/data/site.ts`](src/data/site.ts).**

- Replace anything in `[BRACKETS]` with your own details.
- **Add a project:** copy one object in `projects`, give it a new `slug` and `number`. It automatically gets:
  - a page at `/runs/<slug>`
  - a point on the homepage run-history chart
  - a card on the homepage if `featured: true` (otherwise a one-line link)
- **Add an experience:** copy an entry in `experience`. Set `run: '<slug>'` to link it to a project.
- **Skills:** `level` is 1–5; `used` lists the project slugs where you used it.
- **Résumé:** drop `resume.pdf` into `public/` and set `links.resume` to `'/resume.pdf'`.
- **Project images:** put them in `public/images/` and set `figure.src` to `'/images/your-file.png'` (plus `alt` text).
- **Accent colour:** change `--accent` in [`src/styles/global.css`](src/styles/global.css). Every highlight follows it.

Push to `main` and the site redeploys in about a minute (watch the **Actions** tab).

## Running it locally (optional)

Needs [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install
npm run dev      # http://localhost:4321, live-reloads as you edit
npm run build    # production build into dist/
```

## Project structure

```
src/
  data/site.ts           ← your content
  pages/index.astro      ← homepage
  pages/runs/[slug].astro← case-study template (one page per project)
  components/            ← nav, footer, run-history chart
  styles/global.css      ← colours, fonts, shared styles
public/                  ← files served as-is (favicon, résumé, images)
.github/workflows/       ← GitHub Pages deploy
```

## Hosting and the domain

The site is hosted on **GitHub Pages**; the domain is registered at **GoDaddy**.

### First-time setup

1. In this repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or run the workflow from the **Actions** tab). The site appears at `https://<username>.github.io/iterative-grit/`.

### Connecting iterative-grit.com

Do the GitHub side first, so nobody else can claim the domain in between.

1. **GitHub → your profile Settings → Pages → Add a domain** → `iterative-grit.com`. Add the TXT record it gives you in GoDaddy and click Verify.
2. **This repo → Settings → Pages → Custom domain** → `iterative-grit.com` → Save.
3. **GoDaddy → My Products → iterative-grit.com → DNS**:
   - Delete the default "Parked" A record for `@`.
   - Add four **A** records, name `@`:
     `185.199.108.153` · `185.199.109.153` · `185.199.110.153` · `185.199.111.153`
   - Set the **CNAME** for `www` to `<username>.github.io` (no repo name).
   - Don't add wildcard (`*`) records.
4. Re-run the deploy workflow (Actions → Deploy to GitHub Pages → Run workflow) so links switch from `/iterative-grit/` to `/`.
5. After DNS updates (minutes to 24 hours), tick **Enforce HTTPS** in Settings → Pages.

Reference: [GitHub Docs — Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

### Want the repo private?

Free GitHub Pages needs a public repo. To go private for free, move hosting to Vercel. See **[MOVING-TO-VERCEL.md](MOVING-TO-VERCEL.md)**.

## Keeping it public safely

- Never commit passwords, API keys, a phone number or home address. Git history keeps old versions even after you delete something.
- Hide your email in commits: GitHub **Settings → Emails → Keep my email addresses private**.
