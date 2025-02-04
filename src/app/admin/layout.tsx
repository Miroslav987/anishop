import Link from 'next/link';
import React from 'react'

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
  return (
    <div className='w-full  rounded-[10px] bg-white px-[40px] pt-[40px] pb-[60px] shadow-[0_0_10px_0_#00000014] container '>
       {children}
    </div>
  )
}
