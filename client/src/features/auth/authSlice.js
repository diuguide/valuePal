import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    username: "",
    isAuthenticated: false,
  },
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },
    loggedIn: (state, action) => {
      state.isLoading = false;
      state.username = action.payload;
      state.isAuthenticated = true;
    },
    loggedOut: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    },
  },
});

export const { isLoading, loggedIn, loggedOut } = authSlice.actions;

export const authState = state => state.auth;

export default authSlice.reducer;
