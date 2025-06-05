import { Route, Routes } from 'react-router-dom';
import { lazy, startTransition, Suspense, useEffect } from 'react';
import LoaderClockLoader from './components/LoaderClockLoader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrucksData } from './redux/trucks/trucksOperations.js';
import { selectLimit, selectPage } from './redux/filters/slice.js';
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

  useEffect(() => {
    startTransition(() => {
      dispatch(fetchTrucksData({ page, limit }));
    });
  }, [dispatch, page, limit]);

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
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
