import '../globals.css';
import { Metadata } from 'next';
import Giftcards from '@/components/giftcards/Giftcards';

export const metadata: Metadata = {
  title: 'Подарункова карта | Кафе "Джан"',
};

export default function GiftcardPage() {
  return <Giftcards />;
}
