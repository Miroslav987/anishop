'use client'
import Descrition from "@/components/carddetails/Descrition";
import Сharacterization from "@/components/carddetails/Сharacterization";
import MainInfo from "@/components/carddetails/MainInfo";
import CardSwiper from "@/components/carddetails/Swiper";
import { useDetailsInfo } from "@/context/DetailsInfoProvidre";
import clsx from "clsx";

export default function page()  {
  
  const {state, handleContent } = useDetailsInfo()
   
    console.log(state.text);
    
      
    return (
      <>
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
    </>
    )
  }