import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false
};

const filterOpenSlice = createSlice({
  name: 'filterOpen',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      state.isOpen = action.payload;
    }
  }
});

export const { toggleFilter } = filterOpenSlice.actions;

export default filterOpenSlice.reducer;
