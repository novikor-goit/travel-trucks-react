import { useSelector } from 'react-redux';
import { truckDetailsSelector } from '../redux/trucks/truckSelectors';
import truckFeatures from '../utils/truckFeatures.js';
import CategoriesFeaturesLabels from './CategoriesFeaturesLabels';

const Features = () => {
  const truckDetails = useSelector(truckDetailsSelector);

  if (!truckDetails) {
    return <p>No details available.</p>;
  }

  return (
    <div className="w-full bg-bgHeaderColor px-[30px] py-[10px] lg:px-[80px] lg:py-[44px] rounded-[10px] mt-[44px] mr-[8px] md:mr-[20px] lg:mr-[40px]">
      <ul className="flex justify-center flex-wrap gap-[8px] mt-[24px]">
        {truckFeatures.map(
          (feature) =>
            truckDetails[feature.type] === feature.value && (
              <li key={feature.type}>
                <CategoriesFeaturesLabels iconId={feature.key} categoryLabel={feature.label} />
              </li>
            )
        )}
      </ul>

      <div className="mt-[100px]">
        <h2
          className="text-[16px] lg:text-[20px] border-b pb-[24px]"
          style={{ borderColor: 'var(--color-borderButtonColor)' }}>
          Vehicle details
        </h2>
        <ul className="flex flex-col mt-[24px] gap-[6px]">
          {['form', 'length', 'width', 'height', 'tank', 'consumption'].map((key) => (
            <li key={key} className="flex justify-between font-medium text-[16px]">
              <span className="text-[12px] lg:text-[16px] capitalize">{key}:</span>
              <span className="text-[12px] lg:text-[16px]">{truckDetails[key]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
