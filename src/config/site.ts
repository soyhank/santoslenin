/**
 * Fuente única de verdad de los datos de marca y SEO global.
 * Edita aquí: estos valores alimentan metadatos, JSON-LD, header, footer y sitemap.
 * Los campos marcados con [COMPLETAR] / [CONFIRMAR] deben revisarse antes de publicar.
 */

export const SITE = {
  /** Dominio canónico (sin barra final). Cambiar al dominio propio cuando exista. */
  url: 'https://santoslenin.vercel.app',

  /** Nombre de la persona/marca. */
  nombre: 'Lenin Santos', // [CONFIRMAR] nombre exacto que quieres posicionar
  marca: 'Lenin Santos',

  /** Titular profesional corto (aparece en <title> de la home y en JSON-LD jobTitle). */
  rol: 'Consultor de Marketing Digital y SEO', // [CONFIRMAR] tu especialidad real

  /** Tagline / propuesta de valor en una frase. */
  tagline: 'Ayudo a negocios a crecer con estrategia digital, SEO y resultados medibles.',

  /** Descripción por defecto (meta description fallback, 150-160 caracteres). */
  descripcion:
    'Consultor de marketing digital y SEO. Acompaño a empresas y profesionales a atraer clientes con estrategias claras, contenido y posicionamiento orgánico.',

  /** Idioma del sitio. */
  lang: 'es',
  locale: 'es_PE',

  /** Ubicación (mejora el SEO local y el schema). */
  ciudad: 'Lima',
  region: 'Lima',
  pais: 'PE',
  paisNombre: 'Perú',

  /** Contacto. Deja vacío ('') lo que no quieras mostrar; se oculta solo. */
  email: '', // [COMPLETAR] ej. hola@santoslenin.com
  telefono: '', // [COMPLETAR] E.164, ej. +51999888777
  telefonoDisplay: '', // ej. 999 888 777
  whatsapp: '', // [COMPLETAR] solo dígitos, ej. 51999888777

  /** Redes sociales. Vacío = no se muestra el icono. */
  redes: {
    linkedin: '', // [COMPLETAR] https://www.linkedin.com/in/...
    instagram: '',
    x: '',
    youtube: '',
    github: 'https://github.com/soyhank',
  },

  /** Imagen Open Graph por defecto (1200x630) en /public. */
  ogImage: '/og-default.png',
} as const;

export type Site = typeof SITE;

/** Navegación principal (header y footer). */
export const NAV = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
] as const;
