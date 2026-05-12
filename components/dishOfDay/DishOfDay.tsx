'use client';

import styles from './DishOfDay.module.css';
import Image from 'next/image';
import { dishes } from '../../src/data';

export default function DishOfDay() {
  const today = new Date();
  const dayIndex = today.getDate() % dishes.length;
  const dailyDish = dishes[dayIndex];

  return (
    <section className={styles.dishOfDay}>
      <div>
        <Image
          src={dailyDish.img}
          alt={dailyDish.descr}
          width={500}
          height={300}
        />
      </div>
      <div>
        <h1>{dailyDish.title}</h1>
        <p>{dailyDish.descr}</p>
      </div>
    </section>
  );
}
