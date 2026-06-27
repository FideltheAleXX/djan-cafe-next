import '../globals.css';
import { Metadata } from 'next';
import Vacancies from '@/components/vacancies/Vacancies';
import Giftcards from '@/components/giftcards/Giftcards';
import Contacts from '@/components/contacts/Contacts';

export const metadata: Metadata = {
  title: 'Корисне | Кафе "Джан"',
};

export default function ServicesPage() {
  return (
    <div>
      <Giftcards />
      <Vacancies />
      <Contacts />
    </div>
  );
}
