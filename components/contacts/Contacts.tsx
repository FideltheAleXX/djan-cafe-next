import { PenLine } from 'lucide-react';
import styles from './Contacts.module.css';
import Link from 'next/link';

export default function Contacts() {
  return (
    <section className={styles.contacts}>
      <p className={styles.contactsTitle}>Контакти</p>
      <div className={styles.contactsItem}>
        <p>Години роботи:</p>
        <p>Понеділок-Неділя: 10:00 - 22:00</p>
      </div>
      <div className={styles.contactsItem}>
        <p className={styles.contactsPar}>Адреса:</p>
        <p>вулиця Ярослава Мудрого 7, місто Славута</p>
        <p>Хмельницька область 30000</p>
      </div>
      <div className={styles.contactsItem}>
        <p className={styles.contactsPar}>Телефон:</p>
        <p>098-227-50-89</p>
      </div>
      <div className={styles.contactsItem}>
        <p className={styles.contactsPar}>Юридична інформація:</p>
        <p>
          Оперативне управління і володіння кафе здійснює фізична
          особа-підприємець ФФФ
        </p>
      </div>
      <Link
        className={styles.contactsLink}
        href="https://www.instagram.com/dzhan.cafe.slavuta/"
      >
        Напиши нам <PenLine />
      </Link>
    </section>
  );
}
