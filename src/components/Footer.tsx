"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer =()=> {
  return (
    <div className='bg-white shadow-[0_-4px_6px_-1px_#0000001a] mt-[120]'  >
        <div className='w-full h-[142] flex items-center justify-between container snap-y'>
            <div>         
                <Image
                src="/logo.svg"
                width={173}
                height={60}
                className="hidden lg:block"
                alt="logo"
            />
                <Image
                src="/logo_adaptive.svg"
                width={26}
                height={44}
                className="block mr-[30] lg:hidden"
                alt="logo"
            />
            </div>
            <div className='flex items-center text-sm'>
                <Link className=' underline' href="">Соглашение о конфиденциальности</Link>
                <div className='w-[2] h-[24] mx-[5] rounded-[10]  bg-grey_third'></div>
                <p>© 2024 upwards</p>
                <div className='w-[2] h-[24] mx-[5] rounded-[10]  bg-grey_third'></div>
                <p>Все права защищены</p>
            </div>
        </div>
    </div>
  )
}

export default Footer