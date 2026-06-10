import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faqItem = z.object({
  pregunta: z.string(),
  respuesta: z.string(),
});

/** Blog: pilares y satélites de los dos clusters de contenido. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** 140-155 caracteres: se usa como meta description. */
    description: z.string().min(120).max(165),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cluster: z.enum(['ia-marketing', 'geo-aeo']),
    pillar: z.boolean().default(false),
    /** Ruta de la página (los pilares viven en raíz, no bajo /blog/). */
    customPath: z.string().optional(),
    faq: z.array(faqItem).optional(),
    draft: z.boolean().default(false),
  }),
});

/** Portafolio: proyectos liderados y concluidos (narrativa en pasado). */
const portafolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portafolio' }),
  schema: z.object({
    title: z.string(),
    /** 140-155 caracteres: meta description. */
    description: z.string().min(120).max(165),
    /** Empresa/cliente del proyecto. */
    empresa: z.string(),
    /** Rol que ejerció Santos. */
    rol: z.string(),
    /** Periodo del proyecto (texto, en pasado). */
    periodo: z.string(),
    /** Etiqueta de sector. */
    sector: z.string(),
    orden: z.number().default(99),
    /** Stack/herramientas usadas. */
    stack: z.array(z.string()).default([]),
    /** Métricas para los "metric chips" (texto corto, p. ej. "CPL −30%"). */
    chips: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog, portafolio };
