import { useModal } from '@/context/ModalProvider';
import { useProduct } from '@/lib/features/products/ProductServer'
import { useSearch } from '@/lib/features/search/SearchesServer'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CardOrderingBasket from './cards/CardOrderingBasket';
import clsx from 'clsx';
import { useAppSelector } from '@/lib/hooks';





export default function Search() {
  const router = useRouter();
  const { openModal, closeModal } = useModal()
  const { Search } = useSearch()
  const { search_products } = useAppSelector(state => state.searches)

  const [search, setSearch] = useState<string>('')
  const [searchStatus, setSearchStatus] = useState<boolean>(false)




  const handleSearchChange = (e: string) => {
    setSearch(e)
  };


  useEffect(() => {
    Search(search)

  }, [search])
  useEffect(() => {
    if (search_products.length > 0 ) {
      openModal(() => {}, true)
      setSearchStatus(true)
    }else{
      closeModal()
      setSearchStatus(false)
    }

  }, [search_products.length ])

  return (
    <div className={clsx(`relative w-full md:w-[38%] block`)}>
      <div className='w-full h-[54px] flex items-center  '>
        <input className='relative w-[100%] h-[100%] pl-[64px]  bg-grey_first  rounded-[10px] focus:z-24 '
          placeholder='Поиск'
          type="text"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <svg className='absolute  left-[20px] ' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.6667 17.6667L26 26M10.7222 20.4444C5.35279 20.4444 1 16.0917 1 10.7222C1 5.35279 5.35279 1 10.7222 1C16.0917 1 20.4444 5.35279 20.4444 10.7222C20.4444 16.0917 16.0917 20.4444 10.7222 20.4444Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {search_products.length > 0 && searchStatus ?
        <div className={clsx(`w-max md:w-[50vw] h-[80vh] md:h-[60vh]  absolute inset-0 right-[100%]  top-[80px] z-30  rounded-[10px] bg-white py-[40px] md:py-[80px] px-[20px] md:px-[60px]`, { "hidden": !search_products })}>
          <div className="w-full h-full flex flex-col items-start gap-[10px] scroll_style overflow-y-scroll">
            {search_products.map((e: any, i: number) => (
             <div className='w-full' onClick={()=>{ setSearchStatus(false), closeModal() }}> <CardOrderingBasket key={i} product={e} /></div>
            ))}
          </div>
        </div>
        : null}
    </div>
  )
}
