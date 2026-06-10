# santoslenin.com

Sitio de **marca personal** de **Santos Lenin Vilcachagua Ayala**, especialista en marketing
digital y performance marketing, docente universitario. Objetivo: **posicionamiento profesional
y marca personal** (SEO de entidad + AEO/GEO). 100 % estático, optimizado para Google y para los
motores de IA.

## Stack

- **Astro 6** (output estático, TypeScript estricto)
- **Tailwind CSS v4** vía `@tailwindcss/vite` (tema en `src/styles/global.css`, sin `tailwind.config`)
- **Fuentes self-hosted** (Fontsource): Space Grotesk (display), Inter (cuerpo), JetBrains Mono (datos)
- **Content Collections** (Zod) para `blog` y `portafolio`
- `@astrojs/sitemap` + RSS + `robots.txt` y `llms.txt` dinámicos
- Desplegado en **Vercel**

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run check    # astro check
```

## Diseño

- Paleta **Cobalto**: base neutra fría + acento cobalto (`#2545E6`).
- Elemento firma: **metric chips** (etiquetas de datos en monospace) en hero, portafolio y secciones.
- Accesible (foco visible, skip link, `prefers-reduced-motion`), responsive desde 360px.

## Estructura

```
src/
  config/site.ts        Identidad y navegación (EDITA AQUÍ primero)
  content.config.ts     Esquemas Zod (blog, portafolio)
  content/blog/         Artículos satélite (cluster ia-marketing | geo-aeo)
  content/portafolio/   4 proyectos liderados
  lib/seo.ts            JSON-LD: Person, WebSite, Article, FAQPage, BreadcrumbList, ProfilePage
  components/           SEO, Header, Footer, Icon, PortfolioCard, RelatedContent
  layouts/BaseLayout    Layout único (fuentes + SEO + reveal)
  pages/                Home, sobre-mi, portafolio, blog, cv, contacto, ia-en-marketing, geo-aeo,
                        robots.txt, llms.txt, rss.xml, 404
```

## SEO / AEO / GEO incluido

- `<title>` único por página (`Tema | Santos Lenin Vilcachagua`), meta description, canonical absoluto.
- Open Graph + Twitter Cards; `og:image` con el nombre completo.
- JSON-LD `Person` (con `sameAs`, `knowsAbout`, `alumniOf`), `WebSite`, `Article`, `FAQPage`,
  `BreadcrumbList`, `ProfilePage`.
- Páginas pilar en formato AEO (respuesta directa, H2-pregunta, tablas, FAQ) + enlazado interno por cluster.
- `robots.txt` que **permite crawlers de IA** (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot…).
- `/llms.txt` con resumen de la entidad y URLs clave.
- `sitemap-index.xml` y `rss.xml` automáticos.

## Antes de publicar

Revisa **[PENDIENTES.md](./PENDIENTES.md)**: foto, PDF del CV, confirmación de métricas borrador,
conexión del dominio y pasos de Google Search Console.
