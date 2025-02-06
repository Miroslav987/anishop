
import { useModal } from "@/context/ModalProvider";
import { useAuth } from "@/lib/features/user/UserServer";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Exite() {
  const { closeModal } = useModal();
  const {Logout} = useAuth()
  return (
    <>
      <div className=" w-[646px] rounded-[10px] bg-white py-[80px] px-[90px]">
        <p className=" font-[MullerBold] text-[26px] text-center pb-[48px]">
          Выход
        </p>
        <div className="flex gap-[48px] h-[60px] justify-between">
          <button
            onClick={closeModal}
            className="w-full rounded-[10px] border-black bg-black border text-white hover:bg-white hover:text-black"
          >
            Отмена
          </button>

          <button onClick={Logout} className="w-full rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
            Выйти
          </button>
        </div>
      </div>
    </>
  );
}
