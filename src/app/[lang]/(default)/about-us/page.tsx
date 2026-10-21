import DownloadApps from '@components/common/download-apps';
import { Metadata } from 'next';
import AboutPageContent from './about-page-content';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Settipalli Agro Industries: our story, the farmers we work with and our commitment to fresh, high-quality agro products.',
};

export default async function Page({ params }: { params: any }) {
  const { lang } = await params;
  return (
    <>
      <AboutPageContent lang={lang} />
      <DownloadApps lang={lang} />
    </>
  );
}
