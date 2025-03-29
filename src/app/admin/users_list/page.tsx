"use client"

import { CardUser } from "@/components/cards/CardUser";
import { FilterUsers } from "@/components/users_list/FilterUsers";
import { useUser } from "@/lib/features/users/UserServer";
import { USER } from "@/lib/features/users/UserSlice";
import { useAppSelector } from "@/lib/hooks";
import clsx from "clsx";
import { useEffect, useState } from "react";


export default function RequestDealer() {
    const { GetUsers, AdminAccess, DealerAccess } = useUser()
    const { users } = useAppSelector(state => state.user)
    const [admin, setAdmin] = useState<boolean>(false)
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
   

    useEffect(() => {
        GetUsers()
    }, [])

    return (
        <>

            <div className="w-[20%] rounded-[10px]  ">
                <FilterUsers />
            </div>
            <div className="w-[80%] p-[20px] flex flex-col gap-[20px]   rounded-[10px] bg-grey_first shadow-[inset_0_0_10px_0_#00000014]">


                {/* <div className='w-full relative h-[54px] flex items-center  '>
                    <input className=' w-[100%] h-[100%] pl-[64px]  bg-white  rounded-[10px] shadow-md  '
                        placeholder='Поиск'
                        type="text"
                    />
                    <svg className='absolute  left-[20px] ' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6667 17.6667L26 26M10.7222 20.4444C5.35279 20.4444 1 16.0917 1 10.7222C1 5.35279 5.35279 1 10.7222 1C16.0917 1 20.4444 5.35279 20.4444 10.7222C20.4444 16.0917 16.0917 20.4444 10.7222 20.4444Z" stroke="#1E2128" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div> */}

                {users.length ? users.map((user: USER, i: number) =>
                <div key={i}>
                    <CardUser user={user} />
                </div>
                ) : <p>отсутсвует</p>}
            </div>
        </>
    )
}
