import { IconHeart } from '../Icon/IconHeart';
import css from './BtnStyles.module.css';

export const FavoriteBtn = ({ handleFavoriteClick, isFavorite }) => {
  return (
    <button
      className={css.btnFavorite}
      type="button"
      onClick={handleFavoriteClick}
    >
      <IconHeart isFavorite={isFavorite} />
    </button>
  );
};
