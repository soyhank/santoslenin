import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publicado.getTime() - a.data.publicado.getTime()
  );

  return rss({
    title: `${SITE.marca} — Blog`,
    description: SITE.descripcion,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.titulo,
      description: post.data.descripcion,
      pubDate: post.data.publicado,
      link: `/blog/${post.id}`,
      categories: [post.data.categoria],
    })),
    customData: `<language>${SITE.lang}</language>`,
  });
}
