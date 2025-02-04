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
  const {GetProducts} = useProduct()
  const { products } = useAppSelector(state => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    GetProducts(dispatch)
  }, []);

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
            {products ? products.map((e: any) => (
              <Card e={e} />
              // console.log(e)
              
              )) :
               <p>Пусто</p>
            }
          </div>

          <button className=" w-[264px] h-[48] rounded-[10] m-auto mt-[40] bg-black text-white">
            Загрузить еще
          </button>
        </div>
      </div>
    </>
  );
}
