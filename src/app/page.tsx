"use client";
import SideFilter from "../components/SideFilter";
import Card from "../components/cards/Card";
import SearchCategory from "../components/SearchCategory";
import { useEffect, useRef, useState } from "react";
import Sorting from "../components/Sorting";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/lib/hooks";
import { auth } from "@/lib/fire";
import { onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useProduct } from "@/lib/features/products/ProductServer";


export default function Home() {
  const { GetProducts } = useProduct()
  const { products } = useAppSelector(state => state.products)



  useEffect(() => {
    if (typeof window !== 'undefined') {
      GetProducts()
    }
  }, []);



  return (
    <>
      <div className="flex justify-between gap-[50px] container   ">
        <SideFilter />
        <div className="w-full  flex flex-col overflow-hidden ">
          <div className="flex flex-col gap-[34px] px-[20px] md:px-0 md:gap-[50px]">
            <SearchCategory />
            <Sorting />
          </div>
          <div className="w-full grid gap-[20px] grid-cols-1  sm:grid-cols-2 md:grid-cols-3">
            {products ? products.map((e: any) => (
              <Card key={e.id} product={e} />
              // console.log(e)

            )) :
              <p>Пусто</p>
            }
          </div>

          <button className=" w-[264px] h-[48px] rounded-[10px] m-auto mt-[40px] bg-black text-white">
            Загрузить еще
          </button>
        </div>
      </div>
    </>
  );
}
