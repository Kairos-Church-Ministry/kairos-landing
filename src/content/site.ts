/**
 * Canonical origin for every absolute URL the site emits — canonicals,
 * Open Graph tags, robots.txt and the sitemap all derive from this one value.
 *
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment to override it.
 * A production build without the variable assumes the live domain, so a
 * forgotten environment variable can never publish localhost canonicals;
 * development falls back to localhost.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === 'production'
    ? 'https://kairoschurchministry.com'
    : 'http://localhost:3000')
