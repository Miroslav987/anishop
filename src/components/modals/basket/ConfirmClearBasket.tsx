import { useModal } from '@/context/ModalProvider';
import React from 'react'
import CompletedClearBasket from './CompletClearBasket';
import { useBasket } from '@/lib/features/basket/BasketServer';

export default function ConfirmClearBasket( ) {
  const {closeModal,openModal} = useModal()
  const {AllDeleteBasket} = useBasket()
  
  return (
    <>
    <div className=" w-[646px] rounded-[10px] bg-white py-[80] px-[90]">
          <p className=" font-[MullerBold] text-[26px] text-center pb-[48px]">
          Очистить корзину?
          </p>
          <div className="flex gap-[48px] h-[60px] justify-between">
              <button onClick={closeModal}
              className="w-full rounded-[10px] border-black bg-black border text-white hover:bg-white hover:text-black" >
                Отменить
              </button>

              <button onClick={AllDeleteBasket} className="w-full rounded-[10px] border-black border-2 hover:bg-black hover:text-white">Очистить</button>
              {/* <button onClick={()=>openModal(<CompletedClearBasket/>)} className="w-full rounded-[10px] border-black border-2 hover:bg-black hover:text-white">Очистить</button> */}

          </div>
          </div>
    </>
  )
}
