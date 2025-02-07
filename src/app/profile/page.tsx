"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Exite from "@/components/modals/Exite";
import { useModal } from "@/context/ModalProvider";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import AuthPhone from "@/components/modals/Authorization/auth/AuthPhone";
import CardOrderingProfile from "@/components/cards/CardOrderingProfile";
import AuthAdmin from "@/components/modals/Authorization/auth/AuthAdmin";
import Search from "@/components/Search";
import { useProduct } from "@/lib/features/products/ProductServer";

export default function page() {
  const router = useRouter()
  const { openModal } = useModal()
  const { userUID, userEmail, userPhone, userAdmin } = useAppSelector(state => state.user)
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true); 
  }, []);

  
  if (!client) {
    return null; 
  }
  return (
    <>
      <div className="flex gap-[30px] ">
        <div onClick={() =>router.push('/profile/my-address-creditcard')}
          className="w-full flex items-center gap-[16px] bg-black p-[10px] rounded-[10px] cursor-pointer">
          <div className="w-[61px] h-[61px] flex justify-center items-center bg-black_second rounded-[9px] ">
            <svg
              width="22"
              height="27"
              viewBox="0 0 24 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11.5328C1 18.9146 7.66993 25.019 10.6222 27.3595C11.0447 27.6944 11.2585 27.8639 11.5737 27.9498C11.8192 28.0167 12.1805 28.0167 12.4259 27.9498C12.7417 27.8637 12.954 27.6959 13.3781 27.3597C16.3304 25.0193 23 18.9153 23 11.5335C23 8.7399 21.8411 6.06042 19.7782 4.08508C17.7153 2.10974 14.9176 1 12.0002 1C9.08279 1 6.28476 2.1099 4.22184 4.08525C2.15893 6.06059 1 8.73922 1 11.5328Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.85719 10.1287C8.85719 11.8093 10.2643 13.1716 12.0001 13.1716C13.7358 13.1716 15.1429 11.8093 15.1429 10.1287C15.1429 8.44816 13.7358 7.0858 12.0001 7.0858C10.2643 7.0858 8.85719 8.44816 8.85719 10.1287Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-white text-lg ">Мои адреса и карты</p>
        </div>
        <div className="w-[50%] p-[20px] shadow-[0_0_6px_0_#0000001A] rounded-[10px]">
          <p className="text-sm">Ваш номер</p>
          {userPhone !== "null" ?
            <>
              <p className="text-lg font-[MullerBold]">{userPhone}</p>
              <button onClick={() => openModal(<AuthPhone />)}>Изменить</button>
            </>
            :
            <button onClick={() => openModal(<AuthPhone />)}>Добавить</button>
          }
        </div>
        <div className="w-[50%] p-[20px] shadow-[0_0_6px_0_#0000001A] rounded-[10px]">
          <p className="text-sm">Ваша почта</p>
          <p className="text-lg font-[MullerBold]">{userEmail}</p>
        </div>
      </div>
      <div className=" mt-[70px] flex gap-[16px] items-center">
        <div className="flex items-center justify-center rounded-[6px] w-[40px] h-[40px] bg-black ">
          <svg width="22" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 6.27783L9.99997 11.0001M9.99997 11.0001L1.49997 6.27783M9.99997 11.0001L10 20.5001M19 15.0586V6.94153C19 6.59889 19 6.42757 18.9495 6.27477C18.9049 6.13959 18.8318 6.01551 18.7354 5.91082C18.6263 5.79248 18.4766 5.70928 18.177 5.54288L10.777 1.43177C10.4934 1.27421 10.3516 1.19543 10.2015 1.16454C10.0685 1.13721 9.93146 1.13721 9.79855 1.16454C9.64838 1.19543 9.50658 1.27421 9.22297 1.43177L1.82297 5.54288C1.52345 5.70928 1.37369 5.79248 1.26463 5.91082C1.16816 6.01551 1.09515 6.13959 1.05048 6.27477C1 6.42757 1 6.59889 1 6.94153V15.0586C1 15.4013 1 15.5726 1.05048 15.7254C1.09515 15.8606 1.16816 15.9847 1.26463 16.0893C1.37369 16.2077 1.52345 16.2909 1.82297 16.4573L9.22297 20.5684C9.50658 20.726 9.64838 20.8047 9.79855 20.8356C9.93146 20.863 10.0685 20.863 10.2015 20.8356C10.3516 20.8047 10.4934 20.726 10.777 20.5684L18.177 16.4573C18.4766 16.2909 18.6263 16.2077 18.7354 16.0893C18.8318 15.9847 18.9049 15.8606 18.9495 15.7254C19 15.5726 19 15.4013 19 15.0586Z"
              stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-xl">Мои заказы</p>
      </div>
      <div className=" mt-[34px] flex flex-wrap gap-[26px]">
        <CardOrderingProfile />
        <CardOrderingProfile />
        <CardOrderingProfile />
        <CardOrderingProfile />
      </div>
      <div className="mt-[60px] flex gap-[20px] justify-end">


        {userAdmin? 
            <button onClick={() => router.push("/admin")} className="flex items-center justify-center gap-[8px] rounded-[10px] h-[60px] px-[100px] bg-white border-black border-2 ">
              <p className="">Админка</p>
            </button>
              :
            <button onClick={()=>openModal(<AuthAdmin/>)} className="flex items-center justify-center gap-[8px] rounded-[10px] h-[60px] px-[100px] bg-white border-black border-2 ">
              <p className="">Админка</p>
            </button>}

        <button onClick={() => openModal(<Exite />)} className="flex items-center justify-center gap-[8px] rounded-[10px] h-[60px] px-[100px] bg-black  ">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-white">Выйти</p>
        </button>
      </div>
    </>
  );
}
