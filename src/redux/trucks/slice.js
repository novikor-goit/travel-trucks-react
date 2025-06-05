import { createSlice } from '@reduxjs/toolkit';
import { fetchTrucksData, getTruckByID } from './trucksOperations';

const initialState = {
  trucks: [],
  truckDetails: null,
  isLoading: false,
  error: null
};

const slice = createSlice({
  name: 'trucks',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucksData.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        if ((action.meta.arg?.page || 1) === 1) {
          state.trucks = [];
        }
      })
      .addCase(fetchTrucksData.fulfilled, (state, action) => {
        state.isLoading = false;
        const page = action.meta.arg?.page || 1;
        if (page === 1) {
          state.trucks = action.payload;
        } else {
          state.trucks = [...state.trucks, ...action.payload];
        }
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

export default slice.reducer;
