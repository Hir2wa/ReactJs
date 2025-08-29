import { createSlice } from "@reduxjs/toolkit";
//these help use the create our Reducer in eazy way

const initialStateValue = { name: "", age: 0, email: "" };
export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
