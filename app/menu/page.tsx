'use client';

import Menu from '@/components/menu/Menu';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function MenuPage() {
  return (
    <div>
      <Header />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  );
}
