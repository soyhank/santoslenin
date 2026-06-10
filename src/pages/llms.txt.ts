import type { APIContext } from 'astro';
import { SITE } from '../config/site';

/**
 * /llms.txt — resumen en texto plano del sitio para modelos de lenguaje (GEO/AEO).
 * Formato inspirado en la propuesta llmstxt.org: quién, qué temas y URLs clave.
 */
export async function GET(_context: APIContext) {
  const u = SITE.url;
  const body = `# ${SITE.nombre}

> ${SITE.rol} y docente universitario en Lima, Perú. Lidera proyectos de performance marketing, embudos de conversión e inteligencia artificial aplicada al marketing.

${SITE.nombre} (forma corta: ${SITE.nombreCorto}) es especialista en marketing digital con más de 5 años liderando proyectos de performance en tecnología B2B, sector financiero/inmobiliario, educación y servicios. Dirigió equipos de hasta 12 personas y presupuestos de hasta S/500,000. Docente en USIL (2022-2025) e Instituto SISE (2022-2026). Especialista en IA aplicada al marketing (Claude Code, LLMs), automatización (Zapier, Python, SQL) y marketing analytics.

## Temas principales
- Inteligencia artificial aplicada al marketing
- GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization)
- Performance marketing (Meta Ads, Google Ads, LinkedIn Ads)
- SEO y marketing analytics (Looker Studio, Power BI, HubSpot)

## Páginas principales
- [Inicio](${u}/): presentación y resumen profesional
- [Sobre mí](${u}/sobre-mi): biografía, trayectoria y credenciales
- [Portafolio](${u}/portafolio): proyectos liderados (SemcoCAD, Activa Capital, Compass For Business, Academia Vonex)
- [CV](${u}/cv): currículum completo
- [Contacto](${u}/contacto): correo y LinkedIn

## Guías de referencia
- [IA aplicada al marketing](${u}/ia-en-marketing): guía completa con casos reales
- [GEO y AEO](${u}/geo-aeo): cómo posicionar una marca en ChatGPT, Gemini y los motores de IA

## Contacto
- Email: ${SITE.email}
- LinkedIn: ${SITE.redes.linkedin}
- YouTube: ${SITE.redes.youtube}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
