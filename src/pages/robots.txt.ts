import type { APIContext } from 'astro';
import { SITE } from '../config/site';

export async function GET(_context: APIContext) {
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
