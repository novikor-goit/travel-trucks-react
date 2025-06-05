import { createSelector } from '@reduxjs/toolkit';
import { favoritesSelector } from '../favorites/slice.js';
import { selectFilters, selectLimit, selectPage } from '../filters/slice.js';

export const selectTrucks = (state) => state.trucks.trucks;
export const selectIsLoading = (state) => state.trucks.isLoading;
export const selectError = (state) => state.trucks.error;
export const selectTruckDetails = (state) => state.trucks.truckDetails;

export const selectFilteredTrucks = createSelector(
  [selectTrucks, selectFilters],
  (trucks, filters) => {
    // TODO: implement filtering on API level
    return trucks;
  }
);

export const selectPaginatedTrucks = createSelector(
  [selectFilteredTrucks, selectPage, selectLimit],
  (trucks, page, limit) => trucks.slice(0, page * limit)
);

export const favoriteTrucksSelector = createSelector(
  [selectTrucks, favoritesSelector],
  (trucks, favorites) => {
    return trucks.filter((truck) => favorites.includes(truck.id));
  }
);
