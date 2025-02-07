import { db } from "@/lib/fire"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { useDispatch } from "react-redux"
import { SetCategory, SetOneProduct, Setproducts } from "./ProductsSlice"
import { AppDispatch } from "@/lib/store"
import { useAppDispatch } from "@/lib/hooks"
import { useRouter } from "next/navigation"
import { useModal } from "@/context/ModalProvider"
import { useState } from "react"

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
            console.log('rt');

            router.push('/')

        } catch (error) {
            console.log(error);

        }
    }

    const DeleteProduct = async (id: string) => {
        try {
            const data = await deleteDoc(doc(db, "products", id))
            router.push('/')
            closeModal()
        } catch (error) {
            console.log(error);
        }
    }

    const CrudCategory = async (category: any) => {
        const id = "uUR6bJhVyyEbk3Kifsf7"
        try {
            const data = await setDoc(doc(db, "category", id), category)
            console.log(data);
            Getcategory()
        } catch (error) {
            console.error(error);

        }
    }

    const Getcategory = async () => {
        const id = "uUR6bJhVyyEbk3Kifsf7"
        try {
            const data = doc(db, `category/${id}`)
            const category = await getDoc(data);

            dispatch(SetCategory(category.data()))
        } catch (error) {

        }

    }

    const Search = async (search: string) => {

        try {
            const categoryQuery = query(collection(db, 'products'), where('name', '>=', search), where('name', '<=', search + '\uf8ff'));
            const categorySnapshot = await getDocs(categoryQuery);
            const categoryProducts = categorySnapshot.docs.map(doc => ({
                ...doc.data(),
            }));

            // dispatch(Setproducts(categoryProducts))
        } catch (error) {
            console.error(error);

        }
    }
    const SearchCategory = async (search: string) => {
        try {
            const categoryQuery = query(collection(db, 'products'),where('category', '>=', search), where('category', '<=', search + '\uf8ff'));
            const categorySnapshot = await getDocs(categoryQuery);
            const categoryProducts = categorySnapshot.docs.map(doc => ({
                ...doc.data(),
            }));
            dispatch(Setproducts(categoryProducts))
        } catch (error) {
            console.error(error);

        }
    }



    return { GetProducts, GetOneProduct, AddEditProduct, DeleteProduct, CrudCategory, Getcategory, Search,SearchCategory }
}