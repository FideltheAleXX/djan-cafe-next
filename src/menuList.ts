export interface MenuItem {
  id: string;
  name: string;
  descr: string;
  img: string;
  weight: string;
  price: number;
}

export interface Subcategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface Category {
  id: string;
  title: string;
  subcategories: Subcategory[];
  items?: MenuItem[];
}

export const menuList: Category[] = [
  {
    id: 'salads',
    title: 'Салати',
    subcategories: [
      {
        id: 'vegetable',
        title: 'Овочеві (на олії)',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'meat',
        title: 'Мясні (на майонезі)',
        items: [
          {
            id: '001',
            name: 'Салат з курки',
            descr: 'курка, огірок, цибуля, яйце, майонез',
            img: 'url.url',
            weight: '160',
            price: 100,
          },
        ],
      },
      {
        id: 'salad-leaves',
        title: 'З листя салату (на власних соусах',
        items: [
          {
            id: '001',
            name: 'Салат з креветками',
            descr:
              'айсберг, рукола, авокадо, креветка, філадельфія, пармезан, чері, соус, яйце перепілки',
            img: 'url.url',
            weight: '280',
            price: 250,
          },
        ],
      },
    ],
  },
  {
    id: 'flour-dishes',
    title: 'Страви з борошна',
    subcategories: [
      {
        id: 'khachapuri',
        title: 'Хачапурі',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'khinkali-etc',
        title: 'Хінкалі * Пельмені * Вареники',
        items: [
          {
            id: '001',
            name: 'Салат з курки',
            descr: 'курка, огірок, цибуля, яйце, майонез',
            img: 'url.url',
            weight: '160',
            price: 100,
          },
        ],
      },
      {
        id: 'pies-pizzas',
        title: 'Пироги * Піца',
        items: [
          {
            id: '001',
            name: 'Салат з креветками',
            descr:
              'айсберг, рукола, авокадо, креветка, філадельфія, пармезан, чері, соус, яйце перепілки',
            img: 'url.url',
            weight: '280',
            price: 250,
          },
        ],
      },
    ],
  },
  {
    id: 'meat',
    title: 'Страви з мяса',
    subcategories: [
      {
        id: 'mangal',
        title: 'На мангалі',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'hot-meat-dishes',
        title: 'Гарячі страви з мяса',
        items: [
          {
            id: '001',
            name: 'Салат з курки',
            descr: 'курка, огірок, цибуля, яйце, майонез',
            img: 'url.url',
            weight: '160',
            price: 100,
          },
        ],
      },
    ],
  },
  {
    id: 'made-to-order-dishes',
    title: 'Страви на замовлення',
    subcategories: [
      {
        id: 'meat-dishes',
        title: 'Мясні страви',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Напої',
    subcategories: [
      {
        id: 'tea-coffee',
        title: 'Кава * Чай',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'non-alcohol',
        title: 'Безалкогольні напої',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
    ],
  },
  {
    id: 'hot-dishes',
    title: 'Гарячі страви',
    subcategories: [
      {
        id: 'hot-dishes-sub',
        title: 'Гарячі страви',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'fish dishes',
        title: 'Страви з риби',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'soups',
        title: 'Супчики',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'side-dishes',
        title: 'Гарніри',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
    ],
  },
  {
    id: 'cold-dishes',
    title: 'Холодні закуски',
    subcategories: [
      {
        id: 'cold-dishes-sub',
        title: 'Холодні закуски',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'pickles',
        title: 'Соління',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'sauces',
        title: 'Соуси',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
    ],
  },
  {
    id: 'strong-alcohol',
    title: 'Міцний алкоголь',
    subcategories: [
      {
        id: 'vodka',
        title: 'Горілка',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'cognaс',
        title: 'Коньяк',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'whiskey',
        title: 'Віскі',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'wines',
        title: 'Вина',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
      {
        id: 'sparkling wines',
        title: 'Ігристі вина',
        items: [
          {
            id: '001',
            name: 'Салат з капусти',
            descr: 'капуста, морква, цибуля, олія',
            img: 'url.url',
            weight: '140',
            price: 60,
          },
        ],
      },
    ],
  },
];
