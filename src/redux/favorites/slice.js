import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: []
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },

    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    }
  }
});

export const favoritesSelector = (state) => state.favorites.favorites;

export const { addToFavorites, removeFromFavorites } = slice.actions;
export default slice.reducer;
