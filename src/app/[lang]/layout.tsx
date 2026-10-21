import ManagedModal from '@components/common/modal/managed-modal';
import { ManagedUIContext } from '@contexts/ui.context';
import { Inter, Manrope } from 'next/font/google';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import ManagedDrawer from '@components/common/drawer/managed-drawer';
import { Metadata } from 'next';
import ToasterProvider from 'src/app/provider/toaster-provider';
import Providers from 'src/app/provider/provider';
import { Analytics } from '@vercel/analytics/next';
import { siteSettings } from '@settings/site-settings';

// external
import 'react-toastify/dist/ReactToastify.css';

// base css file
import '@assets/css/scrollbar.css';
import '@assets/css/swiper-carousel.css';
import '@assets/css/custom-plugins.css';
import './globals.css';
import '@assets/css/rc-drawer.css';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.url),
  title: {
    template: `%s | ${siteSettings.name}`,
    default: `${siteSettings.name} | Farm-Fresh Groceries Online`,
  },
  description: siteSettings.description,
  applicationName: siteSettings.name,
  keywords: [
    'Settipalli Agro Industries',
    'Settipalli',
    'agro products',
    'farm fresh vegetables',
    'fresh fruits',
    'online grocery',
    'grains and pulses',
    'grocery delivery',
  ],
  openGraph: {
    type: 'website',
    siteName: siteSettings.name,
    title: siteSettings.name,
    description: siteSettings.description,
    url: '/',
    images: [{ url: '/assets/images/logo.png', alt: siteSettings.name }],
  },
  twitter: {
    card: 'summary',
    title: siteSettings.name,
    description: siteSettings.description,
    images: ['/assets/images/logo.png'],
  },
  robots: { index: true, follow: true },
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} dir={dir(lang)} suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} ${manrope.variable}`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <ManagedUIContext>
            {children}
            <ManagedModal lang={lang} />
            <ManagedDrawer lang={lang} />
            <ToasterProvider />
          </ManagedUIContext>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
