import { useBasket } from '@/lib/features/basket/BasketServer'
import { useAppSelector } from '@/lib/hooks'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function CardBasket({ product }: any) {
  const { DeleteBasketProduct, PlusQuanty, MinusQuanty } = useBasket()

  return (
    <div className='relative gap-[16px] z-0 w-full md:w-[218px] '>
      <div className='flex gap-[16px] flex-row md:flex-col'>
          <div className='flex items-center justify-center rounded-[20px] border-2 px-[30px] py-[10px] md:px-[15px]'>
            <Link href={`/carddetails/${encodeURIComponent(product.id)}`}>
              <img src={product.img} alt=""
                className='h-[60px] md:h-[120px] '
              />
            </Link>
          </div>
        <div className=''>
        <p className='pt-[20px] font-[MullerBold]'>{+product.price * +product.quantity} сом</p>
        <p className='py-[16px] text-sm text-black'>{product.name}</p>
        </div>
      </div>
        <p className='text-grey_second pb-[6px] pt-[10px] md:pt-0'>Количество:</p>
      <div className='w-full flex gap-[10px] items-center'>
        <button onClick={() => DeleteBasketProduct(product.extraId)} className='static top-[10px] right-[10px] w-[110px] md:w-[36px] h-[32px] rounded-[10px] bg-grey_first shadow-[0_0_4px_0_#00000029] md:absolute md:mt-[0px]'>
          <svg className='m-auto' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className='w-full h-[38px] flex justify-between gap-[10px] md:gap-[15.5px]'>
          <button type="button" onClick={() => MinusQuanty(product.extraId)} className='w-full text-[#A7ABAD] border rounded-[10px] flex items-center justify-center hover:text-black hover:border-black'>
            <span className=' pb-[7px]  font-sans text-3xl'>-</span>
          </button>
          <div className='w-full  flex items-center justify-center border rounded-[10px] border-black'>

            <input type="number"
              maxLength={2}
              value={product.quantity}
              className='w-full whitespace-nowrap  text-center focus: outline-none p-0 after:content-["шт"] after:ml-0.5 after:text-red-500'
            />
          </div>
          <button type="button"
           onClick={() => PlusQuanty(product.extraId)} className="w-full text-[#A7ABAD] border rounded-[10px] flex items-center justify-center hover:text-black hover:border-black">
            <span className=" pb-[7px] font-sans text-3xl">+</span>
          </button>
        </div>
      </div>
    </div>
  )
}
