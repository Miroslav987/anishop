
import Link from 'next/link'
import React from 'react'

export default function Admin() {
  return (<>
    <p className='text-5xl font-[MullerBold] text-center'>Админка</p>

    <div className='mt-[70px] flex flex-wrap justify-center px-[20px] md-0 gap-[20px] text-2xl'>
      <Link href={`/dealer/add_product`}
        className='w-full md:w-auto  px-[35px] py-[25px] bg-grey_first  rounded-[10px] font-[MullerBold] shadow-[inset_0_0_10px_0_#00000014]'>
        Продукция
      </Link>

      <Link href={`/admin/crud_category`}
        className='w-full md:w-auto  px-[35px] py-[25px] bg-grey_first   rounded-[10px] font-[MullerBold] shadow-[inset_0_0_10px_0_#00000014]'>
        Категории 
      </Link>

      <Link href={`/admin/users_list`}
        className='w-full md:w-auto  px-[35px] py-[25px] bg-grey_first rounded-[10px] font-[MullerBold] shadow-[inset_0_0_10px_0_#00000014]'>
      пользователи
      </Link>


    </div>
  </>
  )
}
