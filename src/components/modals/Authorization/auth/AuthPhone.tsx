"use client";

import { useModal } from "@/context/ModalProvider";
import { useAuth } from "@/lib/features/user/UserServer";
import { setUserPhone } from "@/lib/features/user/UserSlice";
import { auth } from "@/lib/fire";
import { ApplicationVerifier, RecaptchaVerifier, sendSignInLinkToEmail, signInWithPhoneNumber } from "firebase/auth";
import firebase from "firebase/compat/app";
import React, {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from 'js-cookie';
export default function AuthPhone() {
  const dispatch = useDispatch()
  const {closeModal} = useModal()
  const cookPhone:any = Cookies.get("userPhone")
  const [phone, setPhone] = useState<string>(cookPhone?cookPhone:"");


// ! вход по ссылке почты

const handleSubmit = async (e:any) => {
  e.preventDefault();
  if (phone.trim()) {
    dispatch(setUserPhone(phone))
    closeModal()
  }else{
    console.log("no");
    
  }
};
return (
// ! вход по ссылке почты
  <>
  <div className=" w-[646px] relative rounded-[10px] bg-white py-[80px] px-[90px] shadow-shadow_first ">
  <button onClick={closeModal} className="absolute right-[20px] top-[20px] rotate-45 text-grey_second text-4xl ">+</button>
    <div className="flex flex-col items-center gap-[24px]">
      <p className="font-[MullerBold] text-[32px] text-center pb-[30px]">
        Номер телефона
      </p>
      {/* <p className="text-base text-center pb-[30px]">
        Введите номер телефона, чтобы получить код-подтверждение
      </p> */}
    </div>
    <form onSubmit={handleSubmit} className="flex flex-col  gap-[32px]" action="">

      <input
        className="w-full  rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black "
        type="tel"
        value={phone}
        onChange={(e) => setPhone(`${e.target.value}`)}
        placeholder="введите номер"
      />

      <div className="w-full" id="recaptcha-container"></div>

      <button type="submit" className="w-full h-[60px] rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
        Далее
      </button>
    </form> 
    <div>
    {/* <input
      type="text"
      placeholder="Введите код подтверждения"
      onChange={(e) => setConfirmationResult({ verificationCode: e.target.value })}
    />
    <button onClick={() => handleVerification(confirmationResult?.verificationCode)}>
      Подтвердить код
    </button> */}
  </div>
    <div className="recaptcha-container"></div>
  </div>

</>);
}