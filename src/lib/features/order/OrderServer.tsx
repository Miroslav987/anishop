import { db } from "@/lib/fire"
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"
import { SetClientOrders, SetDealerOrders } from "./OrderSlice"
import { useAppDispatch } from "@/lib/hooks"
import { useModal } from "@/context/ModalProvider"
import CompletOrder from "@/components/modals/basket/CompletOrder"
import { useBasket } from "../basket/BasketServer"
import { useRouter } from "next/navigation"

export const useOrders = () => {
const dispatch = useAppDispatch()
const {AllDeleteBasket} = useBasket()
const {closeModal ,openModal} = useModal()
const router = useRouter()
    const AddOrder = async (order: any) => {   
        try {
            const data = await setDoc(doc(db, "orders", order.id), order)
            AllDeleteBasket()
            openModal(<CompletOrder/>)
            router.push("/profile")
        } catch (error) {
        console.error(error);
        
        }

    }
    const GetDealerOrders = async (uid:any)=> {
        try {
            const ordersQuery = query(collection(db, 'orders'), where("dealerUid", '==', uid));
                const ordersSnapshot = await getDocs(ordersQuery);
                const orders = ordersSnapshot.docs.map(doc => ({
                    ...doc.data(),
                }));
                console.log();
                
                dispatch(SetDealerOrders(orders))
        } catch (error:any) {
            console.error(error);
            
        }
    }
    const GetClientOrders = async (uid:any)=> {
        try {
            const ordersQuery = query(collection(db, 'orders'), where("clientId", '==', uid));
            const ordersSnapshot = await getDocs(ordersQuery);
            const orders = ordersSnapshot.docs.map(doc => ({
                ...doc.data(),
            }));

            dispatch(SetClientOrders(orders))
        } catch (error:any) {
            console.error(error);
            
        }
    }

    return { AddOrder, GetDealerOrders, GetClientOrders }
}