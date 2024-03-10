import { useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { closeModal } from '../../redux/modal/modalSlice';
import { CloseBtn } from '../Btn/CloseBtn';
import css from './Modal.module.css';

export const Modal = ({ body }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', memoizedhandleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', memoizedhandleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const memoizedhandleKeyDown = useCallback(
    (evt) => {
      if (evt.code === 'Escape') {
        dispatch(closeModal());
      }
    },
    [dispatch]
  );

  const memoizedhandleOverlayClick = useCallback(
    (evt) => {
      if (evt.target === evt.currentTarget) {
        dispatch(closeModal());
      }
    },
    [dispatch]
  );

  return (
    <div className={css.backdrop} onClick={memoizedhandleOverlayClick}>
      <div className={css.modal}>
        <CloseBtn closeModal={() => dispatch(closeModal())} />
        {body}
      </div>
    </div>
  );
};
