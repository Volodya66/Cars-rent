import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenModal: false,
  dataModalCar: null,
};

const modalSlice = createSlice({
  name: 'modalDetails',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpenModal = true;
      state.dataModalCar = payload;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
      state.dataModalCar = null;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
