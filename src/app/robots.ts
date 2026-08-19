import type { MetadataRoute } from 'next'
import { siteUrl } from '@/content/site'

/**
 * Only the public landing page is for crawlers. The admin dashboard, the
 * authentication flows and the API are private surfaces; each of those also
 * carries a noindex robots meta tag, since a disallow alone does not remove
 * an already-discovered URL from results.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/auth/', '/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
