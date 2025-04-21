
import React, { useEffect, useState } from "react";
import { useModal } from "@/context/ModalProvider";
import CompletOrder from "./CompletOrder";
import { useAppSelector } from "@/lib/hooks";
import CardOrderingBasket from "@/components/cards/CardOrderingBasket";
import { useOrders } from "@/lib/features/order/OrderServer";
import { v4 as uuidv4, } from 'uuid';

export default function MakingOrdering() {
  const { closeModal, openModal } = useModal()
  const { AddOrder } = useOrders()
  const { basket } = useAppSelector(state => state.basket)
  const { email, phone, name, uid } = useAppSelector(state => state.user.user)
  const [client, useClient] = useState(false)
  const [order, SetOrder] = useState({})

  
  const ClickAddOrder = (e:any) => {
    e.preventDefault()
    const now = new Date();
    const options: any = { 
      day: 'numeric',
      month: 'long',
    };
    
    const dayMonth = now.toLocaleDateString('ru-RU', options); 
    const year = now.getFullYear(); 
    const hours = now.getHours();   
    const minutes = now.getMinutes(); 
    
    const orders = basket.products.map((e: any) => ({
      ...order,
      id: uuidv4(),
      status:"pending",
      clientId: uid,
      clientName:name,
      clientPhone:phone,
      clientEmail:email,
      dealerUid: e.dealerUid,
      addData:`${dayMonth}, ${year} ${hours}:${minutes}`,
      product: e
    }));
    orders.map((order:any)=>{
      AddOrder(order)
    })
  }

  useEffect(() => {
    useClient(true)
  }, [])

  if (!client) {
    return null;
  }
  return (
    <>
      <div className="  relative w-[100%]  rounded-[10px] bg-white container  shadow-[0_0_10px_0_#00000014]">
        <div className="flex justify-end">
          <button onClick={closeModal} className="absolute right-[20] top-[20] rotate-45 text-grey_second text-4xl ">+</button>
        </div>
        <div className="w-full flex ">
          <div className="w-full hidden md:flex flex-col justify-between py-[80px] px-[60px]  rounded-[10px] bg-[#FCFBFB]">
            <div className="h-[400px] scroll_style overflow-y-scroll pr-[5] flex flex-col gap-[20px]">
              {basket.products.length ? basket.products.map((e: any, i: number) => (
                <div key={i}>
                  <CardOrderingBasket product={e} i={i} />
                </div>
              )) : null}
            </div>
            <div className=" w-full  flex gap-[16] flex-col pt-[45]">
              <div className=" w-full flex items-center gap-[8]">
                <p className="whitespace-nowrap">Доставка</p>
                <p className=" text-black overflow-hidden whitespace-nowrap tracking-[5]">
                  ................................
                </p>
                <p className="font-[MullerBold] whitespace-nowrap">Бесплатно</p>
              </div>
              <div className=" w-full flex items-center gap-[8]">
                <p className="whitespace-nowrap">Итого</p>
                <p className=" text-black overflow-hidden whitespace-nowrap tracking-[5]">
                  .................................
                </p>
                <p className="font-[MullerBold] text-[18px] whitespace-nowrap">
                  {basket.price} сом
                </p>
              </div>
            </div>
          </div>

          <div className="w-full  px-[20px] md:px-[80px] py-[90px] rounded-[10px] shadow-[0_0_10px_0_#00000014]">
            <p className="mb-[60px] text-center text-3xl font-extrabold">
              Оформление заказа
            </p>
            <form action="" onSubmit={ClickAddOrder}>
              <div className="w-full flex flex-col gap-[20]">
                <input
                  className="w-full  rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black "
                  placeholder="Ваше имя"
                  value={name ? name : ""}
                  onChange={() => ({})}
                  type="text"
                />
                <input
                  className="w-full rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black "
                  value={phone ? phone : ""}
                  onChange={() => ({})}
                  placeholder="+996 500 500 500"
                  type="tel"
                />
                <input
                  className="w-full rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black "
                  placeholder="example@ex.com"
                  value={email ? email : ""}
                  onChange={() => ({})}
                  type="text"
                />
              </div>
              <button type="submit" className="mt-[60px] rounded-[10px] text-white py-[22px] w-full bg-black">
                Оформить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
