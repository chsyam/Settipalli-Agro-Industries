import { Metadata } from 'next';
import AddressPageContent from './address-page-content';

export const metadata: Metadata = {
  title: 'My Addresses',
  robots: { index: false, follow: true },
};

export default async function AccountDetailsPage({ params }: { params: any }) {
  const { lang } = await params;
  return <AddressPageContent lang={lang} />;
}
