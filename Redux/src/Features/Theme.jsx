import { createSlice } from "@reduxjs/toolkit";
import ChangeColour from "../Components/ChangeColour";
export const ThemeSlice = createSlice({
  name: Theme,
  initialState: "",
  reducers: {
    ChangeColour: (state, action) => {
      state: value: "";
    },
  },
});

export const themeReducer = ThemeSlice.reducer;
export const { ChangeColour } = ThemeSlice.actions;
