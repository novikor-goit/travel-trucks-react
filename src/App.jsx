import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoaderClockLoader from './components/LoaderClockLoader';
import Layout from './components/Layout.jsx';

const MainPage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const TruckPage = lazy(() => import('./pages/TruckPage'));
const Features = lazy(() => import('./components/Features'));
const Reviews = lazy(() => import('./components/Reviews'));

const App = () => {
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
