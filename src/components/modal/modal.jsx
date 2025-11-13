import { createPortal } from 'react-dom';
import cn from './modal.module.css';

export const Modal = ({ children, isEdit, setIsEdit }) => {
  return (
    isEdit &&
    createPortal(
      <div className={cn.contentWrapper}>
        <div className={cn.closeButton} onClick={() => setIsEdit(false)}>
          X
        </div>

        {children}
      </div>,
      document.getElementById('globalModal')
    )
  );
};
