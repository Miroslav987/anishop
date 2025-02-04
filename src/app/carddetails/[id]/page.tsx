"use client"

import Description from '@/components/carddetails/Description';
import Сharacterization from '@/components/carddetails/Сharacterization';
import MainInfo from '@/components/carddetails/MainInfo';
import CardSwiper from '@/components/carddetails/Swiper';
import { useDetailsInfo } from '@/context/CardDetailsInfoProvidre';
import { useProduct } from '@/lib/features/products/ProductServer';
import { useAppSelector } from '@/lib/hooks';
import clsx from 'clsx';
// import { useRouter } from 'next/router';
import { useEffect, useState, } from "react"
import { useDispatch } from 'react-redux';
import Link from 'next/link';



const CardDetails = ({ params }: any) => {

  const dispatch = useDispatch()
  const { GetOneProduct } = useProduct()
  const { oneProduct, loading } = useAppSelector(state => state.products)
  const [typeColor, setTypeColor] = useState<number>(0)


  useEffect(() => {
    GetOneProduct(params.id, dispatch);
  }, [params.id]);

  useEffect(() => {
    handleContent(<Description description={oneProduct.description} />, false)
  }, [oneProduct])

  function colorBtn(num: number) {

  }

  console.log(oneProduct);


  const { state, handleContent } = useDetailsInfo()

  if (loading) {
    return (
      <>
        Загрузка...
      </>
    )
  }
  return (
    <>
      <div className='container'>
        <div className='flex gap-[10] mb-[30] items-center'>
          <Link href="/">Главная</Link>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="#1E2128" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p>Профиль</p>
        </div>

        <div className='w-full  rounded-[10] bg-white px-[40] pt-[50] pb-[30] shadow-[0_0_10px_0_#00000014]'>
          {oneProduct ?
            <div>
              <div className="w-full flex gap-[2.1875rem]">
                <CardSwiper images={oneProduct.extraProduct[typeColor].images} />

                <div>

                  <h3 className="w-[300px] flex items-center gap-[17.5px] text-[24px] ">
                    {oneProduct.name}
                    {oneProduct.extraProduct[typeColor].sale ?
                      <p className="w-[51] h-[41] text-base flex items-center justify-center rounded-[100] text-green_first bg-green_second">
                        {oneProduct.extraProduct[typeColor].sale}%
                      </p> : null}
                  </h3>
                  {!oneProduct.extraProduct[typeColor].sale?
                  <p className="text-[24px]">{oneProduct.extraProduct[typeColor].price} сом</p>:
                  <div className='flex gap-[20px] items-baseline'>
                    <p className="text-[24px]">{oneProduct.extraProduct[typeColor].price-(oneProduct.extraProduct[typeColor].price / 100 * oneProduct.extraProduct[typeColor].sale)} сом</p>
                    <p className="text-[14px] line-through text-grey_second">{oneProduct.extraProduct[typeColor].price} сом</p>
                  </div>}
                  {/* <div className="mt-[32px]">
                    <p className="text-grey_second pb-[6]">Память:</p>
                    <div className="flex gap-[10px]">
                      <button className="border-[1.5px] rounded-radius py-[12] px-[20] font-[MullerBold]">256 гб</button>
                      <button className="border-[1.5px] rounded-radius py-[12] px-[20] font-[MullerBold]">256 гб</button>
                      <button className="border-[1.5px] rounded-radius py-[12] px-[20] font-[MullerBold]">256 гб</button>
                    </div>
                  </div> */}

                  <div className="mt-[32px]">
                    <p className="text-grey_second pb-[6]">Цвет:</p>
                    <div className="flex gap-[10px]">
                      {oneProduct.extraProduct.map((e: any, i: number) =>
                        <button style={{ background: e.color }} className={`w-[44px] h-[44px] rounded-full border   hover:scale-105 duration-100 `} onClick={() => setTypeColor(i)}></button>
                      )}
                    </div>
                  </div>

                  <div className='flex flex-col gap-[14px] mt-[24px]'>
                    <button className='flex items-center justify-center gap-[10px] border-[1.5px] py-[16px] border rounded-radius border-grey_third font-[MullerBold]'>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Warning / Circle_Check">
                          <path id="Vector" d="M15.5 10L11.5 14L9.5 12M12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12C21.5 16.9706 17.4706 21 12.5 21Z" stroke="#1E2128" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                      </svg>
                      Товар в корзине!
                    </button>
                    <button className='py-[16px] text-white bg-black rounded-radius  font-[MullerBold]'>
                      Купить сейчас
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-[5.25rem]">
                <div className="flex gap-[3.125rem] text-[1.5rem] mb-[30px] pb-[1.5rem] border-b-2">
                  <p
                    className={clsx(`cursor-pointer`,
                      { 'text-grey_third': state.text }
                    )}
                    onClick={() => handleContent(<Description description={oneProduct.description} />, false)}>Описание</p>
                  <p
                    className={clsx(`cursor-pointer`,
                      { 'text-grey_third': !state.text }
                    )}
                    onClick={() => handleContent(<Сharacterization characterization={oneProduct.extraProduct[typeColor].characteristics} />, true)}>Характеристики</p>

                </div>


              </div>
              <p className="text-justify font-[MullerLight] tracking-wide">{state.content}</p>
            </div>
            : null}
        </div>
      </div>
    </>
  )
}


export default CardDetails