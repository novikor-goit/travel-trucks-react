import { createSelector } from '@reduxjs/toolkit';
import { favoritesSelector } from '../favorites/favoritesSlice.js';

export const trucksSelector = (state) => state.trucks.trucks;
export const isLoadingSelector = (state) => state.trucks.isLoading;
export const errorSelector = (state) => state.trucks.error;
export const truckDetailsSelector = (state) => state.trucks.truckDetails;
export const isFilterOpenSelector = (state) => state.filterOpen.isOpen;
export const favoriteTrucksSelector = createSelector(
  [trucksSelector, favoritesSelector],
  (trucks, favorites) => {
    return trucks.filter((truck) => favorites.includes(truck.id));
  }
);
