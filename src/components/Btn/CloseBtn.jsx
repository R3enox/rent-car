import { IconCross } from '../Icon/IconCross';
import css from './BtnStyles.module.css';
export const CloseBtn = ({ closeModal }) => {
  return (
    <button className={css.btnCross} type="button" onClick={closeModal}>
      <IconCross />
    </button>
  );
};
