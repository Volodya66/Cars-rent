import { createSlice } from '@reduxjs/toolkit';

import { getCarsData, getCarsBrands } from './operations';

const initialState = {
  carBrands: [],
  dataCars: null,
  error: '',
  isLoading: false,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarsData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCarsData.fulfilled, (state, { payload }) => {
      state.dataCars = payload;
      state.isLoading = false;
    });
    builder.addCase(getCarsData.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getCarsBrands.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCarsBrands.fulfilled, (state, { payload }) => {
      state.carBrands = payload;
      state.isLoading = false;
    });
    builder.addCase(getCarsBrands.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const carReducer = carSlice.reducer;
