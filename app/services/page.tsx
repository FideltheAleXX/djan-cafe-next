import '../globals.css';
import { Metadata } from 'next';
import Vacancies from '@/components/vacancies/Vacancies';
import Contacts from '@/components/contacts/Contacts';

export const metadata: Metadata = {
  title: 'Корисне | Кафе "Джан"',
};

export default function ServicesPage() {
  return (
    <div>
      <Vacancies />
      <Contacts />
    </div>
  );
}
