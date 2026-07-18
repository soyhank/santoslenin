/** Asigna el ícono/logo/color de marca del CoverArt de cada proyecto y cluster de blog. */

type CoverIcon = 'cpu' | 'growth' | 'compass' | 'cap' | 'spark' | 'radar' | 'palette';
type CoverVariant = 'light' | 'dark';

interface PortfolioCover {
  icon: CoverIcon;
  variant: CoverVariant;
  /** Logo oficial del cliente (público en su propio sitio) + su color de marca real. */
  logo: string;
  logoAlt: string;
  brandColor: string;
}

const portfolioCovers: Record<string, PortfolioCover> = {
  'semcocad-b2b-autodesk': {
    icon: 'cpu',
    variant: 'dark',
    logo: '/logos/semcocad.svg',
    logoAlt: 'Logo de SemcoCAD',
    brandColor: '#fe8e00',
  },
  'activa-capital-embudos-meta': {
    icon: 'growth',
    variant: 'light',
    logo: '/logos/activa-capital.png',
    logoAlt: 'Logo de Activa Capital',
    brandColor: '#00a6a4',
  },
  'compass-expansion-eeuu': {
    icon: 'compass',
    variant: 'dark',
    logo: '/logos/compass.webp',
    logoAlt: 'Logo de Compass For Business',
    brandColor: '#67c9ba',
  },
  'vonex-web-seo': {
    icon: 'cap',
    variant: 'light',
    logo: '/logos/vonex.png',
    logoAlt: 'Logo de Academia Vonex',
    brandColor: '#fce117',
  },
  'pennytax-brand-guidelines': {
    icon: 'palette',
    variant: 'dark',
    logo: '/logos/pennytax.png',
    logoAlt: 'Logo de Pennytax LLC',
    brandColor: '#c0682c',
  },
};

const fallbackPortfolioCover: PortfolioCover = {
  icon: 'growth',
  variant: 'light',
  logo: '',
  logoAlt: '',
  brandColor: '#2545e6',
};

export function getPortfolioCover(id: string) {
  return portfolioCovers[id] ?? fallbackPortfolioCover;
}

const blogCovers: Record<string, { icon: CoverIcon; variant: CoverVariant }> = {
  'ia-marketing': { icon: 'spark', variant: 'dark' },
  'geo-aeo': { icon: 'radar', variant: 'light' },
};

export function getBlogCover(cluster: string) {
  return blogCovers[cluster] ?? { icon: 'spark' as CoverIcon, variant: 'light' as CoverVariant };
}

export interface ProjectEmbed {
  kind: 'fb-video' | 'fb-post' | 'tiktok' | 'press';
  url: string;
  caption: string;
  /** Solo para 'press': nombre del medio, p. ej. "La República". */
  source?: string;
}

/**
 * Publicaciones públicas reales de cada cliente, insertadas con los embeds oficiales
 * de Facebook/TikTok (iframe/SDK de la propia plataforma) — no se descarga ni rehostea
 * ningún video o foto, solo se referencia el post original.
 */
const projectEmbeds: Record<string, ProjectEmbed[]> = {
  'semcocad-b2b-autodesk': [
    { kind: 'fb-post', url: 'https://www.facebook.com/photo?fbid=1392467376351485&set=a.560364912895073', caption: 'Publicación de SemcoCAD' },
  ],
  'compass-expansion-eeuu': [
    { kind: 'fb-video', url: 'https://www.facebook.com/reel/1183651376714845', caption: 'Reel de Compass For Business' },
  ],
  'activa-capital-embudos-meta': [
    { kind: 'fb-video', url: 'https://www.facebook.com/reel/971367742589029', caption: 'Reel de Activa Capital' },
  ],
  'vonex-web-seo': [
    { kind: 'fb-post', url: 'https://www.facebook.com/photo/?fbid=1523820243123306&set=pb.100064860333008.-2207520000', caption: 'Publicación de Academia Vonex' },
    { kind: 'tiktok', url: 'https://www.tiktok.com/@tintaya_roly024/video/7257678540286528774', caption: 'Mención de Academia Vonex en TikTok' },
    {
      kind: 'press',
      url: 'https://larepublica.pe/tendencias/2023/06/30/hablando-huevadas-vendio-pan-con-pollo-y-academia-la-beca-hasta-que-ingrese-a-sm-nos-enorgulleces-ricardo-mendoza-jorge-luna-evat-1503450',
      caption: '"Hablando Huevadas": vendió pan con pollo y la academia le dio la beca hasta que ingrese a San Marcos',
      source: 'La República',
    },
  ],
};

export function getProjectEmbeds(id: string): ProjectEmbed[] {
  return projectEmbeds[id] ?? [];
}

export interface ProjectDocument {
  href: string;
  cover: string;
  coverAlt: string;
  label: string;
}

/** Documento propio (creado por Santos, no de terceros) para mostrar con PdfPreview. */
const projectDocuments: Record<string, ProjectDocument> = {
  'pennytax-brand-guidelines': {
    href: '/docs/pennytax-brand-guidelines.pdf',
    cover: '/pennytax-brand-cover.jpg',
    coverAlt: 'Manual de marca de Pennytax LLC',
    label: 'Ver manual de marca completo',
  },
};

export function getProjectDocument(id: string): ProjectDocument | undefined {
  return projectDocuments[id];
}
