import { useProduct } from '@/lib/features/products/ProductServer'
import { useSearch } from '@/lib/features/search/SearchesServer'
import { useAppSelector } from '@/lib/hooks'
import clsx from 'clsx'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function SearchCategory() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const { Getcategory } = useSearch()
  const { category } = useAppSelector(state => state.searches)
  const [btnFocus, setBtnFocus] = useState<string>('all')
  useEffect(() => {
    Getcategory()
  }, [])

  function handleSearchCategory(e: string) {
    router.push(`/?sort=${searchParams.get('sort') || 'asc'}&category=${e}`);
  }
  return (
    <div className={` w-full flex gap-[16px]  font-[MullerBold] overflow-hidden `}>
      <ScrollContainer vertical={false} className='w-full py-[5px] flex gap-[16px] md:py-[0px]'>
        <button
          onClick={() => { handleSearchCategory('all'), setBtnFocus('all') }}
          className={clsx(`
            whitespace-nowrap
            flex justify-center items-center 
            py-[16px] px-[30px] h-[48px] rounded-[10px] bg-white
            shadow-[0_0_10px_0_#00000014] hover:invert-[100%] checked:invert-[100%] `,
            {
              'invert-[100%]': btnFocus === "all"
            }

          )}>
          Все
        </button>
        {category.stateCategory ? category.stateCategory.map((e: any, i: number) => (
          <button key={i}
            onClick={() => { handleSearchCategory(e.search_key), setBtnFocus(e.search_key) }}
            className={clsx(`
              whitespace-nowrap
              flex justify-center items-center 
              py-[16px] px-[30px] h-[48px] rounded-[10px] bg-white
              shadow-[0_0_10px_0_#00000014] hover:invert-[100%] checked:invert-[100%] `,
              {
                'invert-[100%]': e.search_key === btnFocus
              }
            )}>
            {e.name}
          </button>
        )) : null}
      </ScrollContainer>
    </div>

  )
}
