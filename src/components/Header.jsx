import { Link, NavLink } from 'react-router-dom';

import Logo2x from '../assets/images/Logo@2x.webp';
import Logo1x from '../assets/images/Logo1x.webp';

function Header() {
  const getLinkClasses = ({ isActive }) => {
    return isActive
      ? 'text-textAccent'
      : 'notActiveNavLink hover:text-textAccent duration-200 ease-in';
  };

  return (
    <>
      <header className="grid grid-cols-3 px-[20px] md:px-[64px] py-[24px] items-center bg-bgBadgeColor fixed top-0 left-0 inset-x-0 z-20">
        <div className="col-span-1">
          <Link to="/">
            <picture>
              <source srcSet={Logo1x} type="image/webp" />
              <img
                src={Logo2x}
                alt="logo traveltruck"
                className="min-w-[112px] transition-colors duration-300 ease-in-out hover:filter hover:invert hover:saturate-220 hover:contrast-45 hover:hue-rotate-[95deg]"
              />
            </picture>
          </Link>
        </div>
        <nav className="col-span-1 flex gap-12 justify-center">
          <NavLink
            end
            to={'/'}
            className={({ isActive }) =>
              `hidden lg:block ${
                isActive
                  ? 'text-textAccent'
                  : 'notActiveNavLink hover:text-textAccent duration-200 ease-in'
              }`
            }>
            Home
          </NavLink>
          <NavLink end to={'catalog'} className={getLinkClasses}>
            Catalog
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
