import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  activeComponent: string | null;
}

const initialState: ModalState = {
  isOpen: false,
  activeComponent: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModalState = (state: { modal: ModalState }) => state.modal;
export default modalSlice.reducer;