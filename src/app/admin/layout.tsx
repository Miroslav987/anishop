import Link from 'next/link';
import React from 'react'

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
  return (
    <div className='w-full  rounded-[10] bg-white px-[40] pt-[40] pb-[60] shadow-[0_0_10px_0_#00000014] container '>
       {children}
    </div>
  )
}
