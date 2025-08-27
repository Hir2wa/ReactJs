import { createSlice } from "@reduxjs/toolkit";
//these help use the create our Reducer in eazy way
const userSlice = createSlice({
  name: "user",
  initialState: { name: "", age: 0, email: "" },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});
