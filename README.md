# Muhammad Usman — Portfolio

A graphite, silver, and muted violet portfolio built with Next.js App Router, React, and TypeScript. Includes responsive navigation, project filters, existing project screenshots, experience, skills, CV download, contact, and an on-demand Fetchply chat widget.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run typecheck
npm run build
npm start
```

## Contact configuration

Copy `.env.example` to `.env.local` and set the three `NEXT_PUBLIC_EMAILJS_*` values from your existing EmailJS service. These replace the previous `VITE_APP_EMAILJS_*` names. EmailJS public keys are intended for browser use; never put private keys here. Configure allowed origins in EmailJS for the production domain.

Without EmailJS configuration, the form explicitly opens an email draft in the visitor's email app. It does not claim a message was delivered. With configuration, the form sends through EmailJS and reports actual success or failure. Restart the dev server or rebuild after environment changes.

## Deployment on Vercel

Select the **Next.js** framework preset. Remove any old Vite build/output overrides (`dist`); use `npm run build` and the Next.js default output. Add the new EmailJS environment variable names before deploying. The existing public URL is used for canonical metadata and sitemap; update `src/app/layout.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts` if the domain changes.

## Editing

- `src/app/page.tsx`: page sections and copy
- `src/app/globals.css`: theme, responsive layouts, and featured project showcase
- `src/lib/data.ts`: existing project and experience data
- `src/components/Projects.tsx`: project filters and disclosure
- `src/components/ContactForm.tsx`: contact UI
- `public/`: original images, logos, and resume

Most of the page renders as a Server Component. Only interactive navigation, project filtering, contact, and chat load client code. Images use `next/image`; the hero frames a real project screenshot in a lightweight CSS device showcase. Motion respects reduced-motion settings. DM Sans load from Google Fonts with local system fallbacks. The existing chat widget loads only after a visitor clicks Chat.

## Google Search launch checklist

The homepage has visible name/role copy, descriptive metadata, an absolute canonical URL, Person/WebSite/ProfilePage JSON-LD, robots.txt, and a sitemap. These help discovery and understanding; they do not guarantee indexing or first-page rankings.

1. Deploy the current Next.js changes to the existing production domain. Local changes are not visible to Google.
2. Add `https://muhammad-usman-dev.vercel.app/` as a URL-prefix property in Google Search Console. Select HTML tag verification and put only its `content` token in the Vercel `GOOGLE_SITE_VERIFICATION` environment variable. Rebuild, then complete verification in Search Console. Never paste a fake token.
3. Submit `https://muhammad-usman-dev.vercel.app/sitemap.xml`. Use URL Inspection on the homepage to check indexability and request indexing.
4. Run Google's Rich Results Test on the deployed URL and check the rendered ProfilePage markup. Monitor Search Console indexing, search queries, and Core Web Vitals; structured data eligibility does not promise a rich result.
5. Add the portfolio link to your own GitHub and LinkedIn profiles using the same name and truthful professional description. Publish substantive project write-ups describing your actual contribution; avoid keyword-stuffed duplicate pages and purchased links.
6. If the domain changes, update `siteUrl` in `src/lib/seo.ts`, redirect the old domain, and verify the new Search Console property. Keep the canonical and sitemap on one production origin.

No Search Console verification, sitemap submission, or indexing request has been performed automatically. The sitemap deliberately avoids a fabricated last-modified date.

## Animation layer

Framer Motion provides staggered hero entrances, once-per-element viewport reveals, and a reading-progress line. Content is visible in the server HTML and remains readable without JavaScript. Newly revealed project cards also animate after filtering.

Three.js is loaded separately when the featured project enters the viewport. A silver orbital scene with soft lighting runs at up to 30 fps with pixel ratio capped at 1.5. Rendering pauses offscreen and in hidden tabs; geometry, materials, observers, and the renderer are cleaned up on unmount. Reduced-motion preference disables reveals and the 3D scene, including changes during a session. If WebGL is unavailable, the static CSS lighting remains visible.
