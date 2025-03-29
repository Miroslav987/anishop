"use client";

import { useModal } from "@/context/ModalProvider";
import { useUser } from "@/lib/features/users/UserServer";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AuthEmail() {
  const { handleGoogle } = useUser()
  const { closeModal } = useModal()
  const [email, setEmail] = useState<string>('');





  return (
    <>
      <div className="relative w-[646px] rounded-[10px] bg-white py-[80px] px-[90px] shadow-shadow_first ">
        <button onClick={closeModal} className="absolute right-[20px] top-[10px] rotate-45 text-grey_second text-4xl ">+</button>
        <div className="flex flex-col items-center gap-[24px]">
          <p className="font-[MullerBold] text-[32px] text-center pb-[10px]">
            Регистрация
          </p>
          <button className="  flex items-center justify-center gap-[10px] w-full h-[60px] rounded-[10px] border-black border-2 hover:bg-black hover:text-white"
           onClick={()=>(handleGoogle(),closeModal())}>
            <Image
              src="/icons/google.png"
              alt="google"
              width={25}
              height={25}
               />
              <span className="text-lg">Войти через Google</span>
            </button>
        </div>
        <div className="recaptcha-container"></div>
      </div>

    </>
  );
}

