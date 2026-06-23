import type { MetadataRoute } from 'next';
import { env } from '../../env.mjs';

export default function robots(): MetadataRoute.Robots {
  // Use a sensible default URL if not deployed yet
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
