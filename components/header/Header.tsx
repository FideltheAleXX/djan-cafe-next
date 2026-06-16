'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import styles from './Header.module.css';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';

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
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          className={styles.logoImg}
          src="/djan-logo.png"
          fill
          alt="djan cafe logo"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <nav className={styles.navigation}>
        {navigation.map((nav, index) => {
          return (
            <div key={index} className={styles.navLink}>
              <Link href={nav.link}>
                <Button variant="default" size="sm">
                  {nav.name}
                </Button>
              </Link>
            </div>
          );
        })}
      </nav>
      <div>
        <FiShoppingCart size={32} />
      </div>
    </header>
  );
}
