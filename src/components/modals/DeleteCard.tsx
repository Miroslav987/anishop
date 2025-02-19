
import { useModal } from "@/context/ModalProvider";
import { useProduct } from "@/lib/features/products/ProductServer";
import { useAuth } from "@/lib/features/user/UserServer";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function DeleteCard({id,extraProduct}:any) {
  const { closeModal } = useModal();
  const {DeleteProduct} = useProduct()
  return (
    <>
      <div className=" w-[650px] rounded-[10px] bg-white py-[80px] px-[90px]">
        <p className=" font-[MullerBold] text-[26px] text-center pb-[48px]">
          Вы точно хотите удалить этот товар ?
        </p>
        <div className="flex gap-[48px] h-[60px] justify-between">
          <button
            onClick={closeModal}
            className="w-full rounded-[10px] border-black bg-black border text-white hover:bg-white hover:text-black"
          >
            Отмена
          </button>

          <button onClick={()=>DeleteProduct(id,extraProduct)} className="w-full rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
            Удалить
          </button>
        </div>
      </div>
    </>
  );
}
