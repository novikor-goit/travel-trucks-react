import { createSelector } from '@reduxjs/toolkit';
import { favoritesSelector } from '../favorites/slice.js';

export const selectTrucks = (state) => state.trucks.trucks;
export const selectIsLoading = (state) => state.trucks.isLoading;
export const selectError = (state) => state.trucks.error;
export const selectTruckDetails = (state) => state.trucks.truckDetails;
export const isFilterOpenSelector = (state) => state.filterOpen.isOpen;
export const favoriteTrucksSelector = createSelector(
  [selectTrucks, favoritesSelector],
  (trucks, favorites) => {
    return trucks.filter((truck) => favorites.includes(truck.id));
  }
);
