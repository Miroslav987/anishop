// components/HomePage.tsx
"use client";  // Указываем, что это клиентский компонент

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Setproducts } from "@/lib/features/products/ProductsSlice";
import SideFilter from "../SideFilter";
import SearchCategory from "../SearchCategory";
import Sorting from "../Sorting";
import Card from "../cards/Card";

const HomePage = ({ productsSearch }: { productsSearch: any[] }) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(Setproducts(productsSearch));
  }, [productsSearch, dispatch]);

  return (
    <div className="flex justify-between gap-[50px] container">
      <SideFilter />
      <div className="w-full flex flex-col overflow-hidden">
        <div className="flex flex-col gap-[34px] px-[20px] md:px-0 md:gap-[50px]">
          <SearchCategory />
          <Sorting/>
        </div>
        <div className="w-full grid gap-[20px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products ? products.map((e: any) => (
            <Card key={e.id} product={e} />
          )) : <p>Пусто</p>}
        </div>

        <button className="w-[264px] h-[48px] rounded-[10px] m-auto mt-[40px] bg-black text-white">
          Загрузить еще
        </button>
      </div>
    </div>
  );
};

export default HomePage;
