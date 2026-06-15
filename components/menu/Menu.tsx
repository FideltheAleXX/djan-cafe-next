'use client';

import styles from './Menu.module.css';
import { menuList } from '../../src/menuList';
import { useState } from 'react';

export default function Menu() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    menuList[0].id,
  );

  const activeCategory = menuList.find((cat) => cat.id === activeCategoryId);

  return (
    <div className={styles.categories}>
      <nav className={styles.categoriesNav}>
        {menuList.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategoryId(category.id)}
            className={`${styles.categoryBtn} ${activeCategoryId === category.id ? styles.active : ''}`}
          >
            {category.title}
          </button>
        ))}
      </nav>

      {/* only active category */}
      {activeCategory && (
        <section className={styles.categoryContent}>
          <h2>{activeCategory.title}</h2>

          {activeCategory.subcategories.map((sub) => (
            <div key={sub.id} className={styles.subcategory}>
              <h3>{sub.title}</h3>
              <ul>
                {sub.items.map((item) => (
                  <li key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.descr}</span>
                    <span>{item.weight} гр</span>
                    <span>{item.price} грн</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
