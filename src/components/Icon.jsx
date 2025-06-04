import spriteTrucks from '../assets/spriteTrucks.svg';

const Icon = ({ id = '', iconW = '32px', iconH = '32px', classSizeSVG }) => {
  return (
    <svg className={classSizeSVG} width={iconW} height={iconH}>
      <use href={`${spriteTrucks}#${id}`}></use>
    </svg>
  );
};

export default Icon;
