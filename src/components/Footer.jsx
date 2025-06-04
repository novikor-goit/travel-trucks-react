import Icon from './Icon.jsx';

function Footer() {
  return (
    <footer className="flex bg-bg-bgBadgeColor gap-[16px] px-[44px] py-[16px] justify-center items-center flex-wrap">
      <p className="inline-flex flexmt-[8px] text-[12px] sm:text-[14px] md:text-[18px]">
        {' '}
        &#169; 2025
      </p>
      <Icon id="iconGrin" iconW="14px" iconH="14px" className="inline-flex" />
      <div className="text-[12px] sm:text-[16px] gap-[2px]">
        <p>"...At the end of the storm,</p>
        <p className="text-right">Is a golden sky..."</p>
      </div>
    </footer>
  );
}

export default Footer;
