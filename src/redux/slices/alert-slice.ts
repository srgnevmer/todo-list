import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertType, AlertState } from "../../types";

const initialState: AlertState = {
  isActive: false,
  type: null,
  message: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state: AlertState) => {
      state.isActive = true;
    },
    closeAlert: (state: AlertState) => {
      state.isActive = false;
    },
    setType: (state: AlertState, action: PayloadAction<AlertType>) => {
      state.type = action.payload;
    },
    setMessage: (state: AlertState, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { showAlert, closeAlert, setType, setMessage } =
  alertSlice.actions;
export default alertSlice.reducer;
