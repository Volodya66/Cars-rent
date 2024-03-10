import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65e8c0744bb72f0a9c504f7c.mockapi.io/apiCar/';

export const getCars = createAsyncThunk(
  'car/carsPagination',
  async (page = 1, thunkAPI) => {
    console.log('page: ', page);
    try {
      const { data } = await axios.get('car', {
        params: {
          page: page,
          limit: 12,
        },
      });

      if (data.length === 0) {
        Notiflix.Notify.info('Немає автомобілей');
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateContactById = createAsyncThunk(
  'car/update',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `car/${id}`,
        { favorite: true },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('data: ', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getCarDetails = createAsyncThunk(
  'car/detailsId',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`car/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

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
