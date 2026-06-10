import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Servicios de consultoría (cada .md = una página /servicios/[slug]). */
const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    titulo: z.string(),
    /** Resumen para tarjetas y meta description (150-160 car.). */
    resumen: z.string(),
    /** Keyword principal que se busca posicionar. */
    keyword: z.string(),
    /** Icono (clave en Icon.astro) y orden de aparición. */
    icono: z.string().default('star'),
    orden: z.number().default(99),
    /** Beneficios/entregables en viñetas. */
    incluye: z.array(z.string()).default([]),
    destacado: z.boolean().default(false),
  }),
});

/** Blog (E-E-A-T y captación orgánica). */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    keyword: z.string(),
    publicado: z.coerce.date(),
    actualizado: z.coerce.date().optional(),
    categoria: z.string().default('Estrategia'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { servicios, blog };
