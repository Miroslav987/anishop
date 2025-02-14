import { createAppSlice } from "@/lib/CreateAppSlice";




const initialState:any = {
    basket:JSON.parse(localStorage.getItem("basket")||"[]"),
}




export const basketSlice = createAppSlice({
    name:"basket",
    initialState,
    reducers:()=> ({
        SetBasket:((state , action)=>{
            state.basket = action.payload
        }),

    }),
})


export const {SetBasket} = basketSlice.actions
export default basketSlice.reducer