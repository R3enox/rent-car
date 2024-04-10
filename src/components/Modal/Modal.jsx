import { useEffect, useCallback } from 'react';
import { CloseBtn } from '../Btn/CloseBtn';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';

export const Modal = ({ body, setIsShowModal }) => {
  const portal = document.getElementById('portal');

  useEffect(() => {
    window.addEventListener('keydown', memoizedhandleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', memoizedhandleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const memoizedhandleKeyDown = useCallback(
    (evt) => {
      if (evt.code === 'Escape') {
        setIsShowModal(false);
      }
    },
    [setIsShowModal]
  );

  const memoizedhandleOverlayClick = useCallback(
    (evt) => {
      if (evt.target === evt.currentTarget) {
        setIsShowModal(false);
      }
    },
    [setIsShowModal]
  );

  return createPortal(
    <div className={css.backdrop} onClick={memoizedhandleOverlayClick}>
      <div className={css.modal}>
        <CloseBtn closeModal={() => setIsShowModal(false)} />
        {body}
      </div>
    </div>,
    portal
  );
};
