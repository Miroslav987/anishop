"use client"
import React, { useState } from 'react';

export default function SideFilter() {


  return (
    <div className='w-[166] flex flex-col gap-[20px]'>


      <div className='accordion'>

        <details className='accordion__details'>
          <summary className='accordion__summary font-[MullerBold] text-lg '>
            Категории
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M4 6l4 4 4-4" />
            </svg>
          </summary>
        </details>

        <div className='accordion__content '>
          <div className='accordion__content__body flex flex-col gap-[10px]'>

            <div className='flex items-center gap-[10]'>
              <input className='p-[20] text-[7]' type="checkbox" id={`filter_1`} name="scales" />
              <label htmlFor={`filter_1`}>Фильтр 1</label>
            </div>

            <div className='flex items-center gap-[10]'>
              <input className='p-[20] text-[7]' type="checkbox" id={`filter_1`} name="scales" />
              <label htmlFor={`filter_1`}>Фильтр 1</label>
            </div>

            <div className='flex items-center gap-[10]'>
              <input className='p-[20] text-[7]' type="checkbox" id={`filter_1`} name="scales" />
              <label htmlFor={`filter_1`}>Фильтр 1</label>
            </div>

          </div>
        </div>

      </div>
      <div className='accordion'>

        <details className='accordion__details'>
          <summary className='accordion__summary font-[MullerBold] text-lg '>
            Категории
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M4 6l4 4 4-4" />
            </svg>
          </summary>
        </details>

        <div className='accordion__content '>
          <div className='accordion__content__body flex flex-col gap-[10px]'>

            <div className='flex items-center gap-[10]'>
              <input className='p-[20] text-[7]' type="checkbox" id={`filter_1`} name="scales" />
              <label htmlFor={`filter_1`}>Фильтр 1</label>
            </div>

            <div className='flex items-center gap-[10]'>
              <input className='p-[20] text-[7]' type="checkbox" id={`filter_1`} name="scales" />
              <label htmlFor={`filter_1`}>Фильтр 1</label>
            </div>

            <div className='flex items-center gap-[10]'>
              <input className='p-[20] text-[7]' type="checkbox" id={`filter_1`} name="scales" />
              <label htmlFor={`filter_1`}>Фильтр 1</label>
            </div>

          </div>
        </div>

      </div>


    </div>
  );
}

