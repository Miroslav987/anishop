import { db } from "@/lib/fire";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { SetCategory, SetSearchProducts } from "./SearchesSlice";
import { Setproducts } from "../products/ProductsSlice";
import { useModal } from "@/context/ModalProvider";





export const useSearch = () => {
    const dispatch = useDispatch()
      const { openModal, closeModal } = useModal()

    const CrudCategory = async (category: any) => {
        const id = "uUR6bJhVyyEbk3Kifsf7"
        console.log(category);
        try {
            const data = await setDoc(doc(db, "category", id), category)
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
            console.log(error);
        }

    }

    const Search = async (search: string) => {
        if (search) {
            try {
                const categoryQuery = query(collection(db, 'products'), where('name_lower', '>=', search), where('name_lower', '<=', search + '\uf8ff'));
                const categorySnapshot = await getDocs(categoryQuery);
                const categoryProducts = categorySnapshot.docs.map(doc => ({
                    ...doc.data(),
                }));

                dispatch(SetSearchProducts(categoryProducts))
                
            } catch (error) {
                console.error(error);

            }
        }else{
            dispatch(SetSearchProducts([]))
        }
    }



    return { CrudCategory, Getcategory, Search }
}