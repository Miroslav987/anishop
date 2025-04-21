import React, { useEffect } from 'react';
import CardOrderingProfile from '../cards/CardOrderingProfile';
import { useAppSelector } from '@/lib/hooks';
import { useOrders } from '@/lib/features/order/OrderServer';

const ClientOrders = () => {
    const {GetClientOrders } = useOrders()
    const { uid } = useAppSelector(state => state.user.user)
    const { client_orders } = useAppSelector(state => state.orders)


    useEffect(() => {
        GetClientOrders(uid)
        console.log(client_orders);
    }, [])
    
    return (
        <div className="pt-[60px] flex flex-wrap justify-between gap-[26px]">
            {client_orders.length ?
                client_orders.map((order: any, index: number) => (

                    <CardOrderingProfile key={index} order={order} />
                ))
                :
                <div className='w-full text-[22px] flex items-center justify-center h-[50px] '><p>у вас нет пока заказов</p></div>
            }
        </div>
    );
};

export default ClientOrders;