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
    <div className="w-full details_swiper md:w-[60%]">
      <div className="relative">
        <Swiper
          loop={true}
          className="w-[100%]"
          spaceBetween={50}
          slidesPerView={1}
          ref={swiperRef}
        >
          {images.map((e:string, i:number)=>
          <SwiperSlide key={i} className="flex items-center justify-center">
            <img className="m-auto" src={e} alt="" />
          </SwiperSlide>
        )}

        </Swiper>
        {images.length > 1? 
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>:null}
      </div>
    </div>
  );
}
