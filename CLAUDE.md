# CLAUDE.md — santoslenin

Sitio de marca personal de **Lenin Santos** (consultor de marketing digital y SEO).
Estático, sin backend ni login. Objetivo: autoridad + captación de clientes vía SEO.

## Stack (no negociable)

- **Astro 6** + TypeScript estricto. Cero JS de cliente salvo el observer de `reveal`
  y el menú `<details>` (ambos con mejora progresiva).
- **Tailwind v4** con `@tailwindcss/vite`. El tema vive en `@theme` dentro de
  `src/styles/global.css` — **no hay `tailwind.config`**.
- **Content Collections** (Content Layer API + `glob` loader + Zod) como única fuente
  de contenido editable: `servicios` y `blog`.
- `@astrojs/sitemap`, RSS (`@astrojs/rss`), `robots.txt` dinámico.

## Reglas

- **Toda** la identidad y SEO global sale de `src/config/site.ts`. No hardcodear
  nombre, rol, email o URLs en componentes.
- JSON-LD centralizado en `src/lib/seo.ts` (`Person`, `WebSite`, `ProfessionalService`,
  `BreadcrumbList`, `Article`). Reusar, no duplicar.
- Nuevos servicios/artículos = nuevo `.md` en `src/content/...`. Nada de páginas
  hardcodeadas para contenido.
- Accesibilidad: foco visible, HTML semántico, `prefers-reduced-motion`, skip link.
- Marcadores `[COMPLETAR]` / `[CONFIRMAR]` señalan datos reales que faltan; no
  inventar trayectoria, cifras ni clientes.

## Despliegue

- GitHub: `soyhank/santoslenin` (público).
- Vercel: framework Astro, salida estática. Env `PUBLIC_WEB3FORMS_KEY` para el form.
- Canónico actual: `https://santoslenin.vercel.app` (cambiar en `SITE.url` al tener dominio).

## Comandos

`npm run dev` · `npm run build` · `npm run check`
