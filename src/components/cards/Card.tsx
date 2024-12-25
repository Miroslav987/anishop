import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({e}:any) {
  console.log(e);
  
  
  return (
    <Link href={`carddetails`}>
    <div className="relative  w-[291px] h-[326px] p-[18] rounded-[10] bg-white shadow-[0_0_10px_0_#00000014]">
      <button className="absolute top-[10] left-[18] flex justify-center items-center bg-grey_first rounded-[10]  w-[36] h-[32] p-[5]  hover:invert-[100%]">
      <svg width="15" height="15" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.25 1.25H1.63016C2.30134 1.25 2.63753 1.25 2.91128 1.37109C3.15264 1.47786 3.359 1.64975 3.50781 1.86772C3.67632 2.11453 3.73716 2.4441 3.85861 3.10197L6.91672 19.6667L21.6809 19.6667C22.3229 19.6667 22.6449 19.6667 22.9109 19.5532C23.1458 19.453 23.3484 19.2907 23.4989 19.0843C23.669 18.851 23.7411 18.5386 23.8851 17.9144L23.8862 17.9099L26.1093 8.27661L26.1098 8.27459C26.3283 7.32772 26.4378 6.85314 26.3175 6.48088C26.212 6.15425 25.99 5.87732 25.6954 5.70105C25.3595 5.5 24.874 5.5 23.9007 5.5H4.79167M22.5 26.75C21.7176 26.75 21.0833 26.1157 21.0833 25.3333C21.0833 24.5509 21.7176 23.9167 22.5 23.9167C23.2824 23.9167 23.9167 24.5509 23.9167 25.3333C23.9167 26.1157 23.2824 26.75 22.5 26.75ZM8.33333 26.75C7.55093 26.75 6.91667 26.1157 6.91667 25.3333C6.91667 24.5509 7.55093 23.9167 8.33333 23.9167C9.11574 23.9167 9.75 24.5509 9.75 25.3333C9.75 26.1157 9.11574 26.75 8.33333 26.75Z" stroke="#1E2128" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      </button>
      <button className="absolute  right-[10] top-[10] w-[116] h-[32]  rounded-[10] bg-grey_first  hover:invert-[100%]">
        <p className="text-xs text-center">Купить сейчас</p>
      </button>
    
      <div className="flex justify-center">
        <Image 
          src={""}
          width={115}
          height={140}
          className=""
          alt="logo"
        />
      </div>

      <div>
        <p className="text-base font-black pb-[10] pt-[15] ">{e.name}</p>
        <p className=" text-grey_second text-sm">Экологичные материалы</p>
        <p className=" text-grey_second text-sm">Nano sim, e-sim</p>
        <p className=" text-grey_second text-sm">3 цвета</p>
      </div>
      <div className="flex h-[41] pt-[18] items-center justify-between ">
        <p>{e.price} сом</p>
       { e.sale ? 
        <p className="w-[51] h-[41] flex items-center justify-center rounded-[100] text-green_first bg-green_second ">{e.sale}%</p>
       :null} 
      </div>
    </div>
    </Link>
  );
}
