"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useModal } from '@/context/ModalProvider'
import Exite from './modals/Exite'
import { useAppSelector } from '@/lib/hooks'
import AuthEmail from './modals/Authorization/auth/AuthEmail'
import SearchInput from './SearchInput'
import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'
import { useUser } from '@/lib/features/users/UserServer'
const NavBar = () => {

  const { openModal, closeModal } = useModal()
  const { basket } = useAppSelector(state => state.basket)
  const state = useAppSelector(state => state.user)
  const { uid, email, photoURL, admin_access } = useAppSelector(state => state.user.user)
  const { GetProfile} = useUser()
  const [client, setClient] = useState(false);
  const [srollNav, setScrollNav] = useState(false)
  const [srollNavMob, setScrollNavMob] = useState(false)
  const lastScrollRef = useRef(0);
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const windowScroll = window.scrollY;
      const windowWidth = window.innerWidth;
//  && pathname === '/'
      if (windowWidth >= 768) {
        if (windowScroll <= 40) {
          setScrollNav(false);
        } else {
          setScrollNav(true);
        }

      } else {
        // && pathname === '/'
        if (windowScroll > lastScrollRef.current ) {
          setScrollNavMob(true);
        } else {
          setScrollNavMob(false);
        }
        lastScrollRef.current = windowScroll;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setClient(true);
    GetProfile(uid)
  }, []);


  if (!client) {
    return null;
  }
  return (
    <header className={clsx(`mb-[140px] md:mb-[220px] duration-10 ease-out`)}>
      <nav className={clsx(`flex  justify-between items-center fixed inset-0  h-[100px] md:h-[142px] bottom-auto z-20  bg-white shadow-md duration-200 md:duration-10 ease-out px-[20px] lg:px-0`,
        {
          "!h-[100px] ": srollNav,
          "transform -translate-y-full": srollNavMob
        })}>
        <div className={clsx(` flex gap-0 md:gap-[20px] justify-between items-center container`,

        )}>
          <Link  href="/">
            <div onClick={closeModal} className='flex flex-col items-start lg:flex-row'>
              <Image
                src="/logo.svg"
                width={200}
                height={55}
                className="hidden  lg:block"
                priority={true}
                alt="logo"
              />
              
              <Image
                src="/logo_adaptive.svg"
                width={30}
                height={44}
                className="relative 
                 block mr-[30px] lg:hidden"
                priority={true}
                alt="logo"
              />
              <span className='text-green-600'>beta</span>
            </div>
          </Link>
          
          <SearchInput />

          <div className='hidden gap-[15px] md:flex'>

            <Link onClick={closeModal} href="/basket">
              <button className='relative flex h-[54px] items-center rounded-[10px] bg-grey_first gap-[10px] px-[15px] '>
                {basket.total_quantity ?
                  <div className='absolute flex items-center justify-center w-[25px] h-[25px] right-[-5px] top-[-10px] rounded-[100px] bg-black'>
                    <span className='pt-[3px] text-white'>{basket.products.length}</span>
                  </div>
                  : null}
                <svg width="25" height="25" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.25 1.25H1.63016C2.30134 1.25 2.63753 1.25 2.91128 1.37109C3.15264 1.47786 3.359 1.64975 3.50781 1.86772C3.67632 2.11453 3.73716 2.4441 3.85861 3.10197L6.91672 19.6667L21.6809 19.6667C22.3229 19.6667 22.6449 19.6667 22.9109 19.5532C23.1458 19.453 23.3484 19.2907 23.4989 19.0843C23.669 18.851 23.7411 18.5386 23.8851 17.9144L23.8862 17.9099L26.1093 8.27661L26.1098 8.27459C26.3283 7.32772 26.4378 6.85314 26.3175 6.48088C26.212 6.15425 25.99 5.87732 25.6954 5.70105C25.3595 5.5 24.874 5.5 23.9007 5.5H4.79167M22.5 26.75C21.7176 26.75 21.0833 26.1157 21.0833 25.3333C21.0833 24.5509 21.7176 23.9167 22.5 23.9167C23.2824 23.9167 23.9167 24.5509 23.9167 25.3333C23.9167 26.1157 23.2824 26.75 22.5 26.75ZM8.33333 26.75C7.55093 26.75 6.91667 26.1157 6.91667 25.3333C6.91667 24.5509 7.55093 23.9167 8.33333 23.9167C9.11574 23.9167 9.75 24.5509 9.75 25.3333C9.75 26.1157 9.11574 26.75 8.33333 26.75Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>Корзина</p>
              </button>
            </Link>
            {email ?
              <div className=' flex gap-[20px] '>
                <Link onClick={closeModal} href="/profile">
                  <button className='flex h-[54px] items-center rounded-[10px] bg-grey_first gap-[10px] px-[15px] '>
                    {/* {photoURL ?
                      <img className='w-[30px] h-[30px]  rounded-[100px]' src={photoURL} alt="" />
                      : */}
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.3902 27.3874C22.5745 25.3595 19.9363 24.0833 17 24.0833C14.0637 24.0833 11.4253 25.3595 9.60954 27.3874M17 29.75C9.95837 29.75 4.25 24.0416 4.25 17C4.25 9.95837 9.95837 4.25 17 4.25C24.0416 4.25 29.75 9.95837 29.75 17C29.75 24.0416 24.0416 29.75 17 29.75ZM17 19.8333C14.6528 19.8333 12.75 17.9305 12.75 15.5833C12.75 13.2361 14.6528 11.3333 17 11.3333C19.3472 11.3333 21.25 13.2361 21.25 15.5833C21.25 17.9305 19.3472 19.8333 17 19.8333Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                     {/* } */}

                    <p>Профиль</p>
                  </button>
                </Link>
                <button onClick={() => openModal(<Exite />)} className='   flex h-[54px] items-center rounded-[10px] gap-[10px] px-[15px]  bg-black text-white'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p >Выйти</p>
                </button>
              </div>
              :
              <button onClick={() => openModal(<AuthEmail />)} className='   flex h-[54px] items-center rounded-[10px] gap-[10px] px-[15px]  bg-black text-white'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p >Войти / Регистрация</p>
              </button>
            }
          </div>

        </div>
      </nav>
      <nav className='fixed bottom-[0] inset-x-0 z-10 px-[20px] py-[18px] h-[84px] bg-white  rounded-[10px] shadow-shadow_first md:hidden'>
        <div className='flex justify-between'>
          <Link href={'/'} className='flex flex-col items-center gap-[10px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
              <path d="M8 20V12.6C8 12.0399 8 11.7599 8.109 11.546C8.20487 11.3578 8.35785 11.2049 8.54601 11.109C8.75993 11 9.03995 11 9.6 11H12.4C12.9601 11 13.2401 11 13.454 11.109C13.6422 11.2049 13.7951 11.3578 13.891 11.546C14 11.7599 14 12.0399 14 12.6V20M1 8.5L10.04 1.72C10.3843 1.46181 10.5564 1.33271 10.7454 1.28294C10.9123 1.23902 11.0877 1.23902 11.2546 1.28295C11.4436 1.33271 11.6157 1.46181 11.96 1.72L21 8.5M3 7V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40974 19.2843 3.7157 19.5903 4.09202 19.782C4.51985 20 5.0799 20 6.2 20H15.8C16.9201 20 17.4802 20 17.908 19.782C18.2843 19.5903 18.5903 19.2843 18.782 18.908C19 18.4802 19 17.9201 19 16.8V7L12.92 2.44C12.2315 1.92361 11.8872 1.66542 11.5091 1.56589C11.1754 1.47804 10.8246 1.47804 10.4909 1.56589C10.1128 1.66542 9.76852 1.92361 9.08 2.44L3 7Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Главная</p>
          </Link>
          <Link href={'/basket'} className='relative flex flex-col items-center gap-[10px]'>
            {basket.total_quantity ?
              <div className='absolute text-sm flex items-center justify-center w-[20px] h-[20px] right-[5px] top-[-10px] rounded-[100px] bg-black'>
                <span className='pt-[3px] text-white'>{basket.products.length}</span>
              </div>
              : null}
            <svg width="22" height="21" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.25 1.25H1.63016C2.30134 1.25 2.63753 1.25 2.91128 1.37109C3.15264 1.47786 3.359 1.64975 3.50781 1.86772C3.67632 2.11453 3.73716 2.4441 3.85861 3.10197L6.91672 19.6667L21.6809 19.6667C22.3229 19.6667 22.6449 19.6667 22.9109 19.5532C23.1458 19.453 23.3484 19.2907 23.4989 19.0843C23.669 18.851 23.7411 18.5386 23.8851 17.9144L23.8862 17.9099L26.1093 8.27661L26.1098 8.27459C26.3283 7.32772 26.4378 6.85314 26.3175 6.48088C26.212 6.15425 25.99 5.87732 25.6954 5.70105C25.3595 5.5 24.874 5.5 23.9007 5.5H4.79167M22.5 26.75C21.7176 26.75 21.0833 26.1157 21.0833 25.3333C21.0833 24.5509 21.7176 23.9167 22.5 23.9167C23.2824 23.9167 23.9167 24.5509 23.9167 25.3333C23.9167 26.1157 23.2824 26.75 22.5 26.75ZM8.33333 26.75C7.55093 26.75 6.91667 26.1157 6.91667 25.3333C6.91667 24.5509 7.55093 23.9167 8.33333 23.9167C9.11574 23.9167 9.75 24.5509 9.75 25.3333C9.75 26.1157 9.11574 26.75 8.33333 26.75Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Корзина</p>
          </Link>
          {email ?
            <Link href={'/profile'} className='flex flex-col items-center gap-[10px]'>
              <svg width="22" height="21" viewBox="3.2 9 27.5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.3902 27.3874C22.5745 25.3595 19.9363 24.0833 17 24.0833C14.0637 24.0833 11.4253 25.3595 9.60954 27.3874M17 29.75C9.95837 29.75 4.25 24.0416 4.25 17C4.25 9.95837 9.95837 4.25 17 4.25C24.0416 4.25 29.75 9.95837 29.75 17C29.75 24.0416 24.0416 29.75 17 29.75ZM17 19.8333C14.6528 19.8333 12.75 17.9305 12.75 15.5833C12.75 13.2361 14.6528 11.3333 17 11.3333C19.3472 11.3333 21.25 13.2361 21.25 15.5833C21.25 17.9305 19.3472 19.8333 17 19.8333Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>Профиль</p>
            </Link>
            :
            <button onClick={() => openModal(<AuthEmail />)} className='flex flex-col items-center gap-[10px]'>
              <svg width="22" height="21" viewBox="3.2 9 27.5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.3902 27.3874C22.5745 25.3595 19.9363 24.0833 17 24.0833C14.0637 24.0833 11.4253 25.3595 9.60954 27.3874M17 29.75C9.95837 29.75 4.25 24.0416 4.25 17C4.25 9.95837 9.95837 4.25 17 4.25C24.0416 4.25 29.75 9.95837 29.75 17C29.75 24.0416 24.0416 29.75 17 29.75ZM17 19.8333C14.6528 19.8333 12.75 17.9305 12.75 15.5833C12.75 13.2361 14.6528 11.3333 17 11.3333C19.3472 11.3333 21.25 13.2361 21.25 15.5833C21.25 17.9305 19.3472 19.8333 17 19.8333Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>Профиль</p>
            </button>
          }
          {email ?
            <button onClick={() => openModal(<Exite />)} className='flex flex-col items-center gap-[10px]'>
              <svg width="22" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <p>Выйти</p>
            </button>
            : null}
        </div>
      </nav>
    </header>
  )
}


export default NavBar