"use client";

import { useModal } from "@/context/ModalProvider";
import { useAuth } from "@/lib/features/user/UserServer";
import { auth } from "@/lib/fire";
import { ApplicationVerifier, onAuthStateChanged, RecaptchaVerifier, sendSignInLinkToEmail, signInWithPhoneNumber } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import React, {  useEffect, useState } from "react";

export default function AuthEmail() {
  const {sendSignInLink} = useAuth()
      const {closeModal} = useModal()
  const [email, setEmail] = useState<string>('');
console.log(email);


// ! вход по ссылке почты

const handleSubmit = async (e:any) => {
  e.preventDefault();
  sendSignInLink(email)
};
const [user, setUser] = useState<any>(null);
const [isMounted, setIsMounted] = useState(false); // Флаг для проверки монтирования компонента
const router = useRouter();
const pathname = usePathname(); // Получаем текущий путь

useEffect(() => {
  setIsMounted(true); // Устанавливаем флаг, что компонент смонтирован

  // Слушаем изменения состояния аутентификации
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user); // Обновляем состояние с пользователем
      // Перенаправляем на панель управления, если пользователь зашел на страницу логина
      if (pathname === '/login') {
        router.push('/');
      }
    } else {
      setUser(null); // Если пользователь не авторизован, сбрасываем состояние
      // Перенаправляем на страницу логина, если не на странице входа
      if (pathname !== '/login') {
        alert("нет")
        // router.push('/login');
      }
    }
  });
  
  // Очистка слушателя при размонтировании компонента
  return () => unsubscribe();
}, []); // Зависимость от pathname и router

console.log(user);
if (!isMounted) { // Возвращаем null до тех пор, пока компонент не смонтирован
  return null;
}

// ! вход по ссылке почты
  return (
    <>
      <div className=" w-[646px] rounded-[10px] bg-white py-[80px] px-[90px] shadow-shadow_first ">
      <button onClick={closeModal} className="absolute right-[20px] top-[20px] rotate-45 text-grey_second text-4xl ">+</button>
        <div className="flex flex-col items-center gap-[24px]">
          <p className="font-[MullerBold] text-[32px] text-center pb-[10px]">
            Регистрация
          </p>
          <p className="text-base text-center pb-[30px]">
            Введите номер телефона, чтобы получить код-подтверждение
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col  gap-[32px]" action="">

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

    </>
  );
}

          {/* <div className="flex">
            <input className="w-[25px] h-[25px] " onClick={()=>useRadio(radio ? false : true )} type="radio" id="huey" name="drone" value="familiarized"    />
            <label  form="familiarized" >Я ознакомлен(а) и принимаю настоящие условия использования сервиса</label>
          </div> */}