"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer =()=> {
  return (
    <footer className='mt-[120px]'>
    <nav className='bg-white shadow-[0_-4px_6px_-1px_#0000001a] mt-[120px] mb-[84px] md:mb-0 hidden md:block'  >
        <div className='w-full h-[142px] flex items-center justify-between container snap-y'>
            <div>         
                <Image
                src="/logo.svg"
                width={200}
                height={55}
                className="hidden  lg:block"
                alt="logo"
                priority
            />
                <Image
                src="/logo_adaptive.svg"
                width={26}
                height={44}
                className="block mr-[30px] lg:hidden"
                alt="logo"
                priority
            />
            </div>
            <div className='flex items-center text-sm'>
                <Link className=' underline' href="">Соглашение о конфиденциальности</Link>
                <div className='w-[2px] h-[24px] mx-[5px] rounded-[10px]  bg-grey_third'></div>
                <p>© 2025 Miro</p>
                <div className='w-[2px] h-[24px] mx-[5px] rounded-[10px]  bg-grey_third'></div>
                <p>Все права защищены</p>
            </div>
        </div>
    </nav>
    </footer>
  )
}

export default Footer