'use client';

import styles from './Location.module.css';
import Image from 'next/image';

export default function Location() {
  return (
    <section className={styles.location}>
      <Image
        className={styles.locationImg}
        src={'/location.png'}
        alt="djan cafe"
        width={1165}
        height={700}
      />
    </section>
  );
}
