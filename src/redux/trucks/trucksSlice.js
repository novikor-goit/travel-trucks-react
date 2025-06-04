import { createSlice } from '@reduxjs/toolkit';
import { fetchTrucksData, getTruckByID } from './trucksOperations';

const initialState = {
  trucks: [],
  truckDetails: null,
  isLoading: false,
  error: null
};

const trucksSlice = createSlice({
  name: 'trucks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucksData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTrucksData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trucks = action.payload;
      })
      .addCase(fetchTrucksData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getTruckByID.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTruckByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.truckDetails = action.payload;
      })
      .addCase(getTruckByID.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default trucksSlice.reducer;
