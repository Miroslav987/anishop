import { createAppSlice } from "@/lib/CreateAppSlice"

const initialState:any = {
    category:[]
}


export const searchesSlice = createAppSlice({
    name:"searches",
    initialState,
    reducers:()=>({
        SetCategory:(state,action)=>{
            state.category = action.payload
        }
    }),
})


export const {SetCategory,} = searchesSlice.actions
export default searchesSlice.reducer