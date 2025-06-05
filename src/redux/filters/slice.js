import { createSlice } from '@reduxjs/toolkit';

export const initialFilterState = {
  location: '',
  transmission: '',
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,
  Automatic: false,
  Van: false,
  'Fully Integrated': false,
  Alcove: false,
  page: 1,
  limit: 4
};

const slice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    setFilterField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetFilters: (state) => {
      Object.assign(state, initialFilterState);
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    }
  }
});

export const { setFilterField, resetFilters, incrementPage, setPage, setLimit } = slice.actions;

export const selectFilters = (state) => state.filters;
export const selectPage = (state) => state.filters.page;
export const selectLimit = (state) => state.filters.limit;

export default slice.reducer;
