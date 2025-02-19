"use client"
import React, { useEffect, useState } from "react";
import { v4 as uuidv4, } from 'uuid';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "@/lib/fire";
import Cookies from 'js-cookie';
import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useProduct } from "@/lib/features/products/ProductServer";
import { useAppSelector } from "@/lib/hooks";
import { useSearch } from "@/lib/features/search/SearchesServer";

interface extraProduct {
    color: string,
    characteristics: string[],
    images: any[],
    price: any,
    sale: any,
    quantity: any,
}
export default function page() {
    const { CrudCategory ,Getcategory } = useSearch()
      const { category } = useAppSelector(state => state.searches)
      
    const [stateCategory, setCategory] = useState([{
        name: "",
        search_key: ""
    }]
)


    function handleCategory(e: any, i: number) {
        const updateCategory:any = [...stateCategory]
         updateCategory[i] = {
            ...updateCategory[i],
            [e.name]: e.value,
        
        }
        setCategory(updateCategory)
    }

    function AddCategory() {
        const newCategory = { name: "", search_key: "" }
        setCategory([...stateCategory, newCategory])
    }
    function DelCategory(i:number) {
        const updateCategory:any = [...stateCategory]
        const delcat = updateCategory.filter((e:any,index:number)=> index !== i)
        setCategory(delcat)
    }
     
    
    function CkickEditCategory(e: any) {
        e.preventDefault()
        CrudCategory({stateCategory})
    }
    
    useEffect(()=>{
        Getcategory()
    },[])

    useEffect(()=>{
        setCategory(prev => category.stateCategory ? [...category.stateCategory]: prev )
    },[category.stateCategory])

    return (
        <>
            <div className="w-full flex flex-col gap-[20px]  rounded-[10px] bg-white px-[40px] pt-[50px] pb-[30px] ">
                <form className="w-full flex flex-col gap-[20px]" onSubmit={CkickEditCategory} >
                    {stateCategory.map((e: any, i: number) => (
                        <div className="flex flex-wrap md:flex-nowrap gap-[20px] items-center" key={i}>
                            <input
                                className="w-full capitalize rounded-[10px] border-grey border-[2px] px-[20px] py-[15px] placeholder:text-black "
                                type="text"
                                name="name"
                                value={e.name}
                                required
                                placeholder="название"
                                onChange={(e) => handleCategory(e.target, i)}
                            />
                            <input
                                className="w-full lowercase rounded-[10px] border-grey border-[2px] px-[20px] py-[15px] placeholder:text-black "
                                type="text"
                                required
                                placeholder="ключ для поисковика"
                                name="search_key"
                                value={e.search_key}
                                onChange={(e) => handleCategory(e.target, i)}
                            />
                            <button
                                type="button"
                                onClick={() => DelCategory(i)}
                                className="m-auto p-[10px] h-[40px] bg-white rounded-[10px]  hover:bg-black">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="#0000" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    ))}
                    <div >
                        <button
                            type="button"
                            onClick={AddCategory}
                            className="w-full h-[60px] mt-[20px] rounded-[10px] border-black border-2 bg-black text-white ">
                            Создать категорию</button>
                        <button
                            type="submit"
                            className="w-full h-[60px] mt-[20px] rounded-[10px] border-black border-2 bg-black text-white ">
                            Внести изменения</button>
                    </div>
                </form>
            </div>
        </>
    );
}

