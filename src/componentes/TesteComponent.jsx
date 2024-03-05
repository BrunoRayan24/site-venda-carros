import React from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

SwiperCore.use([Pagination, Autoplay]);

const Carousel = ({ items }) => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      spaceBetween={0}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white p-4 m-2 rounded-lg shadow-md" style={{ width: '240px', height: '300px' }}>
            <div className="flex justify-center items-center">
              <Image
                src={item.imagePath}
                alt={item.title}
                width={300}
                height={300}
                style={{ width: '60px', height: '60px' }}
              />
            </div>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
