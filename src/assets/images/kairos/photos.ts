import type { StaticImageData } from 'next/image'

/**
 * Photography slots for the public landing page.
 *
 * The repository ships without photographs of the church, so every slot starts
 * with `src: null` and the page renders a branded placeholder in its place.
 * See README.md in this folder for how to fill a slot.
 *
 * When adding a photo:
 *   import hero from './hero.jpg'
 *   ...
 *   hero: { src: hero, alt: 'The congregation singing during Sunday worship' }
 */

export type Photo = {
  /** `null` until the church supplies the file. */
  src: StaticImageData | null
  /** Describes the photograph for screen readers. Required either way. */
  alt: string
  /** Shown inside the placeholder tile so editors know what belongs here. */
  placeholderLabel: string
}

export type PhotoSlot = 'hero' | 'welcome' | 'featuredEvent' | 'visit'

export const photos: Record<PhotoSlot, Photo> = {
  hero: {
    src: null,
    alt: 'The Kairos for Christ congregation gathered in worship',
    placeholderLabel: 'Congregation in worship',
  },
  welcome: {
    src: null,
    alt: 'Members of Kairos for Christ greeting one another after a service',
    placeholderLabel: 'Our community',
  },
  featuredEvent: {
    src: null,
    alt: 'A Divine Encounter with God gathering at Kairos for Christ',
    placeholderLabel: 'Divine Encounter with God',
  },
  visit: {
    src: null,
    alt: 'The entrance to Kairos for Christ Christian Fellowship at Sta. Lucia Townsquare',
    placeholderLabel: 'Where we meet',
  },
}
