import Image from 'next/image'
import React from 'react'

export default function CardOrderingProfile({ order }: any) {

  return (
    <div className='relative w-full md:w-[48%] '>
      {/* <div className='absolute right-0 '>
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.58631 8.77881C4.36575 10.5478 7.46904 12.9999 10.9997 12.9999C14.5303 12.9999 17.6331 10.5478 19.4125 8.77881C19.8818 8.31226 20.1172 8.07819 20.2667 7.62012C20.3733 7.29328 20.3733 6.70674 20.2667 6.3799C20.1172 5.92181 19.8818 5.6877 19.4125 5.22111C17.633 3.45208 14.5303 1 10.9997 1C7.46904 1 4.36575 3.45208 2.58631 5.22111C2.11665 5.68802 1.8818 5.92165 1.73231 6.3799C1.62569 6.70673 1.62569 7.29328 1.73231 7.62012C1.8818 8.07837 2.11665 8.31189 2.58631 8.77881Z" stroke="#D9DDDF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.99951 7C8.99951 8.10457 9.89494 9 10.9995 9C12.1041 9 12.9995 8.10457 12.9995 7C12.9995 5.89543 12.1041 5 10.9995 5C9.89494 5 8.99951 5.89543 8.99951 7Z" stroke="#D9DDDF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div> */}
      <div className='flex items-center gap-[16px]'>
        {order.product.img ?
          <div>
            <Image
              src={order.product.img}
              width={100}
              height={180}
              className="object-contain w-[80px] h-[80px]"
              priority={true}
              alt={order.product.img}
            />
          </div>
          :
          <div className='w-[40px] h-[40px] flex items-center justify-center rounded-[6px] bg-grey_first '>
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5 6.27783L9.99997 11.0001M9.99997 11.0001L1.49997 6.27783M9.99997 11.0001L10 20.5001M19 15.0586V6.94153C19 6.59889 19 6.42757 18.9495 6.27477C18.9049 6.13959 18.8318 6.01551 18.7354 5.91082C18.6263 5.79248 18.4766 5.70928 18.177 5.54288L10.777 1.43177C10.4934 1.27421 10.3516 1.19543 10.2015 1.16454C10.0685 1.13721 9.93146 1.13721 9.79855 1.16454C9.64838 1.19543 9.50658 1.27421 9.22297 1.43177L1.82297 5.54288C1.52345 5.70928 1.37369 5.79248 1.26463 5.91082C1.16816 6.01551 1.09515 6.13959 1.05048 6.27477C1 6.42757 1 6.59889 1 6.94153V15.0586C1 15.4013 1 15.5726 1.05048 15.7254C1.09515 15.8606 1.16816 15.9847 1.26463 16.0893C1.37369 16.2077 1.52345 16.2909 1.82297 16.4573L9.22297 20.5684C9.50658 20.726 9.64838 20.8047 9.79855 20.8356C9.93146 20.863 10.0685 20.863 10.2015 20.8356C10.3516 20.8047 10.4934 20.726 10.777 20.5684L18.177 16.4573C18.4766 16.2909 18.6263 16.2077 18.7354 16.0893C18.8318 15.9847 18.9049 15.8606 18.9495 15.7254C19 15.5726 19 15.4013 19 15.0586Z" stroke="#D9DDDF" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        }

        <div className='flex flex-col justify-between h-[66px] text-sm'>
          <p>Номер заказа:<span className='font-black text-[#50535A]'> {order.id}</span></p>
          <p>{order.addData}</p>
          <p className='text-yellow'>В ожидании</p>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#F1F0F0] mt-[20px]'></div>
    </div>
  )
}
