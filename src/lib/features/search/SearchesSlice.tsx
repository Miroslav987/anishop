import { createAppSlice } from "@/lib/CreateAppSlice"

const initialState:any = {
    category:[],
    search_products:[]
}


export const searchesSlice = createAppSlice({
    name:"searches",
    initialState,
    reducers:()=>({
        SetCategory:(state,action)=>{
            state.category = action.payload
        },
        SetSearchProducts:(state,action)=>{
            state.search_products = action.payload
        }
    }),
})


export const {SetCategory,SetSearchProducts} = searchesSlice.actions
export default searchesSlice.reducer