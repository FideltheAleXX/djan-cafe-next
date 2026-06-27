import styles from './About.module.css';
import Image from 'next/image';
import { about } from '@/src/about';

export default function About() {
  return (
    <section className={styles.about}>
      {about.map((item) => {
        return (
          <div className={styles.aboutContent} key={item.id}>
            <div className={styles.aboutTitle}>{item.title}</div>
            <div className={styles.aboutItem}>
              <div className={styles.aboutDescr}>{item.descr}</div>
              <div className={styles.imageContainer}>
                <Image
                  src={item.img}
                  alt={item.title}
                  height={500}
                  width={320}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
