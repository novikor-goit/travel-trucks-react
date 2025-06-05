import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import {
  addToFavorites,
  favoritesSelector,
  removeFromFavorites
} from '../redux/favorites/slice.js';
import truckFeatures from '../utils/truckFeatures.js';
import CategoriesFeaturesLabels from './CategoriesFeaturesLabels';
import spriteTrucks from '../assets/spriteTrucks.svg';

const Truck = ({ truck }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(favoritesSelector);
  const isFavorite = favorites.includes(truck.id);

  const handleToggleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(truck.id));
    } else {
      dispatch(addToFavorites(truck.id));
    }
  };

  return (
    <li
      className="flex flex-col md:flex-row p-[14px] border-[1px] rounded-[20px] outline-0 focus:ring-2 mb-8  focus:ring-textAccent hover:ring-1 hover:ring-textAccent"
      style={{ borderColor: 'var(--color-borderButtonColor)' }}>
      <img
        src={truck.gallery[0]?.thumb || 'https://defaultPicture'}
        alt={`${truck.name} preview`}
        className="mainImgPrev object-cover rounded-[10px] md:max-w-[292px] md:max-h-[320px]"
      />
      <div className="md:ml-[24px] md:w-full">
        <div className="flex justify-between">
          <h2 className="text-[18px] lg:text-[24px] leading-[32px]">{truck.name}</h2>
          <div className="flex">
            <strong className="text-[14px] lg:text-[24px] font-medium leading-[32px]">
              &#36; {truck.price}
            </strong>
            <Button
              iconW="24px"
              iconH="24px"
              onClick={handleToggleFavorites}
              icon="iconHeartBlack"
              className={`ml-[12px] mt-[6px] md:mt-[0px] w-[24px] h-[24px] ${
                isFavorite ? 'fill-heartColor' : 'fill-textPrimary'
              }`}
            />
          </div>
        </div>

        <div className="lg:flex mt-[8px]">
          <div className="flex lg:flex-row items-center  flex-wrap">
            <svg
              className={`w-[16px] h-[16px] ${
                truck.reviews && truck.reviews.length > 0 ? 'fill-starColor' : 'fill-bgBadgeColor'
              }`}>
              <use className="w-[32px] h-[32px] " href={`${spriteTrucks}#iconStarGrey`}></use>
            </svg>
            <p className="text-[14px] lg:text-[16px] mt-[0px]  ml-[4px]">{truck.rating}</p>
          </div>

          <div className="flex items-center  flex-wrap">
            <svg className="fill-textPrimary ml-[0px] lg:ml-[16px]" width="16" height="16">
              <use className="w-[32px] h-[32px] " href={`${spriteTrucks}#iconMapGrey`}></use>
            </svg>
            <p className="text-[14px] lg:text-[16px] ml-[4px]">{truck.location}</p>
          </div>
        </div>

        <p className="text-[14px] md:text-[16px] mt-[24px] line-clamp-1 text-textMonthPassed font-normal">
          {truck.description}
        </p>
        <ul className="flex flex-wrap gap-[4px] md:gap-[8px] mt-[24px]">
          {truckFeatures.map(
            (feature) =>
              truck[feature.type] === feature.value && (
                <li key={feature.type}>
                  <CategoriesFeaturesLabels iconId={feature.key} categoryLabel={feature.label} />
                </li>
              )
          )}
        </ul>
        <div className="flex justify-center md:justify-start w-full">
          <Link
            to={`/catalog/${truck.id}`}
            state={{ from: '/catalog' }}
            rel="noopener noreferrer"
            className="mt-[24px] min-w-[173px] max-w-[250px] font-medium py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textSecondary bg-ButtonPrimaryColor rounded-[200px] inline-flex items-center justify-center  hover:bg-linear-45 hover:hover:bg-ButtonPushedColor">
            Show more
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Truck;
