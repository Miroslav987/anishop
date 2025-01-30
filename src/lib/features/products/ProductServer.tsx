import { db } from "@/lib/fire"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { useDispatch } from "react-redux"
import { Setproducts } from "./ProductsSlice"

export const  useProduct =()=> {

 const GetProducts = async(dispatch:any)=> {
    try {
        const data = await getDocs(collection(db,"products"))
        const products = data.docs.map(doc => ({
            ...doc.data()
        }));
        dispatch(Setproducts(products))
    } catch (error) {
        console.log(error);
    }
}

 const AddProduct = async(product:any)=> {
    try {
        const data = await addDoc(collection(db, "products"), product)
      } catch (error) {
        console.log(error);
  
      }
}
return{GetProducts,AddProduct}
}