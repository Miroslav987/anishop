import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function SearchCategory() {
    const category = ['Все','Смартфоны','Ноутбуки','Бытовая техника','Умный дом','Аксессуары для ПК','Ноутбуки']

  return (
    <div className={` w-full flex gap-[16]  mb-[50] font-[MullerBold] overflow-hidden `}>
        <ScrollContainer  vertical={false}  className='w-full flex gap-[16] '>
            {category.map((e)=>(
            <button className={`
                whitespace-nowrap
                flex justify-center items-center 
                py-[16] px-[30] h-[48] rounded-[10] bg-white
                shadow-[0_0_10px_0_#00000014] hover:invert-[100%] `}>
                {e}
            </button>
            ))}
        </ScrollContainer>
    </div>
    
  )
}
