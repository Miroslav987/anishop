import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { createAppSlice } from "../CreateAppSlice";
import { GetProducts } from "./ProductsAPI";



 export interface ProductsState {
    products:any,
    status: "good"|"loading"|"failed",

}

const initialState:ProductsState = {
    products:[],
    status:"good",

}



export const productsSlice = createAppSlice({
    name:"products",
    initialState,
    reducers:(create)=> ({
        Setproducts: create.reducer((state,action)=>{
            state.products = action.payload
            console.log(action.payload);
        }),

        }),
        selectors:{
            selectProduct:(state) => state.products,
            selectStatus:(state) => state.status
        }
    })



export const {Setproducts} = productsSlice.actions
export default productsSlice.reducer



