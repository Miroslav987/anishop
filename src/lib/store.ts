import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers, combineSlices, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./features/products/ProductsSlice";
import { userSlice } from "./features/users/UserSlice";
import { basketSlice } from "./features/basket/BasketSlice";
import { searchesSlice } from "./features/search/SearchesSlice";
import { ordersSlice } from "./features/order/OrderSlice";


const rootReducer = combineSlices(
  productsSlice,
  userSlice,
  basketSlice,
  searchesSlice,
  ordersSlice
);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};


export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
