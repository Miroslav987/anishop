import { db } from "@/lib/fire"
import { addDoc, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore"
import { useDispatch } from "react-redux"
import { SetOneProduct, Setproducts } from "./ProductsSlice"
import { AppDispatch } from "@/lib/store"

export const  useProduct =()=> {
const dispatch = useDispatch()

 const GetProducts = async()=> {
    try {
        const data = await getDocs(collection(db,"products"))
        const products = data.docs.map(doc => ({
            ...doc.data(),
        }));
        dispatch(Setproducts(products))
    } catch (error) {
        console.log(error);
    }
}

 const AddProduct = async(product:any)=> {
    try {
        const data = await setDoc(doc(db, "products", product.id),product)
        console.log(data);
        
      } catch (error) {
        console.log(error);
  
      }
}

const GetOneProduct = async(id:any,dispatch:any)=>{
    try {
        const data = doc(db, `products/${id}`)
        const  product = await getDoc(data);
        
        dispatch(SetOneProduct(product.data()))
        
    } catch (error) {
        console.log(error);
    }
} 

return{GetProducts,GetOneProduct,AddProduct}
}