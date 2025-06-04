import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import trucksReducer from './trucks/trucksSlice';
import favoritesReducer from './favorites/favoritesSlice.js';
import filterOpenReducer from './trucks/filterOpen';

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
    filterOpen: filterOpenReducer
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
