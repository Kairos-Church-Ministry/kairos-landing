import type { IconType } from 'react-icons'
import {
  LuBookOpen,
  LuBaby,
  LuHeartHandshake,
  LuHeart,
  LuMusic,
  LuMegaphone,
  LuUsers,
} from 'react-icons/lu'

/**
 * Kairos for Christ Christian Fellowship — site content.
 *
 * This module is the single source of truth for every piece of copy on the
 * public landing page. There is no CMS in this project, so editors change the
 * site by editing the typed objects below. Keep it free of markup and layout
 * decisions: components own presentation, this file owns facts.
 *
 * Everything here is transcribed from the church's own printed material.
 * Do not add schedules, addresses, statistics or contact details that have not
 * been confirmed by the church.
 */

export type ServiceTime = {
  /** Day the gathering happens, e.g. "Sunday". */
  day: string
  /** What the gathering is called. */
  name: string
  /** Start time as printed by the church, e.g. "9:30 AM". */
  time: string
  /** Same time in 24-hour form, for schema.org opening hours. */
  time24: string
}

export type MissionPillar = {
  /** The verb: Reach, Establish, Disciple. */
  verb: string
  /** Who it is directed at, e.g. "the lost". */
  object: string
  /** One sentence expanding the pillar, drawn from the vision statement. */
  description: string
}

export type Ministry = {
  slug: string
  name: string
  description: string
  icon: IconType
}

export type LifeGroup = {
  slug: string
  name: string
  description: string
}

export type ChurchEvent = {
  slug: string
  name: string
  /** Short description; omit when the church has not published one. */
  description?: string
  /** Free-form cadence as the church describes it, e.g. "Quarterly". */
  cadence?: string
  /** Sub-locations, used by the prison outreach entry. */
  locations?: string[]
  /** Marks the single event given hero treatment on the landing page. */
  featured?: boolean
}

export type Announcement = {
  slug: string
  title: string
  category: string
  body: string
}

export const church = {
  name: 'Kairos for Christ Christian Fellowship',
  shortName: 'Kairos for Christ',
  tagline: 'Passion for God, compassion for people',
  handwrittenAccent: "There's a place for you here.",
  invitation: 'Come, connect, belong, and grow with us.',
  welcomeNote:
    'Welcome to Kairos for Christ Christian Fellowship. We are excited to have you here. Our community warmly welcomes everyone, and we encourage you to connect with us. We hope you find peace, inspiration, and a sense of belonging.',
  welcomeSignatory: {
    name: 'Bp. Jose Sheldon M. Fabra',
    role: 'Bishop',
  },
  vision:
    'Kairos for Christ Christian Fellowship was established and exists to glorify God by becoming His instrument in reaching people with the Gospel of Jesus Christ, leading those who believe into a public life of faith and obedience through baptism, and cultivating them through intentional and relational discipleship until they become spiritually mature, obedient, and fishers of men.',
  location: {
    venue: 'Sta. Lucia Townsquare',
    street: 'Poblacion Oriental',
    city: 'Consolacion',
    region: 'Cebu',
    country: 'Philippines',
  },
  contact: {
    phone: '+63916-4364262',
    /** E.164 form, for tel: links. */
    phoneHref: '+639164364262',
  },
  social: {
    facebook: 'https://www.facebook.com/kairosforchristconsolacion',
  },
  /**
   * Kairos Connect, the members' app. It lives on its own origin, which owns
   * installation, offline behaviour and notifications — a page on this origin
   * cannot install a PWA for another, so the public site only links across.
   * Set to `null` until the app is live and the footer link disappears.
   */
  memberApp: {
    name: 'Kairos Connect',
    url: 'https://app.kairoschurchministry.com',
  } as { name: string; url: string } | null,
} as const

export const serviceTimes: ServiceTime[] = [
  { day: 'Sunday', name: 'Worship Service', time: '9:30 AM', time24: '09:30' },
  {
    day: 'Sunday',
    name: 'Kids Sunday School',
    time: '10:30 AM',
    time24: '10:30',
  },
  {
    day: 'Thursday',
    name: 'Prayer Night & Worship',
    time: '7:00 PM',
    time24: '19:00',
  },
]

export const missionPillars: MissionPillar[] = [
  {
    verb: 'Reach',
    object: 'the lost',
    description:
      'Becoming His instrument in reaching people with the Gospel of Jesus Christ.',
  },
  {
    verb: 'Establish',
    object: 'the believer',
    description:
      'Leading those who believe into a public life of faith and obedience through baptism.',
  },
  {
    verb: 'Disciple',
    object: 'the follower',
    description:
      'Cultivating them through intentional and relational discipleship until they become spiritually mature, obedient, and fishers of men.',
  },
]

