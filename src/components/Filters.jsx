import InputFilter from './InputFilter';
import Button from './Button';

import { vehicleEquipmentFilters, vehicleTypeFilters } from '../utils/vehicleFilters';
import { useSelector } from 'react-redux';
import { trucksSelector } from '../redux/trucks/truckSelectors';

const Filters = ({
  initialFilterState,
  formInput,
  setFormInput,
  setFilteredTrucks,
  setRenderTrigger,
  setVisibleCount
}) => {
  const trucks = useSelector(trucksSelector);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleEquipmentFilterClick = (filterName) => {
    setFormInput((prev) => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };
  const handleVehicleTypeClick = (formType) => {
    setFormInput((prev) => ({
      ...prev,
      [formType]: !prev[formType]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRenderTrigger(formInput);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormInput(initialFilterState);
    localStorage.setItem('filterForm', JSON.stringify(trucks));
    setFilteredTrucks(trucks);
    setVisibleCount(4);
    e.target.blur();
  };
  return (
    <div className="px-[32px] pt-[20px] pb-[50px]  md:px-[14px] md:pt-[8px] md:py-[32px]  lg:px-[44px] lg:py-[48px]">
      <form onSubmit={handleSubmit}>
        <p className="text-textSecondary lg:text-[#475467] text-[12px] lg:text-[16px] font-normal leading-[24px]">
          Location
        </p>
        <InputFilter
          name="location"
          placeholder="Location"
          onInputChange={handleInputChange}
          value={formInput.location}
        />
        <p className="text-[12px] lg:text-[16px] text-textSecondary lg:text-[#475467] font-medium leading-[24px] mt-[16px] lg:mt-[40px]">
          Filters
        </p>

        <div className="mt-[16px] lg:mt-[32px]  text-center lg:text-left">
          <strong className="text-[14px] lg:text-[20px]  ">Vehicle equipment</strong>
          <div
            className="border-t mt-[2px] lg:mt-[24px]"
            style={{ borderColor: 'var(--color-borderButtonColor)' }}></div>
          <ul className="flex flex-wrap items-center justify-center gap-x-[12px] gap-y-[8px] mt-[24px]">
            {vehicleEquipmentFilters.map((filterFeature, ind) => (
              <li key={ind}>
                <Button
                  buttonLabel={filterFeature.labelFilter}
                  icon={filterFeature.iconFilter}
                  onClick={() => handleEquipmentFilterClick(filterFeature.labelFilter)}
                  className={`flex flex-col items-center justify-center buttonFilters ${
                    formInput[filterFeature.labelFilter] ? 'buttonFiltersActive' : ''
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[20px] lg:mt-[32px]  text-center lg:text-left">
          <strong className="text-[14px] lg:text-[20px]">Vehicle type</strong>
          <div
            className="border-t mt-[2px] lg:mt-[24px]"
            style={{ borderColor: 'var(--color-borderButtonColor)' }}></div>
          <ul className="flex flex-wrap items-center justify-center gap-x-[12px] gap-y-[8px] mt-[24px]">
            {vehicleTypeFilters.map((typeFilter, ind) => (
              <li key={ind}>
                <Button
                  buttonLabel={typeFilter.labelFilter}
                  icon={typeFilter.iconFilter}
                  onClick={() => handleVehicleTypeClick(typeFilter.labelFilter)}
                  className={`flex flex-col items-center justify-center  } buttonFilters  ${
                    formInput[typeFilter.labelFilter] ? 'buttonFiltersActive' : ''
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row justify-between items-center lg:flex-col">
          <div className="flex items-center justify-center order-2 lg:order-1 mx-[20px]">
            <Button
              buttonLabel="Search"
              type="submit"
              className="min-w-[40px] md:min-w-[173px] max-w-[250px]  px-[18px] py-[6px]  md:px-[48px] md:py-[12px]  tracking-[-0.08px] leading-[1.5em] text-center text-textSecondary bg-ButtonPrimaryColor rounded-[200px] inline-flex items-center justify-center  hover:bg-linear-45 hover:from-[#3c9767] from-40% hover:to-[#ffc531] to-90% hover:shadow-lg hover:shadow-green-500/50 outline-0 focus:ring-2 focus:ring-green-500/50 focus:bg-ButtonHoverColor focus:shadow-lg focus:shadow-green-500/50 transition-colors duration-300 ease-in mt-[40px]"
            />
          </div>
          <div className="flex items-center justify-center order-1 lg:order-2 mx-[22px]">
            <Button
              onClick={handleReset}
              buttonLabel="Reset"
              className="min-w-[40px] max-w-[250px]  px-[18px] py-[6px]  md:px-[48px] md:py-[12px]  tracking-[-0.08px] leading-[1.5em] text-center text-textPrimary bg-bgPrimaryColor rounded-[12px] border border-borderButtonColor inline-flex items-center justify-center  hover:ring-heartColor hover:ring-1  outline-0 focus:ring-2  focus:ring-heartColor focus:shadow-lg  active:ring-0 active:shadow-[inset_0px_2px_5px_rgba(0,0,0,0.2)] active:shadow-textPlaceholder transition-all duration-200 ease-in-out mt-[40px]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filters;
