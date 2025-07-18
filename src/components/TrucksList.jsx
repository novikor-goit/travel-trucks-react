import { useSelector } from 'react-redux';
import { selectTrucks } from '../redux/trucks/selectors.js';
import Truck from './Truck.jsx';

const TrucksList = () => {
  const trucks = useSelector(selectTrucks);

  return (
    <ul className="flex flex-col gap-[6px]">
      {trucks.map((truck) => (
        <Truck key={truck.id} truck={truck} />
      ))}
    </ul>
  );
};

export default TrucksList;
