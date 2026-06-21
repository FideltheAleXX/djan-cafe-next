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
          <div key={category.id} className={styles.categoriesNavItem}>
            <button
              onClick={() => setActiveCategoryId(category.id)}
              className={`${styles.categoryBtn} ${activeCategoryId === category.id ? styles.active : ''}`}
            >
              {category.title}
            </button>
          </div>
        ))}
      </nav>

      {/* only active category */}
      {activeCategory && (
        <section className={styles.categoryContent}>
          {activeCategory.subcategories.map((sub) => (
            <div key={sub.id} className={styles.subcategory}>
              <h3 className={styles.subcategoryTitle}>{sub.title}</h3>
              <ul>
                {sub.items.map((item) => (
                  <li className={styles.subcategoryItem} key={item.id}>
                    <div className={styles.subcategoryItemHead}>
                      <div>{item.name}</div>
                      <div className={styles.subcategoryItemPrice}>
                        {item.price} грн
                      </div>
                    </div>
                    <div className={styles.subcategoryItemDescr}>
                      {item.descr}
                    </div>
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
