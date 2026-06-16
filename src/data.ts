export interface DishItem {
  id: number;
  img: string;
  descr: string;
  title: string;
}
export const dishes: DishItem[] = [
  {
    id: 1,
    img: '/images/001.jpg',
    descr:
      'Легкість, сонце та неймовірна користь. Наш салат з креветками - це вибух вітамінів та білка. Соковиті креветки у поєднанні з хрусткими овочами та пікантною заправкою дарують відчуття свята без зайвої ваги. Ідеальний вибір для легкого ланчу або здорової вечері.',
    title: 'Салат з креветками',
  },
  {
    id: 2,
    img: '/images/002.jpg',
    descr: 'Опис страви',
    title: 'Хачапурі з бринзою',
  },
  {
    id: 3,
    img: '/images/003.jpg',
    descr: 'Опис страви',
    title: 'Хінкалі',
  },
  {
    id: 4,
    img: '/images/004.jpg',
    descr: 'Опис страви',
    title: 'Осетинський пиріг з мясом',
  },
  {
    id: 5,
    img: '/images/005.jpg',
    descr: 'Опис страви',
    title: 'Люля кебаб',
  },
  {
    id: 6,
    img: '/images/006.jpg',
    descr: 'Опис страви',
    title: 'Стейк на ребрі',
  },
  {
    id: 7,
    img: '/images/007.jpg',
    descr: 'Опис страви',
    title: 'Долма',
  },
  {
    id: 8,
    img: '/images/008.jpg',
    descr: 'Опис страви',
    title: 'Шашлик зі свинини',
  },
];
