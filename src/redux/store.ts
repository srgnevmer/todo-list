import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menu-slice";
import themeSlice from "./slices/theme-slice";
import modalSlice from "./slices/modal-slice";

export const store = configureStore({
  reducer: { menu: menuSlice, theme: themeSlice, modal: modalSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
