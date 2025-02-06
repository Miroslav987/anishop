
"use client";
import Cookies from 'js-cookie';
import { useModal } from "@/context/ModalProvider";
import { auth } from "@/lib/fire";
import { ApplicationVerifier,  RecaptchaVerifier,  sendSignInLinkToEmail, signInWithPhoneNumber } from "firebase/auth";

import React, {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserPhone } from '@/lib/features/user/UserSlice';



export default function AuthPhone() {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
const cookPhone:any = Cookies.get("userPhone")
const [phoneNumber, setPhoneNumber] = useState<string>(cookPhone?cookPhone:"");
const handlePhoneNumberSubmit = async (e:any) => {
  e.preventDefault();
  if (phoneNumber.trim()) {
    dispatch(setUserPhone(phoneNumber))
    closeModal()
  }else{
    console.log("no");
  
  }
};


  return (
    <>
      <div className="w-[646px] relative rounded-[10px] bg-white py-[80px] px-[90px] shadow-shadow_first">
        <button onClick={closeModal} className="absolute right-[20px] top-[20px] rotate-45 text-grey_second text-4xl">+</button>
        <div className="flex flex-col items-center gap-[24px]">
          <p className="font-[MullerBold] text-[32px] text-center pb-[30px]">Номер телефона</p>
        </div>
        <form onSubmit={handlePhoneNumberSubmit} className="flex flex-col gap-[32px]">
          <input
            className="w-full rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
            placeholder="введите номер"
          />
          <div className="w-full" id="recaptcha-container"></div>
          <button type="submit" className="w-full h-[60px] rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
            Далее
          </button>
        </form>
      </div>
    </>
  );
}


  // const [phoneNumber, setPhoneNumber] = useState<string>('');

  // useEffect(() => {
  //   const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
  //     size: 'invisible',
  //     callback: (response: any) => {
  //       // reCAPTCHA solved, can submit phone number
  //       console.log("Recaptcha solved:", response);
  //     },
  //   });
  //   window.recaptchaVerifier = recaptchaVerifier;
  // }, []);

  // const handlePhoneNumberSubmit = async (e: any) => {
  //   e.preventDefault();
  
  //   // Если номер не начинается с "+" — добавляем его
  //   let formattedPhoneNumber = phoneNumber;
  
  //   if (!formattedPhoneNumber.startsWith('+')) {
  //     formattedPhoneNumber = `+${formattedPhoneNumber}`;
  //   }
  
  //   // Проверяем, что номер имеет минимальную длину (например, 10 цифр без кода страны)
  //   if (formattedPhoneNumber.length < 10) {
  //     alert("Пожалуйста, введите корректный номер телефона в международном формате.");
  //     return;
  //   }
  
  //   const recaptchaVerifier = window.recaptchaVerifier;
  
  //   try {
  //     const confirmationResult = await signInWithPhoneNumber(auth, formattedPhoneNumber, recaptchaVerifier);
  //     window.confirmationResult = confirmationResult;
  //     // SMS отправлено, теперь ожидаем код
  //   } catch (error) {
  //     console.error("Ошибка при отправке SMS:", error);
  //     alert("Произошла ошибка при отправке SMS. Попробуйте еще раз.");
  //   }
  // };