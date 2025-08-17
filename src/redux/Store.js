import { configureStore } from "@reduxjs/toolkit";
import  carteSlice from "./cartSlice";



export const store = configureStore({
  reducer: {
    cart:carteSlice
  }
});

