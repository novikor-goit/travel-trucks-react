import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import TrucksList from '../components/TrucksList';
import {
  selectError,
  selectHasMore,
  selectIsLoading,
  selectTrucks
} from '../redux/trucks/selectors.js';
import Filters from '../components/Filters.jsx';
import Loader from '../components/Loader';
import { incrementPage } from '../redux/filters/slice.js';
import useSyncFiltersWithURL from '../hooks/useSyncFiltersWithURL.js';

const CatalogPage = () => {
  useSyncFiltersWithURL();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const trucks = useSelector(selectTrucks);
  const hasMore = useSelector(selectHasMore);

  const handleLoadMore = (event) => {
    dispatch(incrementPage());
    event.target.blur();
  };

  return (
    <section className="px-[12px] pt-[12px] pb-[40px]  lg:px-[64px] lg:pt-[48px] lg:pb-[50px]">
      <div className="flex flex-row w-full">
        <aside className="hidden lg:block max-w-[488px]  ">
          <Filters />
        </aside>

        <div className="max-w-[936px]">
          {error && <p>{error}</p>}
          <TrucksList />

          {!isLoading && trucks.length === 0 && (
            <p className="text-center mt-[20px]">Sorry, nothing matches your filters</p>
          )}

          {!isLoading && hasMore && trucks.length > 0 && (
            <div className="flex items-center justify-center mt-[20px] lg:mt-[30px]">
              <Button
                onClick={handleLoadMore}
                buttonLabel="Load more"
                className="min-w-[173px] max-w-[250px] py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textPrimary bg-bgPrimaryColor rounded-[200px] border border-borderButtonColor inline-flex items-center justify-center  hover:border-borderButtonHoverColor"
              />
            </div>
          )}
          {isLoading && (
            <div className="w-full relative">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
