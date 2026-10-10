// @ts-check
import { defineConfig } from 'astro/config';

// BASE_PATH is set by the deploy workflow.
// - Before the custom domain is connected, the site lives at <user>.github.io/iterative-grit, so base = "/iterative-grit".
// - Once iterative-grit.com is set in Settings → Pages, base becomes "/" automatically.
const base = process.env.BASE_PATH && process.env.BASE_PATH !== '' ? process.env.BASE_PATH : '/';

export default defineConfig({
  site: 'https://iterative-grit.com',
  base,
});
