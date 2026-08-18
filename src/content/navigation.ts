/**
 * Landing page navigation.
 *
 * Kept in its own module rather than beside the header, because both the
 * client-side header and the server-rendered footer read it. Plain data
 * imported from a `'use client'` module reaches the server as a client
 * reference proxy, which cannot be iterated.
 */

export type NavItem = {
  /** Anchor target on the landing page, without the leading hash. */
  id: string
  label: string
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'ministries', label: 'Ministries' },
  { id: 'events', label: 'Events' },
  { id: 'announcements', label: 'Announcements' },
  { id: 'contact', label: 'Contact' },
]

/**
 * Where the "Plan Your Visit" call to action points — the contact section,
 * which carries the service times, address, and visit-planning actions.
 */
export const VISIT_ANCHOR = '#contact'
