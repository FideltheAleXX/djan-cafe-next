'use client';

import styles from './Menu.module.css';
import { menuList, categories } from '../../src/menuList';
import { useState } from 'react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const filteredMenu = menuList.filter(
    (dish) => dish.category === activeCategory,
  );

  return (
    <div className={styles.menu}>
      <nav className={styles.navigation}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`${styles.categoryItem} ${
              activeCategory === cat ? styles.active : ''
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </nav>
      <div className={styles.menuText}>
        {filteredMenu.map((dish) => (
          <div
            key={dish.id}
            className="flex justify-between border-dotted border-b border-gray-300 pb-2"
          >
            <span className="font-medium">{dish.name}</span>
            <span>${dish.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
