import { createSlice } from "@reduxjs/toolkit";
const initialState = { login: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.login = true;
    },
    logout: (state) => {
      state.login = false;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
