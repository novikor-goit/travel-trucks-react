import { useSelector } from 'react-redux';
import Truck from '../components/Truck.jsx';
import { favoriteTrucksSelector } from '../redux/trucks/selectors.js';

const FavoritesPage = () => {
  const trucks = useSelector(favoriteTrucksSelector);

  return (
    <section className="px-[12px] pt-[12px] pb-[40px]  lg:px-[64px] lg:pt-[48px] lg:pb-[50px]">
      <div className="flex flex-row w-full">
        <div className="max-w-[936px]">
          <ul className="flex flex-col gap-[6px]">
            {trucks.map((truck) => (
              <Truck key={truck.id} truck={truck} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FavoritesPage;
