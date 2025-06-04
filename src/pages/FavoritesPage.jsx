import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import TrucksList from '../components/TrucksList';
import Filters from '../components/Filters.jsx';
import Button from '../components/Button';
import Modal from '../components/Modal.jsx';
import {
  trucksSelector,
  favoritesSelector,
  isFilterOpenSelector
} from '../redux/trucks/truckSelectors';
import { applyFilters } from '../utils/applyFilters';

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

const FavoritesPage = () => {
  const trucks = useSelector(trucksSelector);
  const favorites = useSelector(favoritesSelector);
  const isFilterOpen = useSelector(isFilterOpenSelector);

  const [formInput, setFormInput] = useState(initialFilterState);
  const [renderTrigger, setRenderTrigger] = useState(formInput);
  const [filteredTrucks, setFilteredTrucks] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const favoriteTrucks = trucks.filter((truck) => favorites.includes(truck.id));
    const filtered = applyFilters(favoriteTrucks, renderTrigger);
    setFilteredTrucks(filtered);
  }, [trucks, favorites, renderTrigger]);

  const handleLoadMore = (event) => {
    setVisibleCount((prev) => prev + 4);
    event.target.blur();
  };

  return (
    <section className="px-[12px] pt-[12px] pb-[40px]  lg:px-[64px] lg:pt-[48px] lg:pb-[50px]">
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
        <div className="max-w-[936px]">
          <TrucksList
            visibleCount={visibleCount}
            filteredTrucks={filteredTrucks}
            formInput={formInput}
          />
          {filteredTrucks.length > visibleCount && (
            <div className="flex items-center justify-center mt-[20px] lg:mt-[30px]">
              <Button
                onClick={handleLoadMore}
                buttonLabel="Load more"
                className="min-w-[173px] max-w-[250px] py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textPrimary bg-bgPrimaryColor rounded-[200px] border border-borderButtonColor inline-flex items-center justify-center  hover:bg-linear-45 hover:from-[#dadde1] from-40% hover:to-[#ffc531] to-90% outline-0 focus:ring-2 focus:ring-green-500/50 focus:bg-ButtonHoverColor focus:shadow-lg focus:shadow-green-500/50 transition-colors duration-300 ease-in "
              />
            </div>
          )}
        </div>
        <Modal isOpen={isFilterOpen}>
          <Filters
            initialFilterState={initialFilterState}
            formInput={formInput}
            setFormInput={setFormInput}
            setFilteredTrucks={setFilteredTrucks}
            setRenderTrigger={setRenderTrigger}
            setVisibleCount={setVisibleCount}
          />
        </Modal>
      </div>
    </section>
  );
};

export default FavoritesPage;
