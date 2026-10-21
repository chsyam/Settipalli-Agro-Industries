import AccountDetails from '@components/my-account/account-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account Settings',
  robots: { index: false, follow: true },
};

export default async function AccountDetailsPage({ params }: { params: any }) {
  const { lang } = await params;
  return <AccountDetails lang={lang} />;
}
