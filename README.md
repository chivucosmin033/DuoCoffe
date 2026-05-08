# Duo Coffee — Brasov

Site oficial Duo Coffee — cafenea de specialitate in inima Brasovului.

## Tehnologii

- **HTML5** — structura
- **CSS3** — stilizare (vanilla, fara framework-uri)
- **JavaScript** — interactiuni (vanilla JS, fara librarii)
- **Google Fonts** — Outfit + Playfair Display
- **Imagini** — Unsplash CDN (development)

## Structura proiectului

```
cafenea test/
├── index.html        # Pagina principala
├── css/
│   └── style.css    # Stiluri
├── js/
│   └── script.js    # JavaScript
├── favicon.svg       # Favicon
├── robots.txt        # directives pentru motoare de cautare
└── README.md         # Documentatie
```

## Setup local

### 1. Pornire server
```bash
# Cu Python
python -m http.server 3000

# Cu npx (Node.js)
npx serve .
```

Site-ul va fi disponibil la `http://localhost:3000`.

### 2. Deploy pe Vercel
```bash
npm i -g vercel
vercel --prod
```

## Functii implementate

- [x] Design responsive (mobile-first)
- [x] Animatii scroll reveal cu IntersectionObserver
- [x] Floating card animat in hero
- [x] Mobile hamburger menu
- [x] Formular contact cu validare
- [x] WhatsApp floating button (necesita numar real)
- [x] Nav scroll effect (blur + shadow)
- [x] Active nav link highlighting
- [x] Smooth scroll navigation
- [x] Lazy loading pe toate imaginile
- [x] Preconnect pentru Google Fonts si Unsplash
- [x] Open Graph meta tags
- [x] Custom SVG favicon
- [x] Accessible focus-visible states
- [x] Staggered reveal animations
- [x] Print styles

## Optimizari viitoare

- [ ] Conversie imagini in WebP
- [ ] Inlocuire numar WhatsApp cu numar real
- [ ] Adaugare analytics

## Info contact

- **Adresa:** Strada Iuliu Maniu 24, Brasov
- **Program:** Luni-Vineri 08:00-20:00, Sambata-Duminica 09:00-18:00
- **Instagram:** [@duo__coffee_](https://www.instagram.com/duo__coffee_/)

## Licenta

© 2026 Duo Coffee. Toate drepturile rezervate.