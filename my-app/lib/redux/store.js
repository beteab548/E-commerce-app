import { configureStore } from "@reduxjs/toolkit";
import configProdChiceReducer from './config_product_choice_slice'
export const store = configureStore({
  reducer: { config_product_choice: configProdChiceReducer },
});

