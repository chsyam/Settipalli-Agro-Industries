import type { MetadataRoute } from 'next';
import { siteSettings } from '@settings/site-settings';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/*/checkout', '/*/complete-order', '/*/my-account/'],
    },
    sitemap: `${siteSettings.url}/sitemap.xml`,
  };
}
