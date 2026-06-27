export interface aboutItem {
  id: number;
  img: string;
  title: string;
  descr: string;
}
export const about: aboutItem[] = [
  {
    id: 1,
    img: '/chef.png',
    title: 'Шеф-куфар',
    descr:
      'Шеф-кухар Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    img: '/suchef.png',
    title: 'Су-шеф',
    descr:
      'Су-шеф Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    img: '/ourteam.png',
    title: 'Наша команда',
    descr:
      'Наша команда Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
