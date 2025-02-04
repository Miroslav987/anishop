import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function SearchCategory() {
    const category = ['Все','Смартфоны','Ноутбуки','Бытовая техника','Умный дом','Аксессуары для ПК','Ноутбуки']

  return (
    <div className={` w-full flex gap-[16px]  mb-[50px] font-[MullerBold] overflow-hidden `}>
        <ScrollContainer  vertical={false}  className='w-full flex gap-[16px] '>
            {category.map((e,i)=>(
            <button key={i} className={`
              
                whitespace-nowrap
                flex justify-center items-center 
                py-[16px] px-[30px] h-[48px] rounded-[10px] bg-white
                shadow-[0_0_10px_0_#00000014] hover:invert-[100%] `}>
                {e}
            </button>
            ))}
        </ScrollContainer>
    </div>
    
  )
}
