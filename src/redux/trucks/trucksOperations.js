import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchTrucksData = createAsyncThunk(
  'trucks/fetchAll',
  async ({ page = 1, limit = 4 } = {}, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const filters = state.filters || {};

      const params = { page, limit };

      if (filters.location?.trim()) {
        params.location = filters.location.trim();
      }

      const boolFields = [
        'AC',
        'bathroom',
        'kitchen',
        'TV',
        'radio',
        'refrigerator',
        'microwave',
        'gas',
        'water'
      ];

      boolFields.forEach((field) => {
        if (filters[field]) {
          params[field] = true;
        }
      });

      if (filters.Automatic) {
        params.transmission = 'automatic';
      }

      if (filters.Van) {
        params.form = 'panelTruck';
      }

      if (filters['Fully Integrated']) {
        params.form = 'fullyIntegrated';
      }

      if (filters.Alcove) {
        params.form = 'alcove';
      }

      const { data } = await axios.get('/campers', {
        params
      });

      return { items: data.items, total: data.total };
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return { items: [], total: 0 };
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTruckByID = createAsyncThunk('trucks/fetchDetails', async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(`/campers/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
