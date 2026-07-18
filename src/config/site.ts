/**
 * Fuente única de verdad de la identidad de Santos Lenin Vilcachagua Ayala.
 * Alimenta metadatos, JSON-LD, header, footer y sitemap.
 */

export const SITE = {
  url: 'https://santoslenin.com',

  /** Nombre completo — uso obligatorio en title del Home, hero, sobre-mí, schema, og:title, footer. */
  nombre: 'Santos Lenin Vilcachagua Ayala',
  /** Forma corta para títulos internos y alternateName del schema. */
  nombreCorto: 'Santos Lenin Vilcachagua',
  /** Forma de navegación. */
  nav: 'Santos Lenin',

  rol: 'Especialista en Marketing Digital y Performance Marketing',
  /** Tesis / propuesta del hero. */
  tesis:
    'Especialista en Marketing Digital y docente universitario. Performance marketing y embudos de conversión potenciados con IA.',

  /** Descripción por defecto (meta description fallback). */
  descripcion:
    'Especialista en marketing digital y docente universitario. Lidera proyectos de performance marketing, embudos de conversión e inteligencia artificial aplicada al marketing.',

  lang: 'es',
  locale: 'es_PE',
  ciudad: 'Lima',
  pais: 'PE',
  paisNombre: 'Perú',

  email: 'soypuromarketing@gmail.com',

  /** Imagen de la persona (entidad) y OG por defecto. */
  fotoPersona: '/santos-lenin-vilcachagua.jpg',
  ogImage: '/og-default.png',

  redes: {
    linkedin: 'https://www.linkedin.com/in/santos-lenin-vilcachagua-ayala',
  },

  /** Formación para schema Person.alumniOf. */
  alumniOf: [
    'Universidad Privada del Norte',
    'Universidad Nacional del Callao',
  ],

  /** Áreas de conocimiento para schema Person.knowsAbout. */
  knowsAbout: [
    'Marketing Digital',
    'Performance Marketing',
    'Inteligencia Artificial aplicada al Marketing',
    'GEO',
    'AEO',
    'SEO',
    'Meta Ads',
    'Google Ads',
    'HubSpot',
    'Marketing Analytics',
  ],
} as const;

export type Site = typeof SITE;

/** Navegación principal (header y footer). */
export const NAV = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
] as const;
