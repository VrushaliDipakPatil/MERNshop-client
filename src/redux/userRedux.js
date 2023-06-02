import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    registerUser:null,
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    RegisterSuccess:(state, action)=>{
state.registerUser = action.payload;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure,RegisterSuccess } = userSlice.actions;
export default userSlice.reducer;
