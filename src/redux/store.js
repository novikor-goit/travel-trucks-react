import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import trucksReducer from './trucks/slice.js';
import favoritesReducer from './favorites/slice.js';
import filtersReducer from './filters/slice.js';

const favoritesPersistenceReducer = persistReducer(
  {
    key: 'favorites',
    storage
  },
  favoritesReducer
);

const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    favorites: favoritesPersistenceReducer,
    filters: filtersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignoring of redux-persist actions
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
});

const persistor = persistStore(store);

export { store, persistor };
