import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";

export default function CardSwiper() {
  // Создаем ссылку для экземпляра Swiper
  const swiperRef = useRef<any | null>(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="w-[400px] details_swiper">
      <div className="relative">
        <Swiper
          loop={true}
          className="w-[80%]"
          spaceBetween={50}
          slidesPerView={1}
          ref={swiperRef}
        >
          <SwiperSlide className="flex justify-center">
            <Image
              src="/images/cardphoto.png"
              width={310}
              height={340}
              className=""
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Image
              src="/images/cardphoto.png"
              width={310}
              height={340}
              className=""
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <Image
              src="/images/cardphoto.png"
              width={310}
              height={340}
              className=""
              alt="logo"
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-full absolute top-[50%] flex  justify-between">
          <button onClick={handlePrev}>
            <svg
              className="rotate-90"
              width="15"
              height="15"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1L5 5L1 1"
                stroke="#1E2128"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button onClick={handleNext}>
            <svg
              className="rotate-[-90deg]"
              width="15"
              height="15"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1L5 5L1 1"
                stroke="#1E2128"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
