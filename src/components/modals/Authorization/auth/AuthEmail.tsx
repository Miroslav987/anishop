"use client";

import { useModal } from "@/context/ModalProvider";
import { useAuth } from "@/lib/features/user/UserServer";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AuthEmail() {
  const { handleGoogle } = useAuth()
  const { closeModal } = useModal()
  const [email, setEmail] = useState<string>('');





  return (
    <>
      <div className=" w-[646px] rounded-[10px] bg-white py-[80px] px-[90px] shadow-shadow_first ">
        <button onClick={closeModal} className="absolute right-[20px] top-[20px] rotate-45 text-grey_second text-4xl ">+</button>
        <div className="flex flex-col items-center gap-[24px]">
          <p className="font-[MullerBold] text-[32px] text-center pb-[10px]">
            Регистрация
          </p>
          {/* <p className="text-base text-center pb-[30px]">
            Введите номер телефона, чтобы получить код-подтверждение
          </p> */}
        </div>
        {/* <form onSubmit={} className="flex flex-col  gap-[32px]" action="">

          <input
            className="w-full  rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black "
            type="tel"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="почта"
          />

          <div className="w-full" id="recaptcha-container"></div>

          <button type="submit" className="w-full h-[60px] rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
            Далее
          </button>
        </form>  */}
        <div>
          {/* <input
          type="text"
          placeholder="Введите код подтверждения"
          onChange={(e) => setConfirmationResult({ verificationCode: e.target.value })}
        />
        <button onClick={() => handleVerification(confirmationResult?.verificationCode)}>
          Подтвердить код
        </button> */}
          <button className="flex items-center justify-center gap-[10px] w-full h-[60px] rounded-[10px] border-black border-2 hover:bg-black hover:text-white"
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

