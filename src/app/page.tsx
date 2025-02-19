
'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Setproducts } from '@/lib/features/products/ProductsSlice';
import { db } from '@/lib/fire';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { useSearchParams } from 'next/navigation'; // Используем хук для параметров URL
import SideFilter from '../components/SideFilter';
import Card from '../components/cards/Card';
import SearchCategory from '../components/SearchCategory';
import Sorting from '../components/Sorting';
import { useProduct } from '@/lib/features/products/ProductServer';
import CardLoad from '@/components/cards/CardLoad';

const fetchProducts = async (sort: any, category: string) => {
  let productsSearch: any[] = [];

  const queryConstraints: any[] = [
    ...(category && category !== 'all' ? [where('category', '==', category)] : []),
    ...(sort !== "sale" ? [orderBy('price', sort)] : [orderBy('sale', "desc")]),
  ];

  const q = query(collection(db, 'products'), ...queryConstraints);

  const snapshot = await getDocs(q);
  productsSearch = snapshot.docs.map(doc => doc.data());

  return productsSearch;
};


const HomePage = () => {
  const dispatch = useAppDispatch();
  const { GetProducts } = useProduct();
  const { products } = useAppSelector(state => state.products);
  const searchParams = useSearchParams();
  const sort: any = searchParams.get('sort') || 'asc';
  const category = searchParams.get('category') || 'all';

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts(sort, category);
      dispatch(Setproducts(fetchedProducts));
    };
    fetchData();

  }, [sort, category, dispatch]);


  useEffect(() => {

    GetProducts();
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-between gap-[50px] container">
      
      {/* <SideFilter /> */}
      <div className="w-full flex flex-col overflow-hidden">
        <div className="flex flex-col gap-[34px] px-[20px] xl:px-0 md:gap-[50px]">
          <SearchCategory />
          <Sorting />
        </div>
        <div className="w-full grid gap-[20px] md:px-[20px] xl:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.length > 0 ? (
            products.map((e: any, index: number) => (
              <Card key={index} product={e} />
            ))

          ) : (
            [1,1,1,11,1,].map(()=><CardLoad/>)
          )}
        </div>

        {/* <button className="w-[264px] h-[48px] rounded-[10px] m-auto mt-[40px] bg-black text-white">
          Загрузить еще
        </button> */}
      </div>

      </div>
    </>
  );
};

export default HomePage;