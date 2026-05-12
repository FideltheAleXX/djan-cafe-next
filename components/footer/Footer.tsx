'use client';

import styles from './Footer.module.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div>map</div>
      <div className={styles.contactInfo}>
        <p>Завітай до нас</p>
        <p>Ми знаходимось:</p>
        <p>
          вулиця Ярослава Мудрого 7, місто Славута, Хмельницька область 30000
        </p>
        <p>Години Понеділок-Неділя: 10:00 - 22:00</p>

        <p>Контакт 098-227-50-89</p>
        <div>
          <Link href="">
            <FaFacebook size={32} />
          </Link>
          <Link href="">
            <FaInstagram size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
}
