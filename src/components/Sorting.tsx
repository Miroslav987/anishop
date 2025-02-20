import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

export default function Sorting() {
  const searchParams = useSearchParams();
  const router = useRouter()
  const [checkInp , setCheckInp] = useState(searchParams.get('sort') || 'asc')
  function handleSort(e: any) {
    setCheckInp(e)
    if (e !== "asc" && e !== "desc") {
      return router.push(`/?sort=${e}&category=${searchParams.get('category') || 'all'}`);
    }
    router.push(`/?sort=${e}&category=${searchParams.get('category') || "all"}`);
  }

  return (
    <>
      <div className="w-[215px] pb-[20px] relative group/item">
        <div className="flex gap-[5px] ">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 17H10M4 12H13M18 11V19M18 19L21 16M18 19L15 16M4 7H16" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>Сортировка</p>
        </div>
        <div className="absolute group/edit invisible group-hover/item:visible top-[25px] py-[20px] px-[20px] z-10 rounded-[10px] bg-white shadow-shadow_first">
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[5px]">
              <input id="up_price" name="sort" checked={checkInp == "asc"} value="asc" onChange={(e) => handleSort(e.target.value)} type="radio"  className="w-[18px]" />
              <label htmlFor="up_price" className="flex gap-[5px] text-sm">По возрастанию цены</label>
            </div>
            <div className="flex gap-[5px]">
              <input id="down_price" name="sort" checked={checkInp == "desc"}  value="desc" onChange={(e) => handleSort(e.target.value)} type="radio" className="w-[18px]" />
              <label htmlFor="down_price" className="flex gap-[5px] text-sm">По убыванию цены</label>
            </div>
            <div className="flex gap-[5px]">
              <input id="sale" name="sort" checked={checkInp == "sale"}  value="sale" onChange={(e) => handleSort(e.target.value)} type="radio" className="w-[18px]" />
              <label htmlFor="sale" className="flex gap-[5px] text-sm">Сначала выгодные</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
