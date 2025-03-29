"use client"
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import CardOrderingProfile from '../cards/CardOrderingProfile';
import { useAppSelector } from '@/lib/hooks';
import { MyProducts } from './MyProducts';
SwiperCore.use([Pagination]);

export const SwiperProfile = () => {
    const [isMounted, setIsMounted] = useState<any>(false);
    const { dealer_access, email } = useAppSelector(state => state.user.user)
    const swiperRef: any = useRef(null);


    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <div className="profile_pagination swiper-pagination mt-[70px] flex gap-[30px] md:gap-[50px] flex-col md:flex-row">
                <button
                    className="relative pagination-bullet w-full outline-black outline-1 outline-double bg-white rounded-[10px]  flex gap-[16px]  items-center swiper-pagination-bullet"
                    onClick={() => swiperRef.current.swiper.slideTo(0)} >
                    <div className="flex items-center justify-center rounded-[6px] w-[40px] h-[40px] bg-black">
                        <svg width="22" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 6.27783L9.99997 11.0001M9.99997 11.0001L1.49997 6.27783M9.99997 11.0001L10 20.5001M19 15.0586V6.94153C19 6.59889 19 6.42757 18.9495 6.27477C18.9049 6.13959 18.8318 6.01551 18.7354 5.91082C18.6263 5.79248 18.4766 5.70928 18.177 5.54288L10.777 1.43177C10.4934 1.27421 10.3516 1.19543 10.2015 1.16454C10.0685 1.13721 9.93146 1.13721 9.79855 1.16454C9.64838 1.19543 9.50658 1.27421 9.22297 1.43177L1.82297 5.54288C1.52345 5.70928 1.37369 5.79248 1.26463 5.91082C1.16816 6.01551 1.09515 6.13959 1.05048 6.27477C1 6.42757 1 6.59889 1 6.94153V15.0586C1 15.4013 1 15.5726 1.05048 15.7254C1.09515 15.8606 1.16816 15.9847 1.26463 16.0893C1.37369 16.2077 1.52345 16.2909 1.82297 16.4573L9.22297 20.5684C9.50658 20.726 9.64838 20.8047 9.79855 20.8356C9.93146 20.863 10.0685 20.863 10.2015 20.8356C10.3516 20.8047 10.4934 20.726 10.777 20.5684L18.177 16.4573C18.4766 16.2909 18.6263 16.2077 18.7354 16.0893C18.8318 15.9847 18.9049 15.8606 18.9495 15.7254C19 15.5726 19 15.4013 19 15.0586Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className="text-xl">Мои заказы</p>
                    <span className='absolute top-[-23px] right-0'>⬇ пока не работает   </span>
                </button>
                {dealer_access ?
                    <>
                        <button
                            className="relative pagination-bullet w-full outline-black outline-1 outline-double bg-white rounded-[10px]  flex gap-[16px] items-center swiper-pagination-bullet"
                            onClick={() => swiperRef.current.swiper.slideTo(1)} >
                            <div className="flex items-center justify-center rounded-[6px] w-[40px] h-[40px] bg-black">
                                <svg width="22" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5 6.27783L9.99997 11.0001M9.99997 11.0001L1.49997 6.27783M9.99997 11.0001L10 20.5001M19 15.0586V6.94153C19 6.59889 19 6.42757 18.9495 6.27477C18.9049 6.13959 18.8318 6.01551 18.7354 5.91082C18.6263 5.79248 18.4766 5.70928 18.177 5.54288L10.777 1.43177C10.4934 1.27421 10.3516 1.19543 10.2015 1.16454C10.0685 1.13721 9.93146 1.13721 9.79855 1.16454C9.64838 1.19543 9.50658 1.27421 9.22297 1.43177L1.82297 5.54288C1.52345 5.70928 1.37369 5.79248 1.26463 5.91082C1.16816 6.01551 1.09515 6.13959 1.05048 6.27477C1 6.42757 1 6.59889 1 6.94153V15.0586C1 15.4013 1 15.5726 1.05048 15.7254C1.09515 15.8606 1.16816 15.9847 1.26463 16.0893C1.37369 16.2077 1.52345 16.2909 1.82297 16.4573L9.22297 20.5684C9.50658 20.726 9.64838 20.8047 9.79855 20.8356C9.93146 20.863 10.0685 20.863 10.2015 20.8356C10.3516 20.8047 10.4934 20.726 10.777 20.5684L18.177 16.4573C18.4766 16.2909 18.6263 16.2077 18.7354 16.0893C18.8318 15.9847 18.9049 15.8606 18.9495 15.7254C19 15.5726 19 15.4013 19 15.0586Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-xl">Заказы клиентов</p>
                            <span className='absolute top-[-23px] right-0'> ⬇ пока не работает</span>
                        </button>

                        <button
                            className="pagination-bullet w-full outline-black outline-1 outline-double bg-white rounded-[10px] flex gap-[16px] items-center swiper-pagination-bullet"
                            onClick={() => swiperRef.current.swiper.slideTo(2)} >
                            <div className="flex items-center justify-center rounded-[6px] w-[40px] h-[40px] bg-black">
                                <svg width="22" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5 6.27783L9.99997 11.0001M9.99997 11.0001L1.49997 6.27783M9.99997 11.0001L10 20.5001M19 15.0586V6.94153C19 6.59889 19 6.42757 18.9495 6.27477C18.9049 6.13959 18.8318 6.01551 18.7354 5.91082C18.6263 5.79248 18.4766 5.70928 18.177 5.54288L10.777 1.43177C10.4934 1.27421 10.3516 1.19543 10.2015 1.16454C10.0685 1.13721 9.93146 1.13721 9.79855 1.16454C9.64838 1.19543 9.50658 1.27421 9.22297 1.43177L1.82297 5.54288C1.52345 5.70928 1.37369 5.79248 1.26463 5.91082C1.16816 6.01551 1.09515 6.13959 1.05048 6.27477C1 6.42757 1 6.59889 1 6.94153V15.0586C1 15.4013 1 15.5726 1.05048 15.7254C1.09515 15.8606 1.16816 15.9847 1.26463 16.0893C1.37369 16.2077 1.52345 16.2909 1.82297 16.4573L9.22297 20.5684C9.50658 20.726 9.64838 20.8047 9.79855 20.8356C9.93146 20.863 10.0685 20.863 10.2015 20.8356C10.3516 20.8047 10.4934 20.726 10.777 20.5684L18.177 16.4573C18.4766 16.2909 18.6263 16.2077 18.7354 16.0893C18.8318 15.9847 18.9049 15.8606 18.9495 15.7254C19 15.5726 19 15.4013 19 15.0586Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="text-xl">Мои товары</p>

                        </button>
                    </>
                    : null}

            </div>

            {/* Свипер с слайдами */}
            <Swiper
                ref={swiperRef}
                modules={[]}
                loop={true}

                className="w-[100%]"
                spaceBetween={50}
                slidesPerView={1}
                pagination={false}
                allowTouchMove={true}
            >

                <SwiperSlide >
                    <div className="pt-[60px] flex flex-wrap justify-between gap-[26px]">
                        <CardOrderingProfile />
                        <CardOrderingProfile />
                        <CardOrderingProfile />
                        <CardOrderingProfile />
                    </div>
                </SwiperSlide>
                {dealer_access ?

                    <SwiperSlide >
                        <div className="pt-[60px] flex flex-wrap justify-between gap-[26px]">
                            <CardOrderingProfile />
                            <CardOrderingProfile />
                            <CardOrderingProfile />
                            <CardOrderingProfile />
                        </div>
                    </SwiperSlide>
                    : null}
                    
                {dealer_access ?
                    <SwiperSlide  >
                        <MyProducts />
                    </SwiperSlide>
                    : null}

            </Swiper>
        </>
    );
};


