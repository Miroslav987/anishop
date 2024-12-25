"use client"
import React, { useState } from 'react';

export default function SideFilter() {
  // Состояние для каждого фильтра
  const [openFilters, setOpenFilters] = useState<boolean[]>(new Array(5).fill(true)); 
  const toggleFilter = (index: number) => {
    setOpenFilters((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className='w-[166]'>

      {[1, 2, 3].map((index) => (
        <button key={index} className={`flex flex-col mb-[40] overflow-hidden `}>
          <div
            onClick={() => toggleFilter(index)} 
            className='flex justify-between items-center font-[MullerBold] bg-grey_first z-1'
          >
            <span className='pr-[40]'>Категории</span>
            <svg
              className={`transform transition-transform duration-200 ${
                openFilters[index] ? '' : 'rotate-[-90deg]'
              }`}
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M4 6l4 4 4-4" />
            </svg>
          </div>

          <div
            className={`${
              openFilters[index] ? 'translate-y-[0]' : 'translate-y-[-100%] h-0'
            } transform transition-transform mt-[20] duration-200 flex flex-col gap-[10]`}
          >
            <div className='flex gap-[10]'>
              <input className='p-[20] text-[7]' type="checkbox" id={`filter_${index}_1`} name="scales" />
              <label htmlFor={`filter_${index}_1`}>Фильтр 1</label>
            </div>
            <div className='flex gap-[10]'>
              <input type="checkbox" id={`filter_${index}_2`} name="scales" />
              <label htmlFor={`filter_${index}_2`}>Фильтр 1</label>
            </div>
            <div className='flex gap-[10]'>
              <input type="checkbox" id={`filter_${index}_3`} name="scales" />
              <label htmlFor={`filter_${index}_3`}>Фильтр 3</label>
            </div>
            <div className='flex gap-[10]'>
              <input type="checkbox" id={`filter_${index}_4`} name="scales" />
              <label htmlFor={`filter_${index}_4`}>Фильтр 4</label>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

