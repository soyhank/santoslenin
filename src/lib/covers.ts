/** Asigna el ícono/variante del CoverArt de cada proyecto y cluster de blog. */

type CoverIcon = 'cpu' | 'growth' | 'compass' | 'cap' | 'spark' | 'radar';
type CoverVariant = 'light' | 'dark';

const portfolioCovers: Record<string, { icon: CoverIcon; variant: CoverVariant }> = {
  'semcocad-b2b-autodesk': { icon: 'cpu', variant: 'dark' },
  'activa-capital-embudos-meta': { icon: 'growth', variant: 'light' },
  'compass-expansion-eeuu': { icon: 'compass', variant: 'dark' },
  'vonex-web-seo': { icon: 'cap', variant: 'light' },
};

export function getPortfolioCover(id: string) {
  return portfolioCovers[id] ?? { icon: 'growth' as CoverIcon, variant: 'light' as CoverVariant };
}

const blogCovers: Record<string, { icon: CoverIcon; variant: CoverVariant }> = {
  'ia-marketing': { icon: 'spark', variant: 'dark' },
  'geo-aeo': { icon: 'radar', variant: 'light' },
};

export function getBlogCover(cluster: string) {
  return blogCovers[cluster] ?? { icon: 'spark' as CoverIcon, variant: 'light' as CoverVariant };
}
