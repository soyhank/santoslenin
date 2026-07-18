# CLAUDE.md — santoslenin.com

Sitio de marca personal de **Santos Lenin Vilcachagua Ayala** (especialista en marketing digital
y performance, docente universitario). Objetivo: **posicionamiento profesional/empleo** y marca
personal — SEO de entidad + AEO/GEO. **No vende servicios de consultoría.** Estático, sin backend.

## Reglas de identidad (no negociables)

- Nombre completo **"Santos Lenin Vilcachagua Ayala"** en: `<title>` del Home, H1/hero, Sobre mí,
  schema `Person.name`, `og:title` y footer.
- `alternateName` y títulos internos: **"Santos Lenin Vilcachagua"**.
- Forma corta **"Santos Lenin"** solo en navegación.
- **Prohibido** "Lenin Santos".
- CTAs válidos: **"Ver portafolio"** y **"LinkedIn"**. Nada de "agenda una consulta" / "trabajemos juntos".
- `sameAs`: solo LinkedIn (sin YouTube, sin GitHub).

## Stack (no negociable)

- **Astro 6** + TypeScript estricto. JS de cliente mínimo (reveal observer + menú `<details>`).
- **Tailwind v4** con `@tailwindcss/vite`; tema en `@theme` de `src/styles/global.css` (sin config).
- Fuentes **self-hosted** (Fontsource, variable): Space Grotesk (display) / Geist (cuerpo) /
  JetBrains Mono (datos). Sin CDNs de fuentes.
- **Content Collections** (Zod): `blog` (cluster `ia-marketing` | `geo-aeo`, `pillar`, `faq`) y `portafolio`.
- `site: 'https://santoslenin.com'`.

## Diseño

- Paleta **Cobalto** (acento `#2545E6`). Elemento firma: **metric chips** (`.chip` en monospace).
- Clase `.eyebrow` para etiquetas de sección; `.prose` para contenido largo.

## SEO / AEO / GEO

- JSON-LD centralizado en `src/lib/seo.ts`. Toda identidad sale de `src/config/site.ts` (no hardcodear).
- Pilares (`/ia-en-marketing`, `/geo-aeo`) y artículos en **formato AEO**: respuesta directa citable,
  H2 en preguntas, tabla/lista por sección, FAQ con `FAQPage` schema, párrafos cortos.
- Enlazado interno automático por cluster con `RelatedContent.astro`.
- `robots.txt` permite crawlers de IA; `/llms.txt` resume la entidad.

## Contenido

- Experiencia siempre en **pasado** (proyectos liderados y concluidos; nunca "actualmente").
- **No inventar** datos, testimonios, logos ni métricas. Lo faltante = `[TODO_SANTOS: ...]`.
- Métricas borrador del brief marcadas con `<!-- MÉTRICA BORRADOR: confirmar con Santos -->`.
- Nada de `[COMPLETAR]` visible en páginas públicas.

## Despliegue

- GitHub `soyhank/santoslenin` (público). Vercel scope `semcos-projects-9c0809c3`, usuario
  `santosvilcachagua-6838`. Deploy por CLI (`vercel deploy --prod`) hasta conectar Git.
- Ver **PENDIENTES.md** para TODO_SANTOS, métricas y pasos de Search Console.

## Comandos

`npm run dev` · `npm run build` · `npm run check`
