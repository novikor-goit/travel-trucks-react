import clsx from 'clsx';
import { useEffect } from 'react';

const Modal = ({ isOpen, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  return (
    <div
      className={clsx(
        'lg:hidden fixed w-full h-full mt-[72px] px-0 z-19 right-0 -top-full flex flex-col items-center  bg-textMonthPassed opacity-98  duration-500  max-h-[calc(100vh-72px-env(safe-area-inset-bottom))] overflow-y-auto',
        isOpen && 'top-0'
      )}>
      {children}
    </div>
  );
};

export default Modal;
