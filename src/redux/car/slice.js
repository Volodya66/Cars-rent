import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  car: [],
  error: '',
  isLoading: false,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(, (state, { payload }) => {
    //   state.favorites = payload.drinks;
    // });
  },
});

export const carReducer = carSlice.reducer;
