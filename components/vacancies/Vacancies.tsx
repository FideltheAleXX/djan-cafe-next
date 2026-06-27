import { ChefHat, HandPlatter, Martini, type LucideIcon } from 'lucide-react';
import styles from './Vacancies.module.css';

export default function Vacancies() {
  interface vacanciesItem {
    id: number;
    title: string;
    icon: LucideIcon;
    salary: string;
    descr: string;
  }

  const vacanciesList: vacanciesItem[] = [
    {
      id: 1,
      title: 'Кухар',
      icon: ChefHat,
      salary: 'По домовленості',
      descr:
        'Ми пропонуєму Вам стати частиною нашої дружньої і динамічної команди.',
    },
    {
      id: 2,
      title: 'Офіціант',
      icon: HandPlatter,
      salary: 'По домовленості',
      descr:
        'Ми пропонуєму Вам стати частиною нашої дружньої і динамічної команди.',
    },
    {
      id: 3,
      title: 'Бармен',
      icon: Martini,
      salary: 'По домовленості',
      descr:
        'Ми пропонуєму Вам стати частиною нашої дружньої і динамічної команди.',
    },
  ];

  return (
    <section className={styles.vacancies}>
      <p className={styles.sectionTitle}>Вакансії</p>
      <div>
        {vacanciesList.map((item) => {
          const Icon = item.icon;

          return (
            <div className={styles.list} key={item.id}>
              <div className={styles.title}>
                {item.title} <Icon />
              </div>
              <div className={styles.salary}>{item.salary}</div>
              <div className={styles.descr}>{item.descr}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
