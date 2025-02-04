"use client"
import Descrition from "@/components/carddetails/Description"
import Сharacterization from "@/components/carddetails/Сharacterization"
import MainInfo from "@/components/carddetails/MainInfo"
import CardSwiper from "@/components/carddetails/Swiper"

import { useProduct } from "@/lib/features/products/ProductServer"
import { use, useEffect } from "react"
import { useAppSelector } from "@/lib/hooks"
import clsx from "clsx"
import { useDetailsInfo } from "@/context/CardDetailsInfoProvidre"
import { useDispatch } from "react-redux"

export default async function Page({params}: { params: Promise<{ id: string }>}) {
    const dispatch = useDispatch()
    const {GetOneProduct} = useProduct()
      const { oneProduct } = useAppSelector(state => state.products)
    const { id } = use(params)

    useEffect(() => {
            GetOneProduct(id,dispatch);
    }, [id]);
    
      const {state, handleContent } = useDetailsInfo()
       return (
         <>
         {oneProduct?
           <div>
               <div className="flex gap-[2.1875rem]">
               <CardSwiper/>
               <MainInfo/>
               </div>
               <div className="mt-[8.25rem]">
                 <div className="flex gap-[3.125rem] text-[1.5rem] mb-[30px] pb-[1.5rem] border-b-2">
                   <p
                   className={clsx(`cursor-pointer`,
                     {'text-grey_third': !state.text}
                     )}
                    onClick={()=>handleContent(<Descrition/>,false)}>Описание</p>
                   <p
                   className={clsx(`cursor-pointer`,
                     {'text-grey_third': state.text}
                     )}
                    onClick={()=>handleContent(<Сharacterization/>,true)}>Характеристики</p>
                  
                 </div>
   
   
               </div>
               <p className="text-justify font-[MullerLight] tracking-wide">{state.content}</p>
           </div>
           :null}
       </>
       )
  }

