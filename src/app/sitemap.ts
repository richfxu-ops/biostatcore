import type { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://biostatcore.com';

  const staticPages = [
    '',
    '/services/biostatistics',
    '/services/statistical-programming',
    '/services/data-management',
    '/about/our-story',
    '/about/our-team',
    '/about/why-biostat-core',
    '/insights',
    '/contact',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const postPages = getAllSlugs().map(slug => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...postPages];
}
