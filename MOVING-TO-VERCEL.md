# Moving hosting to Vercel and making the repo private

GitHub Pages only serves public repos on a free account. Vercel's free **Hobby** plan deploys from private repos, so this is the free way to make the code private. Nothing in the site's code needs to change.

Takes about 20 minutes, plus waiting for DNS. The order below keeps the site online the whole time.

## 1. Deploy on Vercel

1. Sign up at [vercel.com](https://vercel.com) with **Continue with GitHub**.
2. **Add New → Project →** import `iterative-grit`. If it isn't listed, use **Adjust GitHub App Permissions** to give Vercel access to the repo.
3. Vercel detects **Astro** automatically. Leave the build settings as they are and click **Deploy**.
4. Open the `*.vercel.app` link it gives you and check the site looks right.

## 2. Point the domain at Vercel

1. In the Vercel project: **Settings → Domains → Add** → `iterative-grit.com`. Choose to redirect `www.iterative-grit.com` to it when asked.
2. Vercel shows the exact DNS records it wants. Copy them from Vercel's screen; don't rely on old values from the internet.
3. **GoDaddy → My Products → iterative-grit.com → DNS**:
   - **Delete** the four GitHub A records (`185.199.108–111.153`).
   - **Add** the A record Vercel shows for `@`.
   - **Change** the `www` CNAME to the value Vercel shows.
4. Wait until Vercel's Domains page shows both domains as **Valid**. It issues the HTTPS certificate by itself.

## 3. Turn off GitHub Pages

Only after the domain shows Valid on Vercel:

1. Repo **Settings → Pages**: remove the custom domain, then set **Source** to **None** (or unpublish the site).
2. Delete `.github/workflows/deploy.yml`. Vercel builds on every push now, so the old workflow isn't needed.
3. Optional: in your profile **Settings → Pages → Verified domains**, you can keep `iterative-grit.com` verified. It stops anyone else using it on GitHub Pages, and does no harm.

## 4. Make the repo private

Repo **Settings → General → Danger Zone → Change repository visibility → Make private.**

Vercel keeps deploying after the change, as long as its GitHub app still has access to the repo.

## Afterwards

- Push to `main` → Vercel deploys production in about a minute.
- Push to any other branch, or open a pull request → Vercel gives that change its own **preview link**. Handy for trying a redesign before it goes live.

## Going back to GitHub Pages

Make the repo public, restore `.github/workflows/deploy.yml` from git history, and follow "Connecting iterative-grit.com" in the [README](README.md).
