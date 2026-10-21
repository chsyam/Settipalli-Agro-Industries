import ShopsPageContent from '@components/shops/shops-page-content';
import DownloadApps from '@components/common/download-apps';
import PageHeroSection from '@components/ui/page-hero-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shops',
  description:
    'Explore shops on Settipalli Agro Industries offering fresh produce, grains and quality groceries.',
};

export default async function Page({ params }: { params: any }) {
  const { lang } = await params;
  return (
    <>
      <PageHeroSection
        heroTitle="text-shop-page"
        backgroundThumbnail="/assets/images/shop-page-hero-bg.jpg"
        mobileBackgroundThumbnail="/assets/images/shop-page-hero-mobile-bg.png"
        variant="white"
        lang={lang}
      />
      <ShopsPageContent lang={lang} />
      <DownloadApps lang={lang} />
    </>
  );
}
