import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function CardBasket() {
let [number,useNumber] = useState<number>(1)



  return (
    <div className='relative  z-0 w-[218]'>
      <Link href='/basket/?deletecard=true'>
      <button className='absolute top-[10px] right-[10px] w-[36px] h-[32px] rounded-[10px] bg-grey_first shadow-[0_0_4px_0_#00000029]'>
        <svg className='m-auto' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      </Link>
        <div className=' rounded-[20] border-2 px-[30] py-[10]'>
        <Image
              src="/images/cardphoto.png"
              width={220}
              height={220}
              className=""
              alt="logo"
              style={{width:'100%'}}
        />     
        </div>
        <p className='pt-[20] font-[MullerBold]'>130500 сом</p>
        <p className='py-[16] text-sm text-black'>IPhone 15 pro Natural Titanium 256 гб</p>
        <div>
          <p className='text-grey_second pb-[6]'>Количество:</p>
          <div className='w-full h-[38] flex justify-between gap-[15.5]'>
          <button onClick={()=>useNumber(prev => prev - 1)} className='w-full text-[#A7ABAD] border rounded-[10] flex items-center justify-center hover:text-black hover:border-black'>
            <span className=' pb-[7]  font-sans text-3xl'>-</span>
          </button>
            <div className='w-full  flex items-center justify-center border rounded-[10] border-black'>
              {/* <h6 className='text-sm font-[MullerBold]'>
              {number} шт
              </h6> */}
              <input type="number"
               maxLength={2}
               value={number}
               onChange={(e)=>useNumber(+e.target.value.length !== 3? +e.target.value: number)}
               className='w-full whitespace-nowrap  text-center focus: outline-none p-0 after:content-["шт"] after:ml-0.5 after:text-red-500'
               />
               {/* <span>шт</span> */}
              </div>
              <button onClick={()=>useNumber(prev => prev + 1)} className="w-full text-[#A7ABAD] border rounded-[10px] flex items-center justify-center hover:text-black hover:border-black">
                <span className=" pb-[7] font-sans text-3xl">+</span>
              </button>

          </div>
        </div>
    </div>
  )
}
