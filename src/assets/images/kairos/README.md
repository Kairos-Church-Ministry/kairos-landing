# Kairos photography

Drop the church's own photographs into this folder, then wire them up in
[`photos.ts`](./photos.ts). That file is the only place the landing page looks
for imagery — every section reads from it, so one edit lights up the whole site.

Until a slot has a real file, the page renders a branded placeholder tile
instead of a stock photo. Nothing on the site invents a picture of the church.

## Slots the landing page uses

| Slot            | Where it appears           | Suggested crop | Notes                                              |
| --------------- | -------------------------- | -------------- | -------------------------------------------------- |
| `hero`          | Hero, right column         | 4:5 portrait   | The LCP image. Congregation or worship, faces up high. |
| `welcome`       | Welcome / About            | 4:3 landscape  | People connecting before or after a service.        |
| `featuredEvent` | Divine Encounter feature   | 16:9 landscape | Wide shot of the gathering.                         |
| `visit`         | First-time visitor CTA     | 3:2 landscape  | The entrance, or a welcome team greeting guests.    |

## Adding a photo

1. Save the file here, e.g. `hero.jpg`.
2. Import it at the top of `photos.ts` and assign it to the matching slot.
3. Update that slot's `alt` text to describe what is actually in the picture.

## Guidance

- Export at roughly 2× the display width (hero ≈ 1200px wide, wide crops ≈ 1600px).
- Prefer JPEG for photographs; keep files under ~400 KB.
- `next.config.mjs` sets `images.unoptimized`, so the file you commit is the file
  that ships. Compress before committing.
- Alt text should describe the photograph, not repeat the heading beside it.
