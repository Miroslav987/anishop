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
import { use, useEffect, useState, } from "react"
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/context/ModalProvider';
import DeleteCard from '@/components/modals/DeleteCard';
import { useRouter } from 'next/navigation';

interface CardDetailsProps {
  params: Promise<{ id: string }>
}

const CardDetails = ({ params }: CardDetailsProps) => {
  const newParams = use(params)
  const router = useRouter()
  const { openModal } = useModal()
  const { GetOneProduct } = useProduct()
  const { userUID, userEmail, userPhone } = useAppSelector(state => state.user)
  const { state, handleContent } = useDetailsInfo()
  const { oneProduct, loading } = useAppSelector(state => state.products)
  const [typeColor, setTypeColor] = useState<number>(0)

  useEffect(() => {
    GetOneProduct(newParams?.id);
  }, [newParams?.id]);

  useEffect(() => {
    handleContent(<Description description={oneProduct.description} />, false)
  }, [oneProduct])

  const handleTypeColor = (num: number) => {
    setTypeColor(num)
  }

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
        <div className='flex gap-[10px] mb-[30px] items-center'>
          <Link href="/">Главная</Link>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>Профиль</p>
        </div>

        <div className='w-full relative  rounded-[10px]  bg-white px-[40px] pt-[50px] pb-[30px] shadow-[0_0_10px_0_#00000014] '>
          {oneProduct ? <>
            {userUID ?
              <div className='absolute right-[10px] top-[10px] flex gap-[10px]'>
                <button onClick={() => router.push(`/admin/editProduct/${encodeURIComponent(oneProduct.id)}`)} className='p-[10px] border rounded-lg bg-white hover:invert'>
                  <Image
                    src={'/icons/edit.png'}
                    width={25}
                    height={25}
                    alt='edite'
                  />
                </button>
                <button onClick={() => openModal(<DeleteCard id={oneProduct.id} />)} className='p-[10px] border rounded-lg bg-white hover:invert'>
                  <Image
                    src={'/icons/delete.png'}
                    width={23}
                    height={23}
                    alt='delete'
                  />
                </button>
              </div>
              : null}
            <div>
              <div className="w-full flex gap-[2.1875rem]">
                <CardSwiper images={oneProduct.extraProduct[typeColor].images} />
                <div>

                  <h3 className="w-[300px] flex items-center gap-[17.5px] text-[24px] ">
                    {oneProduct.name}
                    {oneProduct.extraProduct[typeColor].sale ?
                      <p className="w-[51px] h-[41px] text-base flex items-center justify-center rounded-[100px] text-green_first bg-green_second">
                        {oneProduct.extraProduct[typeColor].sale}%
                      </p> : null}
                  </h3>
                  {!oneProduct.extraProduct[typeColor].sale ?
                    <p className="text-[24px]">{oneProduct.extraProduct[typeColor].price} сом</p> :
                    <div className='flex gap-[20px] items-baseline'>
                      <p className="text-[24px]">{oneProduct.extraProduct[typeColor].price - (oneProduct.extraProduct[typeColor].price / 100 * oneProduct.extraProduct[typeColor].sale)} сом</p>
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
                    <p className="text-grey_second pb-[6px]">Цвет:</p>
                    <div className="flex gap-[10px]">
                      {oneProduct.extraProduct.map((e: any, i: number) =>
                        <button key={i} style={{ background: e.color }} className={`w-[44px] h-[44px] rounded-full border   hover:scale-105 duration-100 `} onClick={() => handleTypeColor(i)}></button>
                      )}
                    </div>
                  </div>

                  <div className='flex flex-col gap-[14px] mt-[24px]'>
                    <button className='flex items-center justify-center gap-[10px] border-[1.5px] py-[16px] border rounded-radius border-grey_third font-[MullerBold]'>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Warning / Circle_Check">
                          <path id="Vector" d="M15.5 10L11.5 14L9.5 12M12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12C21.5 16.9706 17.4706 21 12.5 21Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
              <div className="text-justify font-[MullerLight] tracking-wide">{state.content}</div>
            </div>
          </>
            : null}
        </div>
      </div>
    </>
  )
}


export default CardDetails