import { db, storage } from "@/lib/fire"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { useDispatch } from "react-redux"
import { SetMyProducts, SetOneProduct, Setproducts } from "./ProductsSlice"
import { AppDispatch } from "@/lib/store"
import { useAppDispatch } from "@/lib/hooks"
import { useRouter } from "next/navigation"
import { useModal } from "@/context/ModalProvider"
import { useState } from "react"
import { deleteObject, listAll, ref } from "firebase/storage"

export const useProduct = () => {
    const { closeModal } = useModal();
    const dispatch = useAppDispatch()
    const router = useRouter()

    const GetProducts = async () => {
        try {
            const data = await getDocs(collection(db, "products"))
            const products = data.docs.map(doc => ({
                ...doc.data(),
            }));
            dispatch(Setproducts(products))
        } catch (error) {
            console.log(error);
        }
    }

    const GetOneProduct = async (id: any) => {
        try {
            dispatch(SetOneProduct((false)))
            const data = doc(db, `products/${id}`)
            const product = await getDoc(data);
            dispatch(SetOneProduct(product.data()))

        } catch (error) {
            console.log(error);
        }
    }

    const AddEditProduct = async (product: any) => {
        try {
            const data = await setDoc(doc(db, "products", product.id), product)
            router.push('/')

        } catch (error) {
            console.log(error);

        }
    }

    const DeleteProduct = async (id: string, extraProduct: any) => {
        try {
            await deleteDoc(doc(db, "products", id));

            const deleteImagesPromises = Object.keys(extraProduct).map(async (i) => {
              const mainProductFolder = `productImages/${id}`;
              const additionalProductFolder = `${mainProductFolder}/extraProduct${i}`;
              const imageRef = ref(storage, `${additionalProductFolder}`);
        
              if (extraProduct[i].images[0]) {
                const imgs = await listAll(imageRef);
                const deleteImagePromises = imgs.items.map((img) => deleteObject(img));
                await Promise.all(deleteImagePromises); 
              }
            });

            await Promise.all(deleteImagesPromises);

            router.push('/');
            closeModal();

            // for (let i in extraProduct) {
            //     console.log(i);
            //     const mainProductFolder = `productImages/${id}`;
            //     const additionalProductFolder = `${mainProductFolder}/extraProduct${i}`;
            //     const imageRef = ref(storage, `${additionalProductFolder}`);
            //     if (extraProduct[i].images[0]) {
            //         const imgs = await listAll(imageRef)
            //         for (const img of imgs.items) {
            //             deleteObject(img)
            //         }
            //     }
            // }

            router.push('/')
            closeModal()
        } catch (error) {
            console.log(error);
        }
    }

  const MyProduct = async (email:string)=>{
    try {

      const productQuery = query(collection(db, 'products'), where("email", '>=', email));
      
      const productSnapshot = await getDocs(productQuery);
      const products = productSnapshot.docs.map(doc => ({
          ...doc.data(),
      }));
      
      dispatch(SetMyProducts(products))
  
    } catch (error) {
      console.error(error);
      
    }
  }

    




    return { GetProducts, GetOneProduct, AddEditProduct, DeleteProduct, MyProduct }
}