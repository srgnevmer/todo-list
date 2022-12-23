import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isActive: boolean;
}

const initialState: ModalState = {
  isActive: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state: ModalState) => {
      state.isActive = true;
    },
    hideModal: (state: ModalState) => {
      state.isActive = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
