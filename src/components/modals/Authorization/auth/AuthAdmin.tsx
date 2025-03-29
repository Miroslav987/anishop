import { useModal } from "@/context/ModalProvider";
import { useUser } from "@/lib/features/users/UserServer";
import { useAppSelector } from "@/lib/hooks";
import { useState } from "react";




export default function AuthAdmin() {
    const user = useAppSelector(state => state.user.user)
    const { closeModal } = useModal()
    const {SignUpAdmin} = useUser()
    const [password, setPassword] = useState<string>("")

    function handleSubmit(e: any) {
        e.preventDefault()
        SignUpAdmin(password,user)
    }
    return (
        <>
            <div className="w-[646px] relative rounded-[10px] bg-white py-[80px] px-[90px] shadow-shadow_first">
                <button onClick={closeModal} className="absolute right-[20px] top-[20px] rotate-45 text-grey_second text-4xl">+</button>
                <div className="flex flex-col items-center gap-[24px]">
                    <p className="font-[MullerBold] text-[32px] text-center pb-[30px]">Вход на Админ</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-[32px]">
                    <input
                        className="w-full rounded-[10px] border-grey border-[2px] px-[20px] py-[25px] placeholder:text-black"
                        type="text"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="введите пароль"
                    />
                    <div className="w-full" id="recaptcha-container"></div>
                    <button type="submit" className="w-full h-[60px] rounded-[10px] border-black border-2 hover:bg-black hover:text-white">
                        Далее
                    </button>
                </form>
            </div>
        </>
    );



}