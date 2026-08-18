import type { StaticImageData } from 'next/image'

import divineEncounter from '../divine-encounter.png'
import ourCommunity from '../our-community.png'

/**
 * Photography slots for the public landing page.
 *
 * A slot with `src: null` has no photograph yet, and the page renders a branded
 * placeholder in its place. See README.md in this folder for how to fill one.
 *
 * When adding a photo:
 *   import visit from './visit.jpg'
 *   ...
 *   visit: { src: visit, alt: 'The entrance on a Sunday morning' }
 */

export type Photo = {
  /** `null` until the church supplies the file. */
  src: StaticImageData | null
  /** Describes the photograph for screen readers. Required either way. */
  alt: string
  /** Shown inside the placeholder tile so editors know what belongs here. */
  placeholderLabel: string
}

export type PhotoSlot = 'welcome' | 'featuredEvent' | 'visit'

export const photos: Record<PhotoSlot, Photo> = {
  welcome: {
    src: ourCommunity,
    alt: 'Members of Kairos for Christ gathered together as a community',
    placeholderLabel: 'Our community',
  },
  featuredEvent: {
    src: divineEncounter,
    alt: 'A Divine Encounter with God gathering at Kairos for Christ',
    placeholderLabel: 'Divine Encounter with God',
  },
  visit: {
    src: null,
    alt: 'The entrance to Kairos for Christ Christian Fellowship at Sta. Lucia Townsquare',
    placeholderLabel: 'Where we meet',
  },
}
