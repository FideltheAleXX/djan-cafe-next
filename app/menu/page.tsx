import Menu from '@/components/menu/Menu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Меню | Кафе "Джан"',
};

export default function MenuPage() {
  return (
    <div>
      <Menu />
    </div>
  );
}
