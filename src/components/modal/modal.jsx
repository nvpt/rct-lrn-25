import { createPortal } from 'react-dom';
import cn from './modal.module.css';
import classNames from 'classnames';

export const Modal = ({ children, isOpen, setIsOpen, className }) => {
  return (
    isOpen &&
    createPortal(
      <div className={classNames(cn.contentWrapper, className)}>
        <div className={cn.closeButton} onClick={() => setIsOpen(false)}>
          X
        </div>

        {children}
      </div>,
      document.getElementById('globalModal')
    )
  );
};
