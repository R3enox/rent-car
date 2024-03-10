import svg from '../../assets/sprite.svg';
import css from './IconStyle.module.css';
export const IconCross = () => {
  return (
    <svg className={css.cross}>
      <use href={svg + '#icon-cross'}></use>
    </svg>
  );
};
