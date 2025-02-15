import { useProduct } from '@/lib/features/products/ProductServer'
import { useAppSelector } from '@/lib/hooks'
import React, { useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function SearchCategory() {
      const {  Getcategory,SearchCategory } = useProduct()
      const { category } = useAppSelector(state => state.products)
        useEffect(()=>{
          Getcategory()
        },[])
function handleSearchCategory(e:string) {
  SearchCategory(e)
}
  return (
    <div className={` w-full flex gap-[16px]  font-[MullerBold] overflow-hidden `}>
        <ScrollContainer  vertical={false}  className='w-full py-[5px] flex gap-[16px] md:py-[0px]'>
        <button 
            onClick={()=>SearchCategory('')}
             className={`
                whitespace-nowrap
                flex justify-center items-center 
                py-[16px] px-[30px] h-[48px] rounded-[10px] bg-white
                shadow-[0_0_10px_0_#00000014] hover:invert-[100%] `}>
                  Все
            </button>
            {category.stateCategory ? category.stateCategory.map((e:any,i:number)=>(
            <button key={i}
            onClick={()=>handleSearchCategory(e.search_key)}
             className={`
                whitespace-nowrap
                flex justify-center items-center 
                py-[16px] px-[30px] h-[48px] rounded-[10px] bg-white
                shadow-[0_0_10px_0_#00000014] hover:invert-[100%] `}>
                {e.name}
            </button>
            )):null}
        </ScrollContainer>
    </div>
    
  )
}
