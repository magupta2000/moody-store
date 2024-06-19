import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from 'redux-thunk';
import { RootReducer } from "./RootReducer"

const Store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default Store;