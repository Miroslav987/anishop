import { createAppSlice } from "@/lib/CreateAppSlice";

interface State {
    dealer_orders:any[],
    client_orders:any[]
}

const  initialState:State = {
    dealer_orders:[],
    client_orders:[]
}

export const ordersSlice = createAppSlice({
    name:"orders",
    initialState,
    reducers:()=> ({
        SetDealerOrders:((state,action)=>{
            state.dealer_orders = action.payload
        }),
        SetClientOrders:((state,action)=>{
            state.client_orders = action.payload
        })
    })
})

export const {SetDealerOrders, SetClientOrders} = ordersSlice.actions
export default ordersSlice.reducer