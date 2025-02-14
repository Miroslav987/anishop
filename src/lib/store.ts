import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers, combineSlices, configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./features/products/ProductsSlice";
import { userSlice } from "./features/user/UserSlice";
import { basketSlice } from "./features/basket/BasketSlice";


const rootReducer = combineSlices(
  productsSlice,
  userSlice,
  basketSlice
);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Вывод верхового типа `makestore
export type AppStore = ReturnType<typeof makeStore>;
// Вывод типа `appdispatch 'из самого магазина
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
