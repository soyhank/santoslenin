import type { APIContext } from 'astro';
import { SITE } from '../config/site';

/**
 * robots.txt que permite explícitamente a los crawlers de IA (GEO/AEO).
 * No bloquear: GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot,
 * PerplexityBot, Google-Extended, CCBot.
 */
export async function GET(_context: APIContext) {
  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'CCBot',
    'Applebot-Extended',
    'cohere-ai',
  ];

  const aiRules = aiBots.map((bot) => `User-agent: ${bot}\nAllow: /`).join('\n\n');

  const body = `# Permitimos a todos los buscadores y crawlers de IA (GEO/AEO)
User-agent: *
Allow: /

${aiRules}

Sitemap: ${SITE.url}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
