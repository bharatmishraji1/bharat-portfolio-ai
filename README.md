# Bharat Mishra Portfolio v2 — Next.js + TypeScript

## Quickstart (5 minutes to live)

```bash
# 1. Create Next.js app
npx create-next-app@14 bharat-portfolio --typescript --tailwind --app --no-src-dir --no-eslint
cd bharat-portfolio

# 2. Remove boilerplate
rm -rf app/page.tsx app/globals.css public/* components 2>/dev/null; true
mkdir -p components

# 3. Copy ALL files from this bundle into the project at their exact paths:
#    app/globals.css
#    app/layout.tsx
#    app/page.tsx
#    components/images.ts        ← contains base64 logo images
#    components/NavBar.tsx
#    components/Hero.tsx
#    components/About.tsx
#    components/Skills.tsx
#    components/ProjectSection.tsx
#    components/Achievements.tsx
#    components/Contact.tsx
#    components/Footer.tsx
#    components/Scene3D.tsx
#    components/LoadingScreen.tsx

# 4. Run dev server
npm run dev
# → http://localhost:3000

# 5. Deploy
npx vercel --prod
```

## Component Map

```
page.tsx
├── Scene3D        (fixed canvas — Three.js via CDN, no SSR)
├── NavBar         (fixed top, glassmorphism on scroll, new logo)
└── main
    ├── Hero           (portrait, typewriter, stats, CTAs)
    ├── About          (bio, highlights, info card)
    ├── Skills         (8 categories, SVG icons, hover tags)
    ├── ProjectSection (Rakshak-H + Aerial-Detect, correct GitHub links)
    ├── Achievements   (timeline: Buildathon 2026, PW cert, B.Com)
    └── Contact        (links, availability card, location)
    Footer         (logo, copyright, links)
```

## GitHub Links
- Rakshak-H:   https://github.com/bharatmishraji1/RAKSHAK-H-Honeypot
- Aerial-Detect: https://github.com/bharatmishraji1/Aerial-Object-Classification-Detection
- Profile:     https://github.com/bharatmishraji1

## Key Design Decisions
- **Three.js via CDN** — avoids bundle/SSR issues, loads after mount
- **Base64 images** — zero external image hosting, fully self-contained
- **No R3F** — removes the `three` version conflict that caused blank renders
- **CSS animations** — no Framer Motion dep needed, works everywhere
- **Scroll reveal** — pure IntersectionObserver, no library overhead
