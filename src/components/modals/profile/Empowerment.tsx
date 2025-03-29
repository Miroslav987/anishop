import { useModal } from "@/context/ModalProvider"
import AuthAdmin from "../Authorization/auth/AuthAdmin"
import { useAppSelector } from "@/lib/hooks"
import { useUser } from "@/lib/features/users/UserServer"

export const Empowerment = () => {
    const { user } = useAppSelector(state => state.user)
    const { request_admin, request_dealer, dealer_access } = useAppSelector(state => state.user.user)
    const { RequestAdmin, RequestDealer } = useUser()
    const { closeModal, openModal } = useModal()


    return (
        <>

            <div className=" relative w-[90%] md:w-[60%] rounded-[10px] bg-white py-[65px] px-[20px] md:py-[80px] md:px-[90px]">
                <button onClick={closeModal} className="absolute right-[20px] top-[20px] rotate-45 text-grey_second text-4xl">+</button>
                <p className=" font-[MullerBold] text-[26px] text-center pb-[48px]">
                    Выберите какие права хотите получить
                </p>
                <div className="flex flex-col  gap-[10px] md:gap-[10px]  justify-between">

                    {!request_admin ?
                        <button onClick={() => (RequestAdmin(user))} className="w-full h-[60px] rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
                            <p>админ запрос</p>
                        </button>
                        :
                        <button className="w-full h-[60px] rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
                            <p>запрос на админ отправлен</p>
                        </button>
                    }
                    <button onClick={() => openModal(<AuthAdmin />)} className="w-full h-[60px] rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
                        <p>админ пароль</p>
                    </button>
                    {!dealer_access ?
                        !request_dealer ?
                            <button onClick={() => (RequestDealer(user))} className="w-full h-[60px] rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
                                <p >продавец запрос</p>
                            </button>
                            :
                            <button className="w-full h-[60px] rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
                                <p>запрос на продавца отправлен</p>
                            </button>
                        : null}
                </div>
            </div>
        </>
    )
}