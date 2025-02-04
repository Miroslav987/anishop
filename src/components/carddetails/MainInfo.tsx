import React from "react";

export default function MainInfo() {
  return (
    <div>
      <h3 className="w-[300px] flex items-center gap-[17.5px] text-[24px] ">
        IPhone 15 pro{" "}
          <p className="w-[51px] h-[41px] text-base flex items-center justify-center rounded-[100] text-green_first bg-green_second">
            -15%
          </p>
      </h3>
      <p className="text-[24px]">13500сом</p>
      <div className="mt-[32px]">
        <p className="text-grey_second pb-[6px]">Память:</p>
        <div className="flex gap-[10px]">
            <button className="border rounded-radius py-[12] px-[20px] font-[MullerBold]">256 гб</button>
            <button className="border rounded-radius py-[12] px-[20px] font-[MullerBold]">256 гб</button>
            <button className="border rounded-radius py-[12] px-[20px] font-[MullerBold]">256 гб</button>
        </div>
      </div>

      <div className="mt-[32px]">
        <p className="text-grey_second pb-[6px]">Цвет:</p>
        <div className="flex gap-[10px]">
            <button className="w-[44px] h-[44px] rounded-full bg-black hover:scale-105 duration-100"></button>
            <button className="w-[44px] h-[44px] rounded-full bg-black hover:scale-105 duration-100"></button>
            <button className="w-[44px] h-[44px] rounded-full bg-black hover:scale-105 duration-100"></button>
            <button className="w-[44px] h-[44px] rounded-full bg-black hover:scale-105 duration-100"></button>
        </div>
      </div>
      
      <div>
        <button>Товар в корзине!</button>
        <button>Купить сейчас</button>
      </div>
    </div>
  );
}
