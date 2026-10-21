import Help from '@components/my-account/help';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Center',
  robots: { index: false, follow: true },
};

export default async function HelpCenter({ params }: { params: any }) {
  const { lang } = await params;
  return <Help lang={lang} />;
}
