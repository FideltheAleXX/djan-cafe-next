'use client';

import styles from './DishOfDay.module.css';

export default function DishOfDay() {
  interface DishDayItem {
    name: string;
    descr: string;
    img: string;
  }
  const dishes: DishDayItem[] = [
    { name: 'Хачапурі', descr: 'Смачне', img: '/images/001.jpg' },
  ];

  return <section className={styles.dishOfDay}></section>;
}
