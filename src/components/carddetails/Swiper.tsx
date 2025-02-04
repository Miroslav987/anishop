import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";

export default function CardSwiper({images}:any) {

  const swiperRef = useRef<any | null>(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="w-[60%] details_swiper">
      <div className="relative">
        <Swiper
          loop={true}
          className="w-[100%]"
          spaceBetween={50}
          slidesPerView={1}
          ref={swiperRef}
        >
          {images.map((e:any)=>
          <SwiperSlide className="flex justify-center">
            <img src={e} alt="" />
          </SwiperSlide>
        )}

        </Swiper>
        <div className=" absolute top-[50%] inset-x-[10px] flex z-[2]  justify-between">
          <button className="bg-white p-[10px] rounded-full" onClick={handlePrev}>
            <svg
              className="rotate-90"
              width="25"
              height="25"
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
          <button className="bg-white p-[10px] rounded-full" onClick={handleNext}>
            <svg
              className="rotate-[-90deg]"
              width="25"
              height="25"
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
