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
import { useUser } from "@/lib/features/users/UserServer";
import { Empowerment } from "@/components/modals/profile/Empowerment";
import { SwiperProfile } from "@/components/profile/SwiperProfile";

export default function page() {
  const router = useRouter()
  const { GetProfile } = useUser()
  const { openModal } = useModal()
  const { email, uid, phone, admin_access, dealer_access } = useAppSelector(state => state.user.user)
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
    if (uid) { GetProfile(uid) }

  }, []);

  if (!client) {
    return null;
  }

  return (
    <>
      <div className="flex gap-[15px] md:gap-[30px] flex-col md:flex-row ">
        <div onClick={() => router.push('/profile/my-address-creditcard')}
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
        <div className=" w-full flex flex-wrap md:flex-nowrap gap-[15px] md:gap-[30px]">
          <div className="w-full p-[20px] shadow-[0_0_6px_0_#0000001A] rounded-[10px]">
            <p className="text-sm">Ваш номер</p>
            {phone ?
              <>
                <p className="text-lg font-[MullerBold]">{phone}</p>
                <button onClick={() => openModal(<AuthPhone />)}>Изменить</button>
              </>
              :
              <button onClick={() => openModal(<AuthPhone />)}>Добавить</button>
            }
          </div>
          <div className="w-full p-[20px] shadow-[0_0_6px_0_#0000001A] rounded-[10px]">
            <p className="text-sm">Ваша почта</p>
            <p className="text-lg font-[MullerBold]">{email}</p>
          </div>
        </div>
      </div>

      <div >
        <SwiperProfile />
      </div>

      <div className="mt-[60px] flex flex-wrap gap-[20px] justify-end">
        {dealer_access ?
          <Link href={`/admin/add_product`}
            className='"w-full md:w-auto flex items-center justify-center gap-[8px] rounded-[10px] cursor-pointer h-[60px] px-[100px] bg-white border-black border-2 '>
            Добавить товар
          </Link>
          : null}
        {!admin_access ?
          <button onClick={() => openModal(<Empowerment />)} className="w-full md:w-auto flex items-center justify-center gap-[8px] rounded-[10px] h-[60px] px-[100px] bg-white border-black border-2 ">
            <p >Расширения прав</p>
          </button>
          : null}
        {admin_access ?
          <button onClick={() => router.push("/admin")} className="w-full md:w-auto flex items-center justify-center gap-[8px] rounded-[10px] h-[60px] px-[100px] bg-white border-black border-2 ">
            <p className="">Админка</p>
          </button>
          : null
        }

        <button onClick={() => openModal(<Exite />)} className="w-full md:w-auto flex items-center justify-center gap-[8px] rounded-[10px] h-[60px] px-[100px] bg-black  ">
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
