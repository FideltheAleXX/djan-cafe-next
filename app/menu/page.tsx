import Menu from '@/components/menu/Menu';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Меню | Кафе "Джан"',
};

export default function MenuPage() {
  return <Menu />;
}
