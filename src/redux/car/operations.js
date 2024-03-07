import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65e8c0744bb72f0a9c504f7c.mockapi.io/apiCar/';

export const getCarsBrands = createAsyncThunk(
  'car/brands',
  async (thunkAPI) => {
    try {
      const { data } = await axios.get('makes');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getCarsData = createAsyncThunk('car/data', async (thunkAPI) => {
  try {
    const { data } = await axios.get('car');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
