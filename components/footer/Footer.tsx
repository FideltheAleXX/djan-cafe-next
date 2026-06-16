'use client';

import styles from './Footer.module.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.9090387495567!2d26.856836175782377!3d50.293625798644115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472ef728e618ba93%3A0x3532d785ebf747da!2z0JTQttCw0L0!5e0!3m2!1suk!2spl!4v1781629293944!5m2!1suk!2spl"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Місцезнаходження кафе на карті"
        ></iframe>
      </div>
      <div className={styles.contactInfo}>
        <p className={styles.footerTitle}>Завітай до нас</p>
        <p>Ми знаходимось:</p>
        <p>вулиця Ярослава Мудрого 7, місто Славута</p>
        <p>Хмельницька область 30000</p>
        <p>Години Понеділок-Неділя: 10:00 - 22:00</p>

        <p>Контакт 098-227-50-89</p>
        <div className={styles.socials}>
          <Link href="">
            <FaFacebook size={32} />
          </Link>
          <Link href="">
            <FaInstagram size={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
