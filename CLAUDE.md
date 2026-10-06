# MD YAPI - Project Documentation

## Company Info
- **Company**: MD YAPI (Mirtaş Demir Yapı Taahhüt Ticaret Limited Şirketi)
- **Owner**: Serdar Özdemir — İnşaat Mühendisi (Civil Engineer) & Müteahhit (Contractor)
- **Location**: Ortaca, Muğla, Türkiye
- **Service Areas**: Köyceğiz, Dalyan, Ortaca, Dalaman (all in Muğla province)
- **Business Model**: İnşaat Taahhüt (construction contracting) & Kat Karşılığı İnşaat (build-in-exchange-for-floors model)
- **Website Domain**: mdemiryapi.com
- **Instagram**: @mdemiryapi
- **Logo**: White "MD" monogram on navy blue background, with "MD YAPI" text and "Modern Design" tagline in script font

## Current Projects
- **Köyceğiz (ongoing)**: 2 separate independent villas (NOT twin villas). Each villa is 500 m², 2 floors, 4 bedrooms, with its own private garden and pool. Expected completion: October 2026.
- **Ortaca (completed)**: Residential construction project, delivered.

## Folder Structure
```
First-website/
├── .claude/
│   └── launch.json       # Preview server config (python3 http.server on port 8080)
├── .git/
├── index.html             # Main HTML — single-page website, all sections
├── style.css              # All styles — layout, colors, responsive, animations
├── script.js              # Interactivity — navbar, mobile menu, scroll animations, form
└── CLAUDE.md              # This file
```

## Tech Stack
- Pure HTML, CSS, JavaScript — no frameworks, no build tools
- Google Fonts loaded via CDN
- Hosted on GitHub Pages: https://nimetoz.github.io/First-website/
- GitHub repo: https://github.com/NimetOz/First-website

## Design Choices

### Colors (Navy Blue theme matching MD YAPI logo)
- `--primary: #4a90d9` — Blue accent (buttons, highlights, links)
- `--primary-light: #5da0e8` — Hover state
- `--navy: #0f1c33` — Logo background navy
- `--dark: #0a1628` — Page background (very dark navy)
- `--dark-2: #0d1a30` — Alternating section background
- `--text: #cdd6e4` — Body text (light blue-gray)
- `--text-muted: #7a8ba8` — Secondary text
- `--white: #ffffff` — Headings, strong text
- Star ratings use `#f5a623` (amber/gold)

### Fonts
- **Headings**: `Playfair Display` (serif) — elegant, luxury feel
- **Body**: `Inter` (sans-serif) — clean, modern readability

### Layout
- Single-page design with smooth scroll navigation
- Dark theme throughout (navy blue palette)
- Fixed navbar that becomes translucent with blur on scroll
- Mobile-responsive with hamburger menu at 768px breakpoint
- Cards with hover effects (translateY + box-shadow)
- Fade-in scroll animations via IntersectionObserver

## Website Language
- Entirely in **Turkish**
- All section IDs use Turkish names (e.g., `#hakkimizda`, `#hizmetler`, `#projeler`)

## Sections (in order)
1. **Navbar** — Logo "MD YAPI", nav links, mobile hamburger toggle
2. **Hero** (`#anasayfa`) — Tagline, heading, description mentioning Muğla regions, CTA buttons, stats (3+ projects, 2 ongoing, 100% satisfaction)
3. **Hakkımızda** (`#hakkimizda`) — About section, mentions Serdar Özdemir by name, 3 features: İnşaat Taahhüt, Kat Karşılığı İnşaat, Mühendis Güvencesi
4. **Hizmetler** (`#hizmetler`) — 6 service cards: Villa İnşaatı, Kat Karşılığı İnşaat, İnşaat Taahhüt, Mimari Tasarım, Proje Yönetimi, Tadilat & Yenileme
5. **Projeler** (`#projeler`) — Portfolio grid with badges ("Devam Ediyor" / "Tamamlandı"), Köyceğiz villas (ongoing), Ortaca project (completed), service region map
6. **Süreç** (`#surec`) — 5-step timeline: Görüşme & Analiz → Proje & Tasarım → İnşaat Süreci → Kalite Kontrol → Anahtar Teslim
7. **Kurucu** (`#kurucu`) — Dedicated section for Serdar Özdemir with credentials badges
8. **Referanslar** (`#referanslar`) — 3 testimonial cards with star ratings, client names from Muğla region
9. **CTA** — Call-to-action banner
10. **İletişim** (`#iletisim`) — Contact info (phone, email, office, Instagram) + form with service dropdown, region dropdown, message textarea
11. **Footer** — Full company name, "Modern Design" tagline, quick links, services, regions, copyright

## Preferences & Notes
- Project imagery uses SVG placeholders (no real photos yet)
- Portfolio cards use color-coded backgrounds: navy (#0f1c33) for villas, green (#1a2e1a) for completed
- Contact form has both "Hizmet Seçiniz" (service) and "Bölge Seçiniz" (region) dropdowns specific to the 4 service areas
- Form submission shows a Turkish alert message and resets
- The Köyceğiz project is specifically 2 SEPARATE independent villas — not twin/duplex villas
