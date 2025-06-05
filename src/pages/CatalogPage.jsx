import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import TrucksList from '../components/TrucksList';
import { selectError, selectIsLoading } from '../redux/trucks/selectors.js';
import Filters from '../components/Filters.jsx';
import Loader from '../components/Loader';
import { incrementPage } from '../redux/filters/slice.js';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleLoadMore = (event) => {
    dispatch(incrementPage());
    event.target.blur();
  };

  return (
    <section className="px-[12px] pt-[12px] pb-[40px]  lg:px-[64px] lg:pt-[48px] lg:pb-[50px]">
      {/*! ========== section's container ========== */}
      <div className="flex flex-row w-full">
        <aside className="hidden lg:block max-w-[488px]  ">
          <Filters />
        </aside>

        {isLoading ? (
          <div className="w-full relative">
            <Loader />
          </div>
        ) : (
          <div className="max-w-[936px]">
            {error && <p>{error}</p>}
            <TrucksList />

            {!isLoading && (
              <div className="flex items-center justify-center mt-[20px] lg:mt-[30px]">
                <Button
                  onClick={handleLoadMore}
                  buttonLabel="Load more"
                  className="min-w-[173px] max-w-[250px] py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textPrimary bg-bgPrimaryColor rounded-[200px] border border-borderButtonColor inline-flex items-center justify-center  hover:bg-linear-45 hover:from-[#dadde1] from-40% hover:to-[#ffc531] to-90% outline-0 focus:ring-2 focus:ring-green-500/50 focus:bg-ButtonHoverColor focus:shadow-lg focus:shadow-green-500/50 transition-colors duration-300 ease-in "
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
