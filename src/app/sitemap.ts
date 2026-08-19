import type { MetadataRoute } from 'next'
import { siteUrl } from '@/content/site'

/**
 * The site is a single public page, so the sitemap is a single canonical URL.
 * Add entries here when new indexable public routes ship — never the admin,
 * auth or API routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
