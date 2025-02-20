import Link from 'next/link'
import React from 'react'

export default function DeleteCard() {
  return (
    <div className='w-full fixed z-2 inset-0 backdrop-blur-[10px] flex items-center justify-center '>
        <div className=' w-[646px] rounded-[10px] py-[80px] px-[90px] bg-white shadow-[0_0_10px_0_#00000014]'>
            <p className='  font-[MullerBold] text-[26px] text-center pb-[48px]'>Удалить товар “IPhone 15 pro Natural Titanium 256 гб”?</p>
            <div className='flex gap-[48px] h-[60px] justify-between'>
            <Link
             href={"/basket/"}
             className='w-full rounded-[10px] border-black bg-black border text-white hover:bg-white hover:text-black'>
                <button >
                    Отменить
                </button>
            </Link>
            <Link
             href={"/basket/?completedclearbasket=true"}
             className='w-full rounded-[10px] border-black border-2 hover:bg-black hover:text-white'>
                <button >Удалить</button>
            </Link>
            </div>
        </div>
    </div>
  )
}
