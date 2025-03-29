import { useProduct } from "@/lib/features/products/ProductServer"
import { useAppSelector } from "@/lib/hooks"
import Card from "../cards/Card"
import { useEffect } from "react"
import clsx from "clsx"

export const MyProducts = () => {
    const {  email } = useAppSelector(state => state.user.user)
    const { MyProduct } = useProduct()
    const { myProduct } = useAppSelector(state => state.products)

    useEffect(() => {
        if (email) {
            MyProduct(email)
        }
    }, [])

    return (
        <>
            <div className={clsx("w-full  pt-[60px] grid gap-[20px] md:px-[20px] xl:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4",{"!flex justify-center items-center  ":!myProduct.length}) }>
                {myProduct.length ?
                    myProduct.map((e: any, i: number) =>
                        <Card key={i} product={e} />
                    )
                    : <p className="text-lg">у вас пока нет товаров</p>  }
            </div>
        </>
    )
}