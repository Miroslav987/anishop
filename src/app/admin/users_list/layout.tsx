
import { FilterUsers } from '@/components/users_list/FilterUsers';
import React from 'react'

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <div className="">
                <h2 className='text-3xl text-center font-[MullerBold] pb-[30px]'>Список людей</h2>
                <div className="flex flex-col items-center md:items-start md:flex-row gap-[30px]">
                    {children}
                </div>
            </div>
        </>
    )
}
