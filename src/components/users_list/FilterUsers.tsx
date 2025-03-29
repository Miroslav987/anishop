"use client"
import { useUser } from "@/lib/features/users/UserServer";
import clsx from "clsx";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const FilterUsers = () => {
    const {FilterUser} = useUser()
    const pathname = usePathname();
    const [btnFocus, setBtnFocus] = useState("all")
    const userbtn =[
        { name:'все',
          key:'all',
         },
        { name:'запрос на админа',
          key:"request_admin",
         },
        { name:'запрос на продавца',
          key:"request_dealer",
         },
        { name:'админ',
          key:"admin_access",
         },
        { name:'продавец',
          key:"dealer_access",
         }
]
useEffect(()=>{
    if (btnFocus) {
        FilterUser(btnFocus)
    }
},[btnFocus])
    return (
        <div className="flex gap-[20px] flex-col">
            {userbtn.map((e:any, i:number)=>
            <button key={i} className={clsx("text-center shadow-[inset_0_0_10px_0_#00000014] bg-grey_first  rounded-[10px] p-[15px] ",
                    { "bg-white !shadow-shadow_first scale-102": btnFocus === e.key } )}
                    onClick={()=>setBtnFocus(e.key)}>
                {e.name}
            </button>)}

        </div>
    )
}