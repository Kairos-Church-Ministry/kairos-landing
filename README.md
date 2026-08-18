# Kairos for Christ Christian Fellowship

The public website for Kairos for Christ Christian Fellowship — Sta. Lucia
Townsquare, Poblacion Oriental, Consolacion, Cebu.

Built with [Next.js](https://nextjs.org/) (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | What it does                          |
| ---------------- | ------------------------------------- |
| `npm run dev`    | Development server with Turbopack     |
| `npm run build`  | Type-check, then build for production |
| `npm start`      | Serve the production build            |
| `npm run lint`   | ESLint via `next lint`                |
| `npm run format` | Prettier over `src`                   |

## Where things live

| Path                                | Contents                                                        |
| ----------------------------------- | --------------------------------------------------------------- |
| `src/app/page.tsx`                  | The landing page — composes the sections and holds SEO metadata |
| `src/content/church.ts`             | **All site copy.** Service times, ministries, events, contact   |
| `src/components/kairos/`            | The landing page's sections and shared pieces                   |
| `src/assets/images/kairos/`         | Church photography and the slot manifest (`photos.ts`)          |
| `src/assets/css/custom/_tokens.css` | Design tokens — colours, radii, shadows, motion                 |
| `tailwind.config.ts`                | The same tokens exposed as Tailwind utilities                   |
| `src/app/admin/`, `src/app/auth/`   | Authenticated areas carried over from the original template     |

## Editing the site

Nearly every change is a change to [`src/content/church.ts`](src/content/church.ts).
It is typed, commented, and holds the service times, ministries, life groups,
events, announcements, address, and contact details. Components read from it;
they never hard-code copy.

**Announcements** start empty. Add entries to the `announcements` array and the
Announcements section publishes them; leave it empty and the section shows its
empty state.

**Photographs** work the same way — see
[`src/assets/images/kairos/README.md`](src/assets/images/kairos/README.md).
Slots without a file render a branded placeholder rather than stock imagery.

Only add facts the church has confirmed. No invented schedules, addresses, or
statistics.

## Design system

Colours, spacing, radii, shadows, and motion are defined once in
`src/assets/css/custom/_tokens.css` and mirrored as Tailwind utilities in
`tailwind.config.ts`. Use the utilities (`bg-primary`, `text-ink`,
`rounded-card`, `duration-base`) rather than raw hex values.

| Role         | Token                    | Value                 |
| ------------ | ------------------------ | --------------------- |
| Primary      | `primary` / `bg-primary` | `#101d83`             |
| Primary dark | `navy`                   | `#12263d`             |
| Accent blue  | `primary-600`            | `#17249e`             |
| Secondary    | `secondary`              | `#a96956`             |
| Accent       | `accent`                 | `#f29a22`             |
| Background   | `cream-50`               | `#fbf6ef`             |
| Surface      | `cream-100` / `sand`     | `#f3e8da` / `#dcc6ae` |
| Text         | `ink`                    | `#1c1b1a`             |
| Muted text   | `muted`                  | `#5a636b`             |
| Text on dark | `on-dark`                | `#fff9f0`             |

The public landing page is light-only by design. The `dark` class theme is
retained for the admin area.

## Credits

The application scaffold began as the AeroPage template by
[Coderthemes](https://coderthemes.com/).
