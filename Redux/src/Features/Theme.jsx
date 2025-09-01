import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = "";
export const ThemeSlice = createSlice({
  name: "Theme",
  initialState: { value: initialStateValue },
  reducers: {
    ChangeColour: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const themeReducer = ThemeSlice.reducer;
export const { ChangeColour } = ThemeSlice.actions;
