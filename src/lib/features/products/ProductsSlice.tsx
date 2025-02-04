import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { createAppSlice } from "../../CreateAppSlice";



 export interface ProductsState {
    products:any,
    oneProduct:any,
    loading:boolean,

}

const initialState:ProductsState = {
    products:[],
    oneProduct:{},
    loading:true,

}



export const productsSlice = createAppSlice({
    name:"products",
    initialState,
    reducers:()=> ({
        Setproducts:((state,action)=>{
            state.products = action.payload
        }),
        SetOneProduct:((state,action)=>{
            state.oneProduct = action.payload
            state.loading= false
        })

        }),
        selectors:{
            selectProduct:(state) => state.products,
            selectOneProduct:(state) => state.oneProduct,
            selectStatus:(state) => state.loading
        }
    })



export const {Setproducts,SetOneProduct} = productsSlice.actions
export default productsSlice.reducer