export const ministries: Ministry[] = [
  {
    slug: 'worship',
    name: 'Worship Ministry',
    description: "Leads people into God's presence through worship and music.",
    icon: LuMusic,
  },
  {
    slug: 'intercessory',
    name: 'Intercessory Ministry',
    description:
      'Prays faithfully for the church, families, and the needs of others.',
    icon: LuHeartHandshake,
  },
  {
    slug: 'prison',
    name: 'Prison Ministry',
    description:
      'Shares the Gospel and brings hope and the love of Christ to those in prison.',
    icon: LuHeart,
  },
  {
    slug: 'evangelism',
    name: 'Evangelism Ministry',
    description: 'Shares the Gospel and leads people to know and follow Jesus.',
    icon: LuMegaphone,
  },
  {
    slug: 'kids',
    name: 'Kids Ministry',
    description:
      "Guides children to know Jesus and grow in faith through God's Word.",
    icon: LuBaby,
  },
]

export const lifeGroups: LifeGroup[] = [
  {
    slug: 'couples',
    name: 'Couples Group',
    description:
      'For married couples building Christ-centered marriages and families.',
  },
  {
    slug: 'single-blessedness',
    name: 'Single Blessedness',
    description:
      'For singles and single parents finding purpose and community in Christ.',
  },
  {
    slug: 'young-professionals',
    name: 'Young Professionals Group',
    description:
      'For college graduates and working young adults navigating faith, career, and life.',
  },
  {
    slug: 'youth',
    name: 'Youth Group',
    description:
      'For ages 13 and up, growing together in faith, friendship, and purpose.',
  },
]

export const events: ChurchEvent[] = [
  {
    slug: 'divine-encounter',
    name: 'Divine Encounter with God',
    description:
      'A gathering set apart to meet with God together — worship, the Word, and prayer, with room for everyone who comes.',
    featured: true,
  },
  {
    slug: 'water-baptism',
    name: 'Water Baptism',
    description:
      'A public declaration of faith and obedience for those who have believed.',
  },
  {
    slug: 'evangelism-simbalay',
    name: 'Evangelism / Simbalay',
    description:
      'House-to-house evangelism, bringing the Gospel to families where they are.',
  },
  {
    slug: 'feeding-outreach',
    name: 'Feeding Outreach',
    description:
      'Serving meals in our community as a practical expression of compassion.',
  },
  {
    slug: 'prison-outreach',
    name: 'Prison Outreach',
    description:
      'Regular visits bringing hope and the love of Christ to those in custody.',
    locations: [
      'Consolacion: Police Station, BJMP, DSWD',
      'Mandaue: Police Station 1, 3, 4, 6 Centro, Basak, Maguikay, Canduman',
      'Liloan Police Station',
    ],
  },
  {
    slug: 'mens-fellowship',
    name: "Men's Fellowship",
  },
  {
    slug: 'womens-fellowship',
    name: "Women's Fellowship",
  },
  {
    slug: 'youth-fellowship',
    name: 'Youth Fellowship',
  },
  {
    slug: 'dawn-prayer',
    name: 'Dawn Prayer',
  },
  {
    slug: 'worship-training',
    name: 'Worship Training',
  },
  {
    slug: 'couples-retreat',
    name: 'Couples Retreat',
  },
  {
    slug: 'holy-week-retreat',
    name: 'Holy Week Retreat',
  },
]

/**
 * Announcements are intentionally empty until the church supplies real ones.
 * The Announcements section renders a graceful empty state rather than
 * inventing notices. Add entries here to publish them.
 */
export const announcements: Announcement[] = []

/** What a first-time visitor can expect, phrased only from confirmed practice. */
export const visitorNotes: { title: string; body: string; icon: IconType }[] = [
  {
    title: 'Come as you are',
    body: 'There is no dress code and no expectations. Everyone is welcome exactly as they arrive.',
    icon: LuUsers,
  },
  {
    title: 'Worship and the Word',
    body: 'Our Sunday gathering centres on worship together and teaching from Scripture.',
    icon: LuBookOpen,
  },
  {
    title: 'Your children are cared for',
    body: 'Kids Sunday School follows the morning service, guiding children to know Jesus.',
    icon: LuBaby,
  },
]

/** Convenience helpers used by several sections. */
export const featuredEvent = events.find((event) => event.featured)

export const upcomingEvents = events.filter((event) => !event.featured)

export const fullAddress = [
  church.location.venue,
  church.location.street,
  `${church.location.city}, ${church.location.region}`,
].join(', ')
