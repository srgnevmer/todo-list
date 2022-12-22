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
    closeModal: (state: ModalState) => {
      state.isActive = false;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
