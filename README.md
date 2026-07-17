# Doctor's Dialogue — Conversations That Heal

Premium 3-page editorial website for **Doctor's Dialogue**, a healthcare podcast
and communication platform where doctors share trusted conversations,
awareness-led insights, and meaningful stories with the public.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript (strict)
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens live in
  [app/globals.css](app/globals.css)
- [Framer Motion](https://www.framer.com/motion/) — scroll reveals, drawer,
  progress bar (respects `prefers-reduced-motion`)
- [Radix Slot](https://www.radix-ui.com) + CVA + `tailwind-merge` — button system
- [Lucide](https://lucide.dev) icons

## Pages

| Route      | Purpose                                                              |
| ---------- | -------------------------------------------------------------------- |
| `/`        | Hero, latest episode, platform overview, mission, ways to be featured, benefits, CTAs |
| `/about`   | Brand story, mission, content ecosystem, participation formats, values |
| `/contact` | Contact cards, enquiry form with interest pre-selection, map link     |

### Contact form deep links

The enquiry form pre-selects the interest dropdown from a query parameter —
use these anywhere on or off the site:

```
/contact?type=podcast
/contact?type=solo-talk
/contact?type=live-session
/contact?type=studio-session
/contact?type=magazine
/contact?type=collaboration
/contact?type=general-feature
```

The site is fully static: submitting the form opens the visitor's email app
with a drafted message to `connect@doctorsdialogue.com`. To collect
submissions server-side later, wire the form in
[sections/contact/contact-form.tsx](sections/contact/contact-form.tsx) to a
service such as Formspree, Basin, or a Next.js route handler.

## Updating the "Latest Episode" module

The Home page's Latest Episode section renders from an admin-editable object in
[constants/latest-episode.ts](constants/latest-episode.ts). When a new video is
published, update `videoTitle`, `videoUrl`, `thumbnailUrl` (a YouTube
`https://i.ytimg.com/vi/<VIDEO_ID>/maxresdefault.jpg` URL works — add
`i.ytimg.com` to `images.remotePatterns` in `next.config.ts` if you use one),
`publishedDate`, and `duration`, then redeploy.

## Site-wide content

All brand copy, contact details, and platform links (YouTube, Facebook, email,
phone, address) are centralized in [constants/site.ts](constants/site.ts).

> **Before going live:** set `site.url` in `constants/site.ts` to the final
> production domain — it drives canonical URLs, Open Graph tags, the sitemap,
> and JSON-LD.

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run lint   # ESLint
npm run build  # production build
```

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, **Add New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars required.
4. Deploy. Every push to the default branch redeploys automatically.

Or from the CLI: `npx vercel --prod`.
