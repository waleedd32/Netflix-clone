import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    showSignIn: "signIn",
    email: "",
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    signInOrRegister: (state, action) => {
      state.showSignIn = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { login, logout, signInOrRegister, setEmail } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
