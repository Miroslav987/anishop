import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { createAppSlice } from "../CreateAppSlice";
// import { GetProducts } from "./ProductsAPI";
import { auth } from "../fire"
import { onAuthStateChanged, setPersistence } from "firebase/auth/web-extension";
import { AppDispatch } from "../store";
import { sendSignInLinkToEmail, signInWithPhoneNumber } from "firebase/auth";


 export interface AuthState {
    auth:any,

}

const initialState:AuthState = {
    auth:[],

}



export const authSlice = createAppSlice({
    name:"products",
    initialState,
    reducers:(create)=> ({
        Setauth: create.reducer((state,action)=>{
            state.auth = action.payload
            console.log(action.payload);
            
        }),

        }),
        selectors:{
            selectAuth:(state) => state.auth,
        }
    })



export const {Setauth} = authSlice.actions
export default authSlice.reducer


export async function GetAuth(){
    try {
      
    } catch (error) {
        console.log(error);
        
    }
}




// ? Проверка входа

export const checkAuthState = ( dispatch:AppDispatch)=>{
    onAuthStateChanged(auth,(user:any) => {
      if (user) {
        dispatch(Setauth(user))
        console.log(user);
        console.log(87);
        
        
      }else{
        console.error("пользователь не войден");
        
      }
      
    })
  }
  

// ! Проверка входа  

// ? Сохранения входа

  async function setAuthPersistence(persistenceType:any) {
    try {
      await setPersistence(auth , persistenceType);
      console.log('Persistence set to:', persistenceType);
    } catch (error) {
      console.error('Error setting persistence:', error);
    }
  }

// ! Сохранения входа