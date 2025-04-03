import { db } from "@/lib/fire"
import { doc, setDoc } from "firebase/firestore"

export const useOrder = () => {

    const AddOrder = async(order:any)=> {
        const data = await setDoc(doc(db,"order",order),order.id)
    }

    return{AddOrder}
}