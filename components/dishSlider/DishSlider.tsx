'use client';

import styles from './DishSlider.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { dishes } from '../../src/data';

export default function DishSlider() {
  return (
    <section className={styles.slider}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation={true}
        style={
          {
            '--swiper-navigation-color': '#291334',
            '--swiper-pagination-color': '#291334',
          } as React.CSSProperties
        }
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
