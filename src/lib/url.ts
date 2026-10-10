// Prefixes internal links with the site's base path, so links work both at
// <user>.github.io/iterative-grit (preview) and at iterative-grit.com.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;
