/**
 * Helpers de SEO: construcción de URLs canónicas y JSON-LD reutilizable.
 */
import { SITE } from '../config/site';

/** Convierte una ruta relativa en URL absoluta canónica. */
export function canonical(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return new URL(clean, SITE.url).href.replace(/\/$/, '') || SITE.url;
}

/** Lista de URLs de redes (sameAs) no vacías, para los schemas. */
export function sameAs(): string[] {
  return Object.values(SITE.redes as Record<string, string>).filter((u) => Boolean(u));
}

/** JSON-LD Person — identidad principal de la marca. */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/#person`,
    name: SITE.nombre,
    jobTitle: SITE.rol,
    description: SITE.descripcion,
    url: SITE.url,
    ...(SITE.email ? { email: `mailto:${SITE.email}` } : {}),
    ...(SITE.telefono ? { telephone: SITE.telefono } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.ciudad,
      addressRegion: SITE.region,
      addressCountry: SITE.pais,
    },
    sameAs: sameAs(),
    image: new URL(SITE.ogImage, SITE.url).href,
  };
}

/** JSON-LD WebSite — habilita el cuadro de búsqueda de marca en Google. */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.marca,
    description: SITE.descripcion,
    inLanguage: SITE.lang,
    publisher: { '@id': `${SITE.url}/#person` },
  };
}

/** JSON-LD ProfessionalService — para SEO local de servicios. */
export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#service`,
    name: `${SITE.nombre} — ${SITE.rol}`,
    description: SITE.descripcion,
    url: SITE.url,
    image: new URL(SITE.ogImage, SITE.url).href,
    ...(SITE.telefono ? { telephone: SITE.telefono } : {}),
    ...(SITE.email ? { email: SITE.email } : {}),
    areaServed: {
      '@type': 'Country',
      name: SITE.paisNombre,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.ciudad,
      addressRegion: SITE.region,
      addressCountry: SITE.pais,
    },
    provider: { '@id': `${SITE.url}/#person` },
    sameAs: sameAs(),
  };
}

/** JSON-LD BreadcrumbList a partir de pares [nombre, ruta]. */
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

/** JSON-LD Article para entradas del blog. */
export function articleSchema(opts: {
  titulo: string;
  descripcion: string;
  path: string;
  publicado: Date;
  actualizado?: Date;
  imagen?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.titulo,
    description: opts.descripcion,
    inLanguage: SITE.lang,
    url: canonical(opts.path),
    mainEntityOfPage: canonical(opts.path),
    datePublished: opts.publicado.toISOString(),
    dateModified: (opts.actualizado ?? opts.publicado).toISOString(),
    image: new URL(opts.imagen ?? SITE.ogImage, SITE.url).href,
    author: { '@id': `${SITE.url}/#person` },
    publisher: { '@id': `${SITE.url}/#person` },
  };
}
