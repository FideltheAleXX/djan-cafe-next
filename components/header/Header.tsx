'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import styles from './Header.module.css';

export default function Header() {
  interface NavItem {
    name: string;
    link: string;
  }
  const navigation: NavItem[] = [
    { name: 'Головна', link: '/' },
    { name: 'Меню', link: '/menu' },
    { name: 'Контакти', link: '/contacts' },
    { name: 'Про нас', link: '/about' },
    { name: 'Корисне', link: '/services' },
  ];

  return (
    <section className={styles.header}>
      <div>Logo</div>
      <nav>
        {navigation.map((nav, index) => {
          return (
            <div key={index} className={styles.navLink}>
              <Link href={nav.link}>
                <Button variant="secondary" size="sm">
                  {nav.name}
                </Button>
              </Link>
            </div>
          );
        })}
      </nav>
      <div>Cart</div>
    </section>
  );
}
