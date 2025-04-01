import {  useBasket } from "@/lib/features/basket/BasketServer";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ product }: any) {

const {AddBasketProduct} = useBasket()

function basketadd(e:any) {
    e.preventDefault()
    const basketproduct = {
      name:product.name,
      id:product.id,
      extraId: product.extraProduct[0].id,
      characteristics:product.extraProduct[0].characteristics,
      img:product.extraProduct[0].images[0],
      price:product.extraProduct[0].price,
      quantity:1,
      maxquantity:product.extraProduct[0].quantity,
    }
    AddBasketProduct(basketproduct)
  }

  

  return (
    <Link className="mx-[20px] md:mx-0" href={`/carddetails/${encodeURIComponent(product.id)}`}>
      <div className="relative flex flex-col justify-between  w-full h-[326px] p-[18px] rounded-[10px] bg-white shadow-[0_0_10px_0_#00000014]  ">
        <button type="button" onClick={(e)=>basketadd(e)} className="absolute top-[10px] left-[18px] flex justify-center items-center bg-grey_first rounded-[10px]  w-[36px] h-[32px] p-[5px]  hover:invert-[100%]">
          <svg width="15" height="15" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25 1.25H1.63016C2.30134 1.25 2.63753 1.25 2.91128 1.37109C3.15264 1.47786 3.359 1.64975 3.50781 1.86772C3.67632 2.11453 3.73716 2.4441 3.85861 3.10197L6.91672 19.6667L21.6809 19.6667C22.3229 19.6667 22.6449 19.6667 22.9109 19.5532C23.1458 19.453 23.3484 19.2907 23.4989 19.0843C23.669 18.851 23.7411 18.5386 23.8851 17.9144L23.8862 17.9099L26.1093 8.27661L26.1098 8.27459C26.3283 7.32772 26.4378 6.85314 26.3175 6.48088C26.212 6.15425 25.99 5.87732 25.6954 5.70105C25.3595 5.5 24.874 5.5 23.9007 5.5H4.79167M22.5 26.75C21.7176 26.75 21.0833 26.1157 21.0833 25.3333C21.0833 24.5509 21.7176 23.9167 22.5 23.9167C23.2824 23.9167 23.9167 24.5509 23.9167 25.3333C23.9167 26.1157 23.2824 26.75 22.5 26.75ZM8.33333 26.75C7.55093 26.75 6.91667 26.1157 6.91667 25.3333C6.91667 24.5509 7.55093 23.9167 8.33333 23.9167C9.11574 23.9167 9.75 24.5509 9.75 25.3333C9.75 26.1157 9.11574 26.75 8.33333 26.75Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </button>
        <button className="absolute  right-[10px] top-[10px] w-[116px] h-[32px]  rounded-[10px] bg-grey_first  hover:invert-[100%]">
          <p className="text-xs text-center">Купить сейчас</p>
        </button>

        {product.extraProduct[0] ?
          <>
            <div>
              <div className="flex justify-center">
                             <Image
                                src={product.extraProduct[0].images[0]}
                                width={150}
                                height={140}
                                className="object-contain w-full h-[140px]"
                                priority={true}
                                alt={product.extraProduct[0].images[0]}
                              />

              </div>
              <div className="" >
                <p className="text-base font-black pb-[10px] pt-[15px] ">{product.name}</p>
                {product.extraProduct[0].characteristics[0] ? product.extraProduct[0].characteristics.slice(0, 3).map((characteristic: any) =>
                  <p className=" text-grey_second text-sm" key={characteristic.name}>{characteristic.name}: {characteristic.info}</p>
                ) : null}
              </div>
            </div>
            <div className="  bottom-[18px] left-[18px] flex h-[41px] pt-[18px]  items-center justify-between ">
              <p>{product.extraProduct[0].price} сом</p>
              {product.extraProduct[0].sale ?
                <p className="w-[51px] h-[41px] text-base flex items-center justify-center rounded-[100px] text-green_first bg-green_second ">{product.extraProduct[0].sale}%</p>
                : null}
            </div>
          </>
          : null}
      </div>

    </Link>
  );
}
