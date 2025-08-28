import { createSlice } from "@reduxjs/toolkit";
//these help use the create our Reducer in eazy way
export const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", age: 0, email: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export const userReducer = userSlice.reducer;
