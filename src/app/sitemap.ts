import type { MetadataRoute } from 'next';
import { siteSettings } from '@settings/site-settings';
import { languages } from './i18n/settings';

// Public, indexable pages only (account, checkout and demo pages are noindex)
const routes = [
  '',
  '/products',
  '/shops',
  '/about-us',
  '/contact-us',
  '/faq',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    languages.map((lang) => ({
      url: `${siteSettings.url}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' || route === '/products' ? 'daily' : 'monthly',
      priority: route === '' ? 1 : route === '/products' ? 0.9 : 0.5,
    })),
  );
}
