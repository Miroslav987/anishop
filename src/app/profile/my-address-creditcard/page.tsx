import CardAddressMap from "@/components/cards/CardAddressMap";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Link
        className="flex gap-[10px] items-center justify-start"
        href={"/profile"}
      >
        <svg
          className="rotate-90"
          width="8"
          height="8"
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
        <span>Назад</span>
      </Link>
      <div className="mt-[50px] flex justify-between gap-[40px] ">
    
        <div className="w-full  rounded-radius shadow-shadow_first px-[30px] py-[20px] ">
        <div className="w-full flex items-start  justify-between  mb-[50px] ">
          <div className="flex gap-[16px] items-center">
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-black rounded-md ">
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 6H1M1 4.2L1 11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.51984 15 3.07989 15 4.2 15L17.8 15C18.9201 15 19.4802 15 19.908 14.782C20.2843 14.5903 20.5903 14.2843 20.782 13.908C21 13.4802 21 12.9201 21 11.8V4.2C21 3.0799 21 2.51984 20.782 2.09202C20.5903 1.7157 20.2843 1.40974 19.908 1.21799C19.4802 1 18.9201 1 17.8 1L4.2 1C3.0799 1 2.51984 1 2.09202 1.21799C1.7157 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-xl" >Мои карты</p>
          </div>

          <Link
           href={'/profile/my-address-creditcard/add-card'}
           className="flex gap-[10px] items-center " >
            <span className="text-4xl pt-[5px]">+</span><span className="text-sm "> Добавить карту</span>
          </Link>
        </div>
        <div className="flex flex-col gap-[26px]">
          <CardAddressMap/>
          <CardAddressMap/>
          <CardAddressMap/>
        </div>
        </div>
        <div className="w-full  rounded-radius shadow-shadow_first px-[30px] py-[20px] ">
        <div className="w-full flex items-start  justify-between  mb-[50px] ">
          <div className="flex gap-[16px] items-center">
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-black rounded-md ">
            <svg width="22" height="22" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11.5328C1 18.9146 7.66993 25.019 10.6222 27.3595C11.0447 27.6944 11.2585 27.8639 11.5737 27.9498C11.8192 28.0167 12.1805 28.0167 12.4259 27.9498C12.7417 27.8637 12.954 27.6959 13.3781 27.3597C16.3304 25.0193 23 18.9153 23 11.5335C23 8.7399 21.8411 6.06042 19.7782 4.08508C17.7153 2.10974 14.9176 1 12.0002 1C9.08279 1 6.28476 2.1099 4.22184 4.08525C2.15893 6.06059 1 8.73922 1 11.5328Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.85719 10.1287C8.85719 11.8093 10.2643 13.1716 12.0001 13.1716C13.7358 13.1716 15.1429 11.8093 15.1429 10.1287C15.1429 8.44816 13.7358 7.0858 12.0001 7.0858C10.2643 7.0858 8.85719 8.44816 8.85719 10.1287Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
            <p className="text-xl" >Мои карты</p>
          </div>

          <Link
           href={'/profile/my-address-creditcard/add-creditcard'}
           className="flex gap-[10px] items-center " >
            <span className="text-4xl pt-[5px]">+</span><span className="text-sm "> Добавить карту</span>
          </Link>
        </div>
        <div className="flex flex-col gap-[26px]">
          <CardAddressMap/>
          <CardAddressMap/>
        </div>
        </div>



        
      </div>
    </>
  );
}
