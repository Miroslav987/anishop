
import Link from 'next/link'
import React from 'react'

export default function Admin() {
  return (<>
    <p className='text-5xl font-[MullerBold] text-center'>Админка</p>


    <div className='mt-[70px] flex flex-wrap justify-between  gap-[20px] text-2xl'>
      <Link href={`/admin/addproduct`}
        className='px-[35px] py-[25px] bg-grey_first rounded-[10] font-[MullerBold] shadow-[0_0_10px_0_#00000014]'>
        Продукции
      </Link>
      <Link href={``}
        className='px-[35px] py-[25px] bg-grey_first rounded-[10] font-[MullerBold] shadow-[0_0_10px_0_#00000014]'>
        Категории
      </Link>
      <Link href={``}
        className='px-[35px] py-[25px] bg-grey_first rounded-[10] font-[MullerBold] shadow-[0_0_10px_0_#00000014]'>
        Цвета
      </Link>
      <Link href={``}
        className='px-[35px] py-[25px] bg-grey_first rounded-[10] font-[MullerBold] shadow-[0_0_10px_0_#00000014]'>
        Фильтр
      </Link>
      <Link href={``}
        className='px-[35px] py-[25px] bg-grey_first rounded-[10] font-[MullerBold] shadow-[0_0_10px_0_#00000014]'>
        Сортировка
      </Link>

    </div>
  </>
  )
}
