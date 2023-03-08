import { configureStore } from "@reduxjs/toolkit";
import createSlice from './cart-slice';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: { cart: createSlice.reducer, ui: uiSlice.reducer }
});

export default store;