import { useUser } from "@/lib/features/users/UserServer"
import { USER } from "@/lib/features/users/UserSlice"
import clsx from "clsx"



export const CardUser =({user}:{user:USER})=> {
        const {AdminAccess, DealerAccess } = useUser()
    return(
                <div  className="  bg-white shadow-md rounded-[10px] p-[20px]">
                    <div>
                        <h2 className="text-xl font-bold mb-2">{user.email}</h2>
                        <p className="mb-1"><strong>Имя:</strong> {user.name}</p>
                        <p className="mb-4"><strong>Компания:</strong> {user.name_company ? user.name_company : "нет"}</p>

                        <div className="flex justify-between flex-col gap-[20px] md:gap-0 md:flex-row">
                            <div>
                                <div className="flex gap-[20px] items-center justify-between mb-2">
                                    <p>Административный доступ</p>
                                    <div onClick={() => AdminAccess(user, user.admin_access)} className=" w-[100px] bg-grey_first rounded-[100px]  overflow-hidden  "
                                        >
                                        <button className={clsx(`w-[50%] p-[3px] rounded-[100px] flex justify-center items-center text-white translate-x-[0] h-full bg-red-700  transition ease-in duration-100`,
                                            { "!translate-x-[100%] !bg-[#20CF5B]": user.admin_access })}>
                                            {user.admin_access ? "есть" : "нет"}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex gap-[20px] items-center justify-between">
                                    <p>Продавольственый доступ</p>
                                    <div onClick={() => DealerAccess(user, user.dealer_access)} className=" w-[100px] bg-grey_first rounded-[100px]  overflow-hidden"
                                        style={{ boxShadow: 'inset 0 0 10px 0 #00000014' }}>
                                        <button className={clsx(`w-[50%] p-[3px] rounded-[100px] flex justify-center items-center text-white translate-x-[0] h-full bg-red-700 transition ease-in duration-100`,
                                            { "!translate-x-[100%] !bg-[#20CF5B]": user.dealer_access })}>
                                            {user.dealer_access ? "есть" : "нет"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-[20px] items-center justify-between mb-2">
                                    <p>запрос на админа</p>
                                    {user.request_admin ?
                                        <img src="/icons/true.png" alt=""
                                            className="w-[20px] h-[20px]" />
                                        :
                                        <img src="/icons/false.png" alt=""
                                            className="w-[15px] h-[15px]" />
                                    }
                                </div>

                                <div className="flex gap-[20px] items-center justify-between">
                                    <p>запрос на продавца</p>
                                    {user.request_dealer ?
                                        <img src="/icons/true.png" alt=""
                                            className="w-[20px] h-[20px]" />
                                        :
                                        <img src="/icons/false.png" alt=""
                                            className="w-[15px] h-[15px]" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}