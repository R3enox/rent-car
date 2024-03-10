import svg from '../../assets/sprite.svg';
import css from './IconStyle.module.css';

export const IconHeart = ({ isFavorite }) => {
  return (
    <svg className={isFavorite ? css.isFavHeart : css.isNotFavHeart}>
      <use href={svg + '#icon-heart'}></use>
    </svg>
  );
};
