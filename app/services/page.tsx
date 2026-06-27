import Contacts from '@/components/contacts/Contacts';
import '../globals.css';
import { Metadata } from 'next';
import Vacancies from '@/components/vacancies/Vacancies';

export const metadata: Metadata = {
  title: 'Корисне | Кафе "Джан"',
};

export default function ServicesPage() {
  return (
    <div>
      <Contacts />
      <Vacancies />
    </div>
  );
}
