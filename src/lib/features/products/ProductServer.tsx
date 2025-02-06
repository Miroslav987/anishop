import { db } from "@/lib/fire"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore"
import { useDispatch } from "react-redux"
import { SetOneProduct, Setproducts } from "./ProductsSlice"
import { AppDispatch } from "@/lib/store"
import { useAppDispatch } from "@/lib/hooks"
import { useRouter } from "next/navigation"
import { useModal } from "@/context/ModalProvider"

export const  useProduct =()=> {
const { closeModal } = useModal();
const dispatch = useAppDispatch()
const router = useRouter()

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

const GetOneProduct = async(id:any)=>{
    try {
        const data = doc(db, `products/${id}`)
        const  product = await getDoc(data);
        dispatch(SetOneProduct(product.data()))
        
    } catch (error) {
        console.log(error);
    }
} 

 const AddEditProduct = async(product:any)=> {
    try {

        const data = await setDoc(doc(db, "products", product.id),product)
        console.log('rt');
        
        router.push('/')
        
      } catch (error) {
        console.log(error);
  
      }
}
 const EditProduct = async(product:any)=> {
    try {

        const data = await setDoc(doc(db, "products", product.id),product)
        router.push('/')
      } catch (error) {
        console.log(error);
  
      }
}

 const DeleteProduct = async(id:string)=> {
    try {
        const data = await deleteDoc(doc(db, "products", id))
        router.push('/')
        closeModal()
    } catch (error) {
        console.log(error);
    }
}


return{GetProducts,GetOneProduct,AddEditProduct,DeleteProduct}
}