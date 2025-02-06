"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useModal } from '@/context/ModalProvider'
import Search from './search'
import Exite from './modals/Exite'
import { useAppSelector } from '@/lib/hooks'
import AuthPhone from './modals/Authorization/auth/AuthPhone'
import AuthEmail from './modals/Authorization/auth/AuthEmail'


const NavBar =()=> {

  const {openModal} = useModal()
  const {userUID,userEmail,userPhone} = useAppSelector(state =>state.user)
  const [client, setClient] = useState(false);


  useEffect(() => {
    setClient(true); 
  }, []);

  
  if (!client) {
    return null; 
  }
  return (
    <header className=' shadow-md  mb-[60px] bg-white'>
        <nav className='container h-[142px] flex justify-between items-center px-[20px] lg:px-0'>
        <Link href="/">
            <div className='flex flex-col items-start lg:flex-row'>         
              <Image
              src="/logo.svg"
              width={173}
              height={60}
              className="hidden lg:block"
              alt="logo"
            />
              <Image
              src="/logo_adaptive.svg"
              width={26}
              height={44}
              className="block mr-[30px] lg:hidden"
              alt="logo"
            />
            <span className='text-green-600'>beta</span>
            </div>
          </Link>
            <Search/>
          <div className='hidden gap-[15px] md:flex'>

          <Link href="/basket">
            <button className='   flex h-[54px] items-center rounded-[10px] bg-grey_first gap-[10px] px-[15px] '>
            <svg width="25" height="25" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25 1.25H1.63016C2.30134 1.25 2.63753 1.25 2.91128 1.37109C3.15264 1.47786 3.359 1.64975 3.50781 1.86772C3.67632 2.11453 3.73716 2.4441 3.85861 3.10197L6.91672 19.6667L21.6809 19.6667C22.3229 19.6667 22.6449 19.6667 22.9109 19.5532C23.1458 19.453 23.3484 19.2907 23.4989 19.0843C23.669 18.851 23.7411 18.5386 23.8851 17.9144L23.8862 17.9099L26.1093 8.27661L26.1098 8.27459C26.3283 7.32772 26.4378 6.85314 26.3175 6.48088C26.212 6.15425 25.99 5.87732 25.6954 5.70105C25.3595 5.5 24.874 5.5 23.9007 5.5H4.79167M22.5 26.75C21.7176 26.75 21.0833 26.1157 21.0833 25.3333C21.0833 24.5509 21.7176 23.9167 22.5 23.9167C23.2824 23.9167 23.9167 24.5509 23.9167 25.3333C23.9167 26.1157 23.2824 26.75 22.5 26.75ZM8.33333 26.75C7.55093 26.75 6.91667 26.1157 6.91667 25.3333C6.91667 24.5509 7.55093 23.9167 8.33333 23.9167C9.11574 23.9167 9.75 24.5509 9.75 25.3333C9.75 26.1157 9.11574 26.75 8.33333 26.75Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <p>Корзина</p>
            </button>
          </Link>
          {userEmail ?
          <div className=' flex gap-[20px] '>
            <Link href="/profile">
              <button className='flex h-[54px] items-center rounded-[10px] bg-grey_first gap-[10px] px-[15px] '>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.3902 27.3874C22.5745 25.3595 19.9363 24.0833 17 24.0833C14.0637 24.0833 11.4253 25.3595 9.60954 27.3874M17 29.75C9.95837 29.75 4.25 24.0416 4.25 17C4.25 9.95837 9.95837 4.25 17 4.25C24.0416 4.25 29.75 9.95837 29.75 17C29.75 24.0416 24.0416 29.75 17 29.75ZM17 19.8333C14.6528 19.8333 12.75 17.9305 12.75 15.5833C12.75 13.2361 14.6528 11.3333 17 11.3333C19.3472 11.3333 21.25 13.2361 21.25 15.5833C21.25 17.9305 19.3472 19.8333 17 19.8333Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <p>Профиль</p>
            </button>
            </Link>
            <button onClick={() => openModal(<Exite/>)} className='   flex h-[54px] items-center rounded-[10px] gap-[10px] px-[15px]  bg-black text-white'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p >Выйти</p>
            </button>
          </div>
            :
          <button onClick={() => openModal(<AuthEmail/>)} className='   flex h-[54px] items-center rounded-[10px] gap-[10px] px-[15px]  bg-black text-white'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p >Войти / Регистрация</p>
            </button>
              }
          </div>


        </nav>
    </header>
  )
}


export default NavBar