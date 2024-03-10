import { useSelector } from 'react-redux';
import { selectFavoritesCars } from '../../redux/favorites/favoritesSelectors';
import { CarList } from '../../components/CarList/CarList';
import css from './FavoritesPage.module.css';
import { FavoriteTittle } from '../../components/FavoriteTitle/FavoriteTitle';

const FavoritesPage = () => {
  const favoritesCars = useSelector(selectFavoritesCars);
  return (
    <section className={css.container}>
      <FavoriteTittle />
      {favoritesCars.length === 0 ? (
        <p className={css.desc}>You haven't added your favorite car yet</p>
      ) : (
        <CarList cars={favoritesCars} />
      )}
    </section>
  );
};

export default FavoritesPage;
