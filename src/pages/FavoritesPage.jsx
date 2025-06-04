import { useSelector } from 'react-redux';
import TrucksList from '../components/TrucksList';
import { favoriteTrucksSelector } from '../redux/trucks/selectors.js';

const FavoritesPage = () => {
  const trucks = useSelector(favoriteTrucksSelector);

  return (
    <section className="px-[12px] pt-[12px] pb-[40px]  lg:px-[64px] lg:pt-[48px] lg:pb-[50px]">
      <div className="flex flex-row w-full">
        <div className="max-w-[936px]">
          <TrucksList visibleCount={trucks.length} trucks={trucks} />
        </div>
      </div>
    </section>
  );
};

export default FavoritesPage;
