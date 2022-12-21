import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  isActive: boolean;
}

const initialState: MenuState = {
  isActive: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    showMenu: (state: MenuState) => {
      state.isActive = true;
    },
    closeMenu: (state: MenuState) => {
      state.isActive = false;
    },
  },
});

export const { showMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
