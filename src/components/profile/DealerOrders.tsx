import React, { useEffect } from 'react';
import CardOrderingProfile from '../cards/CardOrderingProfile';
import { useAppSelector } from '@/lib/hooks';
import { useOrders } from '@/lib/features/order/OrderServer';

const DealerOrders = () => {
    const { GetDealerOrders } = useOrders()
    const { uid } = useAppSelector(state => state.user.user)
    const { dealer_orders } = useAppSelector(state => state.orders)

    

    useEffect(() => {
        GetDealerOrders(uid)
        console.log(dealer_orders);
    }, [])
    return (
        <div className="pt-[60px] flex flex-wrap justify-between gap-[26px]">
            {dealer_orders.length ?
                dealer_orders.map((order: any, index: number) => (
                    <CardOrderingProfile key={index} order={order} />
                ))
                :
                <div className='w-full text-[22px] flex items-center justify-center h-[50px] '><p>у вас нет пока заказов</p></div>

            }
        </div>
    );
};

export default DealerOrders;