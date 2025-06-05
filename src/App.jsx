import { Route, Routes, useSearchParams } from 'react-router-dom';
import { lazy, startTransition, Suspense, useEffect } from 'react';
import LoaderClockLoader from './components/LoaderClockLoader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucksData } from './redux/trucks/trucksOperations.js';
import {
  selectLimit,
  selectPage,
  selectFilters,
  setFilterField,
  setPage,
  setLimit
} from './redux/filters/slice.js';
import Layout from './components/Layout.jsx';

const MainPage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const TruckPage = lazy(() => import('./pages/TruckPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const Features = lazy(() => import('./components/Features'));
const Reviews = lazy(() => import('./components/Reviews'));

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const filters = useSelector(selectFilters);
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize filters from URL parameters
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

  return (
    <Suspense
      fallback={
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            zIndex: 100
          }}>
          <LoaderClockLoader />
        </div>
      }>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="catalog/:id" element={<TruckPage />}>
            <Route path="features?" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route
            path="*"
            element={
              <p className={'text-center text-[24px] font-bold mt-[20px]'}>Page not found</p>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
