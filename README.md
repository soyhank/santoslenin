# santoslenin

Sitio de **marca personal** de Lenin Santos — consultor de marketing digital y SEO.
Construido con **Astro + Tailwind CSS v4**, 100% estático y optimizado para SEO.

## Stack

- **Astro 6** (TypeScript estricto, cero JS innecesario)
- **Tailwind CSS v4** vía `@tailwindcss/vite` (tema en `src/styles/global.css`, sin `tailwind.config`)
- **Content Collections** (Content Layer API + Zod) para servicios y blog
- **@astrojs/sitemap** y RSS automáticos
- Desplegado en **Vercel** (salida estática)

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve el build
npm run check      # astro check (tipos y contenido)
```

## Estructura

```
src/
  config/site.ts        Datos de marca y navegación (EDITA AQUÍ primero)
  content.config.ts     Esquemas de colecciones (servicios, blog)
  content/servicios/    Un .md por servicio → /servicios/[slug]
  content/blog/         Un .md por artículo → /blog/[slug]
  lib/seo.ts            Helpers de JSON-LD y canonical
  components/           BaseHead, Header, Footer, Icon
  layouts/BaseLayout    Layout único
  pages/                Rutas (home, servicios, sobre-mi, contacto, blog, rss, robots)
public/                 favicon, og, robots/sitemap servidos por Astro
```

## SEO incluido

- Metadatos por página, canonical, Open Graph y Twitter Cards
- JSON-LD: `Person`, `WebSite`, `ProfessionalService`, `BreadcrumbList`, `Article`
- Sitemap (`/sitemap-index.xml`) y `robots.txt` automáticos
- RSS en `/rss.xml`
- HTML semántico, foco accesible (WCAG), `prefers-reduced-motion`

## Pendiente del dueño (`[COMPLETAR]` / `[CONFIRMAR]`)

1. **`src/config/site.ts`**: nombre exacto, rol/especialidad, email, teléfono/WhatsApp y redes.
2. **`src/pages/sobre-mi.astro`**: tu historia real, experiencia y logros (E-E-A-T).
3. **Foto real** en `/public/foto.jpg` (y referénciala en `sobre-mi`).
4. **Formulario**: crea `PUBLIC_WEB3FORMS_KEY` (ver `.env.example`) en `.env` y en Vercel.
5. **Dominio**: cuando tengas dominio propio, cámbialo en `SITE.url`.
6. Imágenes `public/og-default.png` y `public/apple-touch-icon.png` (placeholders generados).

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores. En Vercel configúralas en
Project → Settings → Environment Variables.
