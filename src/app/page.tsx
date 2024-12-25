"use client";
import SideFilter from "../components/SideFilter";
import Card from "../components/cards/Card";
import SearchCategory from "../components/SearchCategory";
import { useEffect, useRef, useState } from "react";
import Sorting from "../components/Sorting";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/lib/hooks";
// import { GetProducts } from "@/lib/features/ProductsAPI";
// import { checkAuthState, LogInViaLink } from "@/lib/features/AuthSlice";


export default function Home() {
  const dispatch = useDispatch()
  const {products ,status} = useAppSelector(state => state.products)
  
  useEffect(()=>{
    // checkAuthState(dispatch)
 
    // GetProducts(dispatch)
  },[])
  

  return (
    <>
      <div className="flex justify-between gap-[50] container px-[20] lg:px-0 ">
        <SideFilter />
        <div className="  flex flex-col overflow-hidden ">
          <div>
            <SearchCategory />
          </div>
          <Sorting />
          <div className="w-full flex flex-wrap gap-[20] justify-between">
          {products ? products.map((e: any)=>(
              <Card e={e} />
          )):<p>Пусто</p>}
           
            <button className=" w-[264px] h-[48] rounded-[10] m-auto mt-[40] bg-black text-white">
              Загрузить еще
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
