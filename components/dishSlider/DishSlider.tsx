'use client';

import styles from './DishSlider.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DishSlider() {
  interface DishItem {
    id: number;
    img: string;
    descr: string;
  }
  const dishes: DishItem[] = [
    { id: 1, img: '/images/001.jpg', descr: 'awesome dish' },
    { id: 2, img: '/images/002.jpg', descr: 'awesome dish' },
    { id: 3, img: '/images/003.jpg', descr: 'awesome dish' },
    { id: 4, img: '/images/004.jpg', descr: 'awesome dish' },
    { id: 5, img: '/images/005.jpg', descr: 'awesome dish' },
    { id: 6, img: '/images/006.jpg', descr: 'awesome dish' },
    { id: 7, img: '/images/007.jpg', descr: 'awesome dish' },
    { id: 8, img: '/images/008.jpg', descr: 'awesome dish' },
  ];

  return (
    <section className={styles.slider}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {dishes.map((dish) => (
          <SwiperSlide
            key={dish.id}
            className="!flex justify-center items-center"
          >
            <Image src={dish.img} alt={dish.descr} width={500} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
