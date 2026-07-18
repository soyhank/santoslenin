/** Asigna el ícono/logo/color de marca del CoverArt de cada proyecto y cluster de blog. */

type CoverIcon = 'cpu' | 'growth' | 'compass' | 'cap' | 'spark' | 'radar';
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
