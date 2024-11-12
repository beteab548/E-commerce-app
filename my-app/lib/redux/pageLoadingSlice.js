import { createSlice } from "@reduxjs/toolkit";
const initialState = { isLoading: false };
const pageLoading = createSlice({
  name: "pageLoading",
  initialState: initialState,
  reducers: {
    setLoadingPageStateToTrue: (state) => {
      state.isLoading = true;
    },
    setLoadingPageStateToFalse: (state) => {
      state.isLoading = false;
    },
  },
});
export const {setLoadingPageStateToFalse,setLoadingPageStateToTrue}=pageLoading.actions
export default pageLoading.reducer