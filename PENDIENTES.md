# PENDIENTES — santoslenin.com

Lista de tareas que requieren tu confirmación o tus datos reales antes de considerar el
sitio 100 % publicado. Organizado en tres bloques: datos faltantes (`TODO_SANTOS`),
métricas a confirmar (`MÉTRICA BORRADOR`) y puesta en marcha de SEO.

---

## 1. Datos e insumos faltantes (`TODO_SANTOS`)

| Qué falta | Dónde | Acción |
|---|---|---|
| ~~**Foto profesional**~~ | `src/pages/index.astro` y `src/pages/sobre-mi.astro` | ✅ Hecho: `public/santos-lenin-vilcachagua.jpg` subida (recorte original 640×640 extendido a 640×800 para cubrir el `aspect-[4/5]` sin recortar los hombros). |
| **PDF del CV** | `src/pages/cv.astro:113` | Subir `public/cv-santos-lenin-vilcachagua.pdf`. El botón "Descargar PDF" ya apunta ahí. |
| **Anécdota de IA/automatización** | `src/pages/ia-en-marketing.astro:205` | Completar un caso concreto (herramienta + resultado) para reforzar la sección de casos reales. Opcional pero recomendado para E-E-A-T. |
| **Rol y fechas en Pennytax** | `src/content/portafolio/pennytax-brand-guidelines.md` | Confirmar mes/año exacto del proyecto y si el encargo fue solo el manual de marca o incluyó más (implementación, otras piezas). |

---

## 2. Métricas borrador a confirmar (`MÉTRICA BORRADOR`)

Todas provienen del brief y están marcadas en el código con un comentario HTML. **Ninguna se
inventó fuera de esa lista.** Confírmalas o ajústalas antes de difundir el sitio.

### SemcoCAD — `src/content/portafolio/semcocad-b2b-autodesk.md`
- Reducción de **CPL ~30 %** (Google Ads y LinkedIn Ads). _(línea 62)_
- Incremento de **~40 % en leads calificados (MQL)**. _(línea 65)_
- Implementación de **dashboards en Looker Studio**. _(línea 68)_

### Activa Capital — `src/content/portafolio/activa-capital-embudos-meta.md`
- Optimización de **CPL ~25 %** en Meta Ads. _(línea 55)_
- **300+ leads mensuales** sostenidos. _(línea 58)_
- Mejora de la **tasa de contacto comercial**. _(línea 61)_

### Compass For Business — `src/content/portafolio/compass-expansion-eeuu.md`
- **~60 % de crecimiento en tráfico orgánico** en 6 meses. _(línea 56)_
- **~35 % de incremento en conversiones**. _(línea 59)_
- **Dirección de equipo de 10 personas** con SCRUM. _(línea 61)_

### Academia Vonex — `src/content/portafolio/vonex-web-seo.md`
- Lanzamiento del **sitio con enfoque UX/SEO**. _(línea 56)_
- **~50 % de crecimiento en leads orgánicos**. _(línea 59)_
- **Meta Ads + email marketing** con eficiencia presupuestal. _(línea 62)_

---

## 3. Configuración técnica pendiente

- [ ] **Conectar el dominio `santoslenin.com`** en Vercel (Project → Settings → Domains).
      El código ya usa `https://santoslenin.com` como canónico (`src/config/site.ts`,
      `astro.config.mjs`). Mientras tanto el sitio vive en `santoslenin.vercel.app`.
- [ ] **Conectar el repositorio a Vercel** (Settings → Git) autorizando la cuenta `soyhank`,
      para que cada push despliegue solo. Hoy se publica por CLI (`vercel deploy --prod`).
- [ ] (Opcional) Versión en inglés `/en/`: la estructura quedó pensada, pero no construida.

---

## 4. Puesta en marcha de SEO (Search Console + indexación)

Una vez el dominio `santoslenin.com` apunte a Vercel:

1. **Google Search Console** — https://search.google.com/search-console
   - Añade la propiedad por **dominio** (`santoslenin.com`) y verifica con el registro **TXT DNS**
     que te indique (se agrega en Vercel → Domains → DNS, o en tu proveedor de DNS).
   - Alternativa: propiedad por **prefijo de URL** verificando con la meta-etiqueta o el archivo HTML.

2. **Enviar el sitemap**
   - En Search Console → *Sitemaps*, envía: `https://santoslenin.com/sitemap-index.xml`

3. **Solicitar indexación de las URLs principales**
   - Usa *Inspección de URLs* → *Solicitar indexación* para:
     - `https://santoslenin.com/`
     - `https://santoslenin.com/sobre-mi`
     - `https://santoslenin.com/portafolio`
     - `https://santoslenin.com/cv`
     - `https://santoslenin.com/ia-en-marketing`
     - `https://santoslenin.com/geo-aeo`

4. **Bing Webmaster Tools** (recomendado para AEO/GEO, alimenta a Copilot)
   - https://www.bing.com/webmasters — añade el sitio y envía el mismo sitemap.

5. **GEO / motores de IA**
   - `robots.txt` ya permite a GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, etc.
   - `/llms.txt` ya resume tu identidad y URLs para los modelos.
   - Mantén **coherente tu nombre** ("Santos Lenin Vilcachagua Ayala") en LinkedIn, YouTube y
     cualquier mención externa para reforzar la entidad.

6. **Perfiles externos**
   - Confirma que LinkedIn y YouTube enlazados en `src/config/site.ts` son correctos; son tus
     señales `sameAs` para el schema `Person`.

---

## Cómo verificar todo el contenido borrador

```bash
# Lista las métricas y datos pendientes en el código
grep -rn "TODO_SANTOS\|MÉTRICA BORRADOR" src/
```
