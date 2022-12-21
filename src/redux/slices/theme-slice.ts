import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../../types";

interface ThemeState {
  mode: Theme;
}

const initialState: ThemeState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state: ThemeState, action: PayloadAction<Theme>) => {
      state.mode = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
