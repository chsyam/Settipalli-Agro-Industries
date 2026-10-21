import ShopsSingleDetails from '@components/shops/shops-single-details';
import DownloadApps from '@components/common/download-apps';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop Details',
  description:
    'Products and details for this shop on Settipalli Agro Industries.',
};

export default async function ShopDetailsPage({ params }: { params: any }) {
  const { lang } = await params;
  return (
    <>
      <ShopsSingleDetails lang={lang} />
      <DownloadApps lang={lang} />
    </>
  );
}
