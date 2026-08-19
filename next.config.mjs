/**
 * Baseline security headers. A full Content-Security-Policy is not set here:
 * Next.js inlines its own bootstrap scripts, so a policy strict enough to be
 * worth having needs per-request nonces via middleware — tracked as follow-up
 * work rather than shipping a policy loose enough to be decorative.
 */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  // All images are local static imports, so the built-in optimizer can resize
  // them per breakpoint and serve WebP. No remote patterns are configured:
  // arbitrary external image URLs are deliberately not optimizable.
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
