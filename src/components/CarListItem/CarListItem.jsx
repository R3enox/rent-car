import { useDispatch, useSelector } from 'react-redux';
import { LearnMore } from '../Btn/LearnMore';
import { FavoriteBtn } from '../Btn/FavoriteBtn';
import { openModal } from '../../redux/modal/modalSlice';
import { selectFavoritesCars } from '../../redux/favorites/favoritesSelectors';
import {
  addFavorite,
  deleteFavorite,
} from '../../redux/favorites/favoritesSlice';
import { replaceLastFourWords } from '../../helpers/replaceLastFourWords';
import defaultImg from '../../assets/img/defaultImg.jpg';
import css from './CarListItem.module.css';

export const CarListItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoritesCars = useSelector(selectFavoritesCars);
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

  const addressParts = address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();
  const firstFunctionalities = functionalities[0];

  const isFavorite = favoritesCars.some(({ id }) => id === car.id);

  const handleFavoriteClick = () => {
    dispatch(isFavorite ? deleteFavorite(car) : addFavorite(car));
  };

  return (
    <>
      <li className={css.listItem} key={id}>
        <div className={css.imgWrapper}>
          <img className={css.imgItem} src={img ? img : defaultImg} alt="car" />
          <FavoriteBtn
            handleFavoriteClick={handleFavoriteClick}
            isFavorite={isFavorite}
          />
        </div>
        <div className={css.titleWrapper}>
          <h2 className={css.title}>
            {make} <span className={css.blueClr}>{model}</span>, {year}
          </h2>
          <p>{rentalPrice}</p>
        </div>
        <ul className={css.listDesc}>
          <li className={css.listItemDesc}>
            <p>{city}</p>
          </li>
          <li className={css.listItemDesc}>
            <p>{country} </p>
          </li>
          <li className={css.listItemDesc}>
            <p>{rentalCompany}</p>
          </li>
          <li className={css.listItemDesc}>
            <p>Premium</p>
          </li>
          <li className={css.listItemDesc}>
            <p>{type}</p>
          </li>
          <li className={css.listItemDesc}>
            <p>{model}</p>
          </li>
          <li className={css.listItemDesc}>
            <p>{mileage}</p>
          </li>
          <li className={css.listItemDesc}>
            <p>{replaceLastFourWords(firstFunctionalities)}</p>
          </li>
        </ul>
        <LearnMore openModal={() => dispatch(openModal(car))} />
      </li>
    </>
  );
};
