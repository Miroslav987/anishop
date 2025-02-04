"use client"
import CardBasket from "@/components/cards/CardBasket";
import ConfirmClearBasket from "@/components/modals/basket/ConfirmClearBasket";
import MakingOrdering from "@/components/modals/basket/MakingOrdering";
import { useModal } from "@/context/ModalProvider";


export default function page() {

  const {openModal} = useModal()
  const cards = [1,2,3,4];
  return (
    <>
      {cards[0] ? (
        <div>

          <div className="flex justify-end">
              <button
              onClick={()=>openModal(<ConfirmClearBasket/>)}
              className="w-[202] h-[36] rounded-[10] flex justify-center items-center gap-[10] bg-grey_first shadow-[0_0_4px_0_#00000029]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 1.5H11.5M1.5 4H16.5M14.8333 4L14.2489 12.7661C14.1612 14.0813 14.1174 14.7389 13.8333 15.2375C13.5833 15.6765 13.206 16.0294 12.7514 16.2497C12.235 16.5 11.5759 16.5 10.2578 16.5H7.74221C6.42409 16.5 5.76503 16.5 5.24861 16.2497C4.79396 16.0294 4.41674 15.6765 4.16665 15.2375C3.88259 14.7389 3.83875 14.0813 3.75107 12.7661L3.16667 4"
                    stroke="#1E2128"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Очистить корзину
              </button>
          </div>
          <div className="flex mt-[40] mb-[45] flex-wrap gap-[54] ">
            {cards.map((e) => (
              <CardBasket key={e} />
            ))}
          </div>
          <div className="w-full h-[4] bg-grey_third rounded-[4] "></div>

          <div className="h-40 flex gap-[47.5] items-end ">
            <div className=" w-[340]  flex gap-[10] flex-col pt-[45]">
              <div className=" w-full flex items-center gap-[8]">
                <p className="whitespace-nowrap">Доставка</p>
                <p className=" text-black overflow-hidden whitespace-nowrap tracking-[5]">
                  ...............................
                </p>
                <p className="font-[MullerBold] whitespace-nowrap">Бесплатно</p>
              </div>
              <div className=" w-full flex items-center gap-[8]">
                <p className="whitespace-nowrap">Количество товаров</p>
                <p className=" text-black overflow-hidden whitespace-nowrap tracking-[5]">
                  ...............................
                </p>
                <p className="font-[MullerBold] whitespace-nowrap">4шт.</p>
              </div>
              <div className=" w-full flex items-center gap-[8]">
                <p className="whitespace-nowrap">Итого</p>
                <p className=" text-black overflow-hidden whitespace-nowrap tracking-[5]">
                  ...............................
                </p>
                <p className="font-[MullerBold] whitespace-nowrap">
                  130 500 сом
                </p>
              </div>
            </div>
            <div className=" h-[60] rounded-[10px] bg-grey_first flex items-center ">
              <p className="px-[25]">G7P4K2ZQ</p>
              <button className=" h-[100%] rounded-[10px]  px-[25] bg-black text-white ">
                Использовать
              </button>
              {/* <button className=" h-[100%] rounded-[10px]  px-[25] bg-green_first text-white ">
                Подтвержден
              </button> */}
            </div>

     
              <button onClick={()=>openModal(<MakingOrdering/>)} className="w-full mr-[32px] rounded-[10px] h-[60] bg-black text-white ">
                Продолжить
              </button>

          </div>
        </div>
      ) : (
        <div >
          <div className="flex justify-start pt-[14px]">

              <button className="flex items-center gap-[10px]">
                <svg className="rotate-90" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L5 5L1 1" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Назад
              </button>

          </div>
          <div className="h-[50vh] flex flex-col justify-center items-center ">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 36C36 36 32.625 31.5 27 31.5C21.375 31.5 18 36 18 36M33.75 20.25H33.7725M20.25 20.25H20.2725M49.5 27C49.5 39.4264 39.4264 49.5 27 49.5C14.5736 49.5 4.5 39.4264 4.5 27C4.5 14.5736 14.5736 4.5 27 4.5C39.4264 4.5 49.5 14.5736 49.5 27ZM34.875 20.25C34.875 20.8713 34.3713 21.375 33.75 21.375C33.1287 21.375 32.625 20.8713 32.625 20.25C32.625 19.6287 33.1287 19.125 33.75 19.125C34.3713 19.125 34.875 19.6287 34.875 20.25ZM21.375 20.25C21.375 20.8713 20.8713 21.375 20.25 21.375C19.6287 21.375 19.125 20.8713 19.125 20.25C19.125 19.6287 19.6287 19.125 20.25 19.125C20.8713 19.125 21.375 19.6287 21.375 20.25Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-[32px]">Корзина пуста</p>
          </div>
          <div className="w-full h-[4] bg-grey_third rounded-[4]  opacity-[0.5]"></div>
          <div className="h-40 flex gap-[47.5] items-end opacity-[0.5] ">
            <div className=" w-[340]  flex gap-[10] flex-col pt-[45]">
              <div className=" w-full flex items-center gap-[8]">
                <p className="whitespace-nowrap">Доставка</p>
                <p className=" text-black overflow-hidden whitespace-nowrap tracking-[5]">
                  ...............................
                </p>
                <p className="font-[MullerBold] whitespace-nowrap">Бесплатно</p>
              </div>
              <div className=" w-full flex items-center gap-[8]">
                <p className="whitespace-nowrap">Количество товаров</p>
                <p className=" text-black overflow-hidden whitespace-nowrap tracking-[5]">
                  ...............................
                </p>
                <p className="font-[MullerBold] whitespace-nowrap">4шт.</p>
              </div>
              <div className=" w-full flex items-center gap-[8]">
                <p className="whitespace-nowrap">Итого</p>
                <p className=" text-black overflow-hidden whitespace-nowrap tracking-[5]">
                  ...............................
                </p>
                <p className="font-[MullerBold] whitespace-nowrap">
                  130 500 сом
                </p>
              </div>
            </div>
            <div className=" h-[60] rounded-[10px] bg-grey_first flex items-center ">
              <p className="px-[25]">G7P4K2ZQ</p>
              <button className=" h-[100%] rounded-[10px]  px-[25] bg-black text-white ">
                Использовать
              </button>
            </div>
            <button className="mr-[32px] w-full rounded-[10px] h-[60] bg-black text-white ">
              Продолжить
            </button>
          </div>
        </div>
      )}
    </>
  );
}
