import type { Metadata } from 'next';
import '../globals.css';
import About from '@/components/about/About';

export const metadata: Metadata = {
  title: 'Про нас | Кафе "Джан"',
};

export default function AboutPage() {
  return <About />;
}
