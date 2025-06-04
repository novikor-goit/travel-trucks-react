import { useSelector } from 'react-redux';
import Button from '../components/Button';
import TrucksList from '../components/TrucksList';
import { useEffect, useState } from 'react';
import { selectIsLoading, selectTrucks } from '../redux/trucks/selectors.js';
import { applyFilters } from '../utils/applyFilters';
import Filters from '../components/Filters.jsx';
import Loader from '../components/Loader';

const initialFilterState = {
  location: '',
  transmission: '',
  engine: '',
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,

  Automatic: false,
  Petrol: false,
  Van: false,
  'Fully Integrated': false,
  Alcove: false
};

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);

  const trucks = useSelector(selectTrucks);

  const [visibleCount, setVisibleCount] = useState(4);
  const [formInput, setFormInput] = useState(
    JSON.parse(localStorage.getItem('filterForm')) ?? initialFilterState
  );
  const [renderTrigger, setRenderTrigger] = useState(formInput);
  const [filteredTrucks, setFilteredTrucks] = useState(trucks || []);

  useEffect(() => {
    const storageFilter = localStorage.getItem('filterForm');

    if (storageFilter) {
      const filtered = applyFilters(trucks, renderTrigger);

      localStorage.setItem('filterForm', JSON.stringify(renderTrigger));
      setFilteredTrucks(filtered);
    } else {
      const filtered = applyFilters(trucks, renderTrigger);
      localStorage.setItem('filterForm', JSON.stringify(renderTrigger));

      setFilteredTrucks(filtered);
      setVisibleCount(4);
      setFilteredTrucks(trucks);
    }
  }, [trucks, renderTrigger]);

  const handleLoadMore = (event) => {
    setVisibleCount((prevCount) => prevCount + 4);
    event.target.blur();
  };

  return (
    <section className="px-[12px] pt-[12px] pb-[40px]  lg:px-[64px] lg:pt-[48px] lg:pb-[50px]">
      {/*! ========== section's container ========== */}
      <div className="flex flex-row w-full">
        <aside className="hidden lg:block max-w-[488px]  ">
          <Filters
            initialFilterState={initialFilterState}
            formInput={formInput}
            setFormInput={setFormInput}
            setFilteredTrucks={setFilteredTrucks}
            setRenderTrigger={setRenderTrigger}
            setVisibleCount={setVisibleCount}
          />
        </aside>

        {isLoading ? (
          <div className="w-full relative">
            <Loader />
          </div>
        ) : (
          <div className="max-w-[936px]">
            <TrucksList visibleCount={visibleCount} trucks={filteredTrucks} formInput={formInput} />

            {!isLoading && filteredTrucks.length > visibleCount && (
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
