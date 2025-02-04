'use client'
import Link from 'next/link'
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  // const router = useRouter()
  // const {profile} = router.query;
  //   console.log(profile);
    
  return (
    <div className='container'>
    <div className='flex gap-[10px] mb-[30px] items-center'>
        <Link href="/">Главная</Link>
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p>Профиль</p>
      </div>
    <div className='w-full  rounded-[10px] bg-white px-[40px] pt-[50px] pb-[30px] shadow-[0_0_10px_0_#00000014]'>
      {children}
    </div>
  </div>
  )
}
