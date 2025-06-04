import spriteTrucks from '../assets/spriteTrucks.svg';

const CategoriesFeaturesLabels = ({ iconId, categoryLabel }) => {
  return (
    <div className="flex items-center w-auto h-auto px-[12px] py-[6px] md:px-[18px] md:py-[12px] bg-bgBadgeColor rounded-[100px]">
      {/* <svg className="flex items-center w-[16px] h-[16px] md:w-[20px] md:h-[20px]"> */}
      <svg className=" w-[14px] h-[14px] md:w-[20px] md:h-[20px]">
        <use href={`${spriteTrucks}#${iconId}`}></use>
      </svg>
      <p className="ml-[8px] font-medium leading-[20px] text-[10px] md:text-[16px] capitalize">
        {categoryLabel}
      </p>
    </div>
  );
};

export default CategoriesFeaturesLabels;
