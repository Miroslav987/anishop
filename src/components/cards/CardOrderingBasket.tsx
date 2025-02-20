import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardOrderingBasket({product}:any) {
  return (
    <Link className="w-full flex justify-start gap-[10px] md:gap-[30px] pb-[20px] border-b-2" href={`/carddetails/${encodeURIComponent(product.id)}`}>

      <div className="h-[100px]">
        <img className="w-[100px]" src={product.extraProduct[0].images[0]} alt="" />
        </div>
        <div className="">
          <div>
            <p className="text-[#1E2128] text-lg font-[MullerBold] ">{product.price} сом</p>
            <p className="text-[#1E2128]">{product.name}</p>
            </div>
            <p className="text-[#50535A]">
            Количество:
            <br />
            <span >
            {product.extraProduct[0].quantity} ШТ.
            </span>
            </p>
        </div>
    
    </Link>
  );
}
