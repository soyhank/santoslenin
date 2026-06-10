/**
 * Helpers de SEO: URLs canónicas y JSON-LD reutilizable.
 */
import { SITE } from '../config/site';

/** Convierte una ruta relativa en URL absoluta canónica (sin barra final, salvo raíz). */
export function canonical(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/') return SITE.url;
  return new URL(clean, SITE.url).href.replace(/\/$/, '');
}

const PERSON_ID = `${SITE.url}/#person`;

/** JSON-LD Person — identidad/entidad principal. Va en el layout base. */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE.nombre,
    alternateName: SITE.nombreCorto,
    jobTitle: 'Especialista en Marketing Digital y Performance Marketing',
    description:
      'Especialista en marketing digital y docente universitario. Lidera proyectos de performance marketing, embudos de conversión e inteligencia artificial aplicada al marketing.',
    url: SITE.url,
    image: new URL(SITE.fotoPersona, SITE.url).href,
    email: `mailto:${SITE.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.ciudad,
      addressCountry: SITE.pais,
    },
    alumniOf: SITE.alumniOf.map((name) => ({
      '@type': 'CollegeOrUniversity',
      name,
    })),
    knowsAbout: [...SITE.knowsAbout],
    knowsLanguage: ['es', 'en'],
    sameAs: [SITE.redes.linkedin, SITE.redes.youtube],
  };
}

/** JSON-LD WebSite — habilita búsqueda de marca. */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.nombre,
    description: SITE.descripcion,
    inLanguage: SITE.lang,
    publisher: { '@id': PERSON_ID },
  };
}

/** JSON-LD ProfilePage — para /sobre-mi/. */
export function profilePageSchema(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: canonical(path),
    inLanguage: SITE.lang,
    mainEntity: { '@id': PERSON_ID },
  };
}

/** JSON-LD BreadcrumbList a partir de pares nombre/ruta. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: canonical(it.path),
    })),
  };
}

/** JSON-LD Article (author → Person) para posts, pilares y proyectos. */
export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  pubDate: Date;
  updatedDate?: Date;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    inLanguage: SITE.lang,
    url: canonical(opts.path),
    mainEntityOfPage: canonical(opts.path),
    datePublished: opts.pubDate.toISOString(),
    dateModified: (opts.updatedDate ?? opts.pubDate).toISOString(),
    image: new URL(opts.image ?? SITE.ogImage, SITE.url).href,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
  };
}

/** JSON-LD FAQPage a partir de pares pregunta/respuesta. */
export function faqSchema(faq: { pregunta: string; respuesta: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.respuesta,
      },
    })),
  };
}
