import { useModal } from "@/context/ModalProvider";
import { createAccount } from "@/lib/features/ProductsAPI";
import React, { useState } from "react";

export default function Auth() {
  const [radio, useRadio] = useState(false)
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  
  return (
    <>
      <div className=" w-[646] rounded-[10px] bg-white py-[80] px-[90] shadow-shadow_first ">
        <div className="flex flex-col items-center gap-[24px]">
          <p className="font-[MullerBold] text-[32px] text-center pb-[10px]">
            Регистрация
          </p>
          <p className="text-base text-center pb-[30px]">
            Введите номер телефона, чтобы получить код-подтверждение
          </p>
        </div>
        <form onSubmit={()=>createAccount(email,pass)} className="flex flex-col gap-[32px]" action="">
          <input
            className="w-full  rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            className="w-full  rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black "
            type="tel"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="пароль"
          />
          {/* <div className="flex">
            <input className="w-[25px] h-[25px] " onClick={()=>useRadio(radio ? false : true )} type="radio" id="huey" name="drone" value="familiarized"    />
            <label  form="familiarized" >Я ознакомлен(а) и принимаю настоящие условия использования сервиса</label>
          </div> */}
          <button type="submit" className="w-full h-[60px] rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
            Далее
          </button>
        </form>
      </div>
    </>
  );
}
