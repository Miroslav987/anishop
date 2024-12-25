import { createUserWithEmailAndPassword, getAuth, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from "firebase/auth";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Setproducts } from "./ProductsSlice";
import { AppDispatch } from "../store";
import { auth } from "../fire";

// const API ='http://localhost:1337/api/products' 

// export async function GetProducts(dispatch:AppDispatch){
//     try {
//         const {data} = await axios.get(API)
//         dispatch(Setproducts(data.data))
        
//     } catch (error) {
//         console.error(error);
//     }
// }
// ? Регистрация через email

export const createAccount = async (email:string, pass:string) => {
    try {
     const user = await createUserWithEmailAndPassword(auth ,email ,pass);
    //   SignInAccount(email,pass,dispatch,navigate)
    //   navigate("/sign_in")
    console.log(user);
    
    } catch (error) {
        console.log(error);
        
    //   handleFirebaseError(error)
    }
};

// ! Регистрация через email


// ? Вход через email

export const SignInAccount = async (email:string,pass:string,dispatch: AppDispatch,navigate:Function)=> {
    try {
      await setAuthPersistence(browserSessionPersistence);
      const {user} = await signInWithEmailAndPassword(auth ,email ,pass);

      checkAuthState(auth,dispatch)
      dispatch(setUser(user))
      navigate("/")

    } catch (error) {
      handleFirebaseError(error)

    }
  }

// ! Вход через email