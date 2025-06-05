import { startTransition, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucksData } from '../redux/trucks/trucksOperations.js';
import {
  selectFilters,
  selectLimit,
  selectPage,
  setFilterField,
  setLimit,
  setPage
} from '../redux/filters/slice.js';

const useSyncFiltersWithURL = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const filters = useSelector(selectFilters);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.forEach((value, key) => {
      if (key === 'page') {
        dispatch(setPage(Number(value)));
        return;
      }
      if (key === 'limit') {
        dispatch(setLimit(Number(value)));
        return;
      }

      if (key === 'transmission' && value === 'automatic') {
        dispatch(setFilterField({ field: 'Automatic', value: true }));
        return;
      }

      if (key === 'form') {
        const map = {
          panelTruck: 'Van',
          fullyIntegrated: 'Fully Integrated',
          alcove: 'Alcove'
        };
        const field = map[value];
        if (field) dispatch(setFilterField({ field, value: true }));
        return;
      }

      if (value === 'true') {
        dispatch(setFilterField({ field: key, value: true }));
        return;
      }

      dispatch(setFilterField({ field: key, value }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch trucks when pagination changes
  useEffect(() => {
    startTransition(() => {
      dispatch(fetchTrucksData({ page, limit }));
    });
  }, [dispatch, page, limit]);

  // Keep query parameters in sync with filters and pagination
  useEffect(() => {
    const params = {};
    if (filters.location) params.location = filters.location;
    const boolFields = [
      'AC',
      'bathroom',
      'kitchen',
      'TV',
      'radio',
      'refrigerator',
      'microwave',
      'gas',
      'water'
    ];
    boolFields.forEach((field) => {
      if (filters[field]) params[field] = true;
    });
    if (filters.Automatic) params.transmission = 'automatic';
    if (filters.Van) params.form = 'panelTruck';
    if (filters['Fully Integrated']) params.form = 'fullyIntegrated';
    if (filters.Alcove) params.form = 'alcove';
    params.page = page;
    params.limit = limit;
    setSearchParams(params);
  }, [filters, page, limit, setSearchParams]);
};

export default useSyncFiltersWithURL;
