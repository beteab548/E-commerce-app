import { configureStore } from "@reduxjs/toolkit";
import configProdChiceReducer from "./config_product_choice_slice";
import pageLoadingSlice from "./pageLoadingSlice";
export const store = configureStore({
  reducer: {
    config_product_choice: configProdChiceReducer,
    page_Loading_Slice: pageLoadingSlice,
  },
});
