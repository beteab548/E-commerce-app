import { createSlice } from "@reduxjs/toolkit";
const initialState = { Product_type: "shoe" };
const config_product_choice = createSlice({
  name: "config_products_choice",
  initialState,
  reducers: {
    changeProdType: (state, action) => {
      state.Product_type = action.payload;
    },
  },
});
export const { changeProdType } = config_product_choice.actions;
export default config_product_choice.reducer;
