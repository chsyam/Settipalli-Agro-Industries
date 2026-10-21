import { Metadata } from 'next';
import CompleteOrderContent from './complete-order-content';

export const metadata: Metadata = {
  title: 'Order Confirmation',
  robots: { index: false, follow: true },
};

export default async function Order({ params }: { params: any }) {
  const { lang } = await params;
  return (
    <>
      <CompleteOrderContent lang={lang} />
    </>
  );
}
