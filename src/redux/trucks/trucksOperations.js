import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchTrucksData = createAsyncThunk('trucks/fetchAll', async (_, thunkAPI) => {
  // TODO
});

export const getTruckByID = createAsyncThunk('trucks/fetchDetails', async (id, thunkAPI) => {
  // TODO
});
