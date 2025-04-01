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

            <div className="w-[90%] md:w-[20%] rounded-[10px]  ">
                <FilterUsers />
            </div>
            <div className="w-[90%] h-[50vh] md:h-auto overflow-y-auto md:overflow-y-hidden md:w-[80%] p-[20px] flex flex-col gap-[20px]   rounded-[10px] bg-grey_first shadow-[inset_0_0_10px_0_#00000014]">

                {users.length ? users.map((user: USER, i: number) =>
                <div key={i} className="  ">
                    <CardUser user={user} />
                </div>
                ) : <p>отсутсвует</p>}
            </div>
        </>
    )
}
