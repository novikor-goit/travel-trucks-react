import { Link } from 'react-router-dom';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { favoritesSelector } from '../redux/favorites/favoritesSlice';
import { addToFavorites, removeFromFavorites } from '../redux/favorites/favoritesSlice.js';
import truckFeatures from '../utils/truckFeatures.js';
import CategoriesFeaturesLabels from './CategoriesFeaturesLabels';
import spriteTrucks from '../assets/spriteTrucks.svg';

const TrucksList = ({ visibleCount, trucks }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(favoritesSelector);

  const visibleTrucks = trucks.slice(0, visibleCount);

  const handleAddRemoveFavorites = (truckId) => {
    if (favorites.includes(truckId)) {
      dispatch(removeFromFavorites(truckId));
    } else {
      dispatch(addToFavorites(truckId));
    }
  };

  return (
    <ul className="flex flex-col gap-[6px]">
      {visibleTrucks.map((truck) => {
        const isFavorite = favorites.includes(truck.id);

        return (
          <li
            key={truck.id}
            className="flex flex-col md:flex-row p-[14px] border-[1px] rounded-[20px] outline-0 focus:ring-2  focus:ring-textAccent hover:ring-1 hover:ring-textAccent"
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
                    onClick={() => handleAddRemoveFavorites(truck.id)}
                    icon="iconHeartBlack"
                    className={`ml-[12px] mt-[6px] md:mt-[0px] w-[24px] h-[24px] ${
                      isFavorite ? 'fill-heartColor' : 'fill-textPrimary' //а тут было isActive, стало isFavorite
                    }`}
                  />
                </div>
              </div>

              <div className="lg:flex mt-[8px]">
                <div className="flex lg:flex-row items-center  flex-wrap">
                  <svg
                    className={`w-[16px] h-[16px] ${
                      truck.reviews && truck.reviews.length > 0
                        ? 'fill-starColor'
                        : 'fill-bgBadgeColor'
                    }`}>
                    <use className="w-[32px] h-[32px] " href={`${spriteTrucks}#iconStarGrey`}></use>
                  </svg>
                  <p className="text-[14px] lg:text-[16px] mt-[0px]  ml-[4px]"> {truck.rating}</p>
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
                        <CategoriesFeaturesLabels
                          iconId={feature.key}
                          categoryLabel={feature.label}
                        />
                      </li>
                    )
                )}
              </ul>
              <div className="flex justify-center md:justify-end w-full">
                <Link
                  to={`/catalog/${truck.id}`}
                  state={{ from: '/catalog' }}
                  rel="noopener noreferrer"
                  className="mt-[24px] min-w-[173px] max-w-[250px] font-medium py-[16px] px-[48px] tracking-[-0.08px] leading-[1.5em] text-center text-textSecondary bg-ButtonPrimaryColor rounded-[200px] inline-flex items-center justify-center  hover:bg-linear-45 hover:from-[#3c9767] from-40% hover:to-[#ffc531] to-90% hover:shadow-lg hover:shadow-green-500/50 outline-0 focus:ring-2 focus:ring-green-500/50 focus:bg-ButtonHoverColor focus:shadow-lg focus:shadow-green-500/50 transition-colors duration-300 ease-in">
                  Show more
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TrucksList;
