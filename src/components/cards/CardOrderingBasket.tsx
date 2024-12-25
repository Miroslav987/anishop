import Image from "next/image";
import React from "react";

export default function CardOrderingBasket() {
  return (
    <div >
      <div className="flex gap-[30px] pb-[20px] border-b-2">
        <Image
          src="/images/cardphoto.png"
          width={60}
          height={60}
          className="h-[100%]"
          alt=""
        />
        <div>
            <p className="text-[#1E2128] text-lg font-[MullerBold] ">13 500 сом</p>
            <p className="text-[#1E2128]">IPhone 15 pro Natural Titanium 256 гб</p>
            <p className="text-[#50535A]">
            Количество:
            <br />
            <span >
            12 шт.
            </span>
            </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
