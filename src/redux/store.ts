import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menu-slice";
import themeSlice from "./slices/theme-slice";

export const store = configureStore({
  reducer: { menu: menuSlice, theme: themeSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
