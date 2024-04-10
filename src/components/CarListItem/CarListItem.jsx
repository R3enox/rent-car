import { useDispatch, useSelector } from 'react-redux';
import { LearnMore } from '../Btn/LearnMore';
import { FavoriteBtn } from '../Btn/FavoriteBtn';
import { selectFavoritesCars } from '../../redux/favorites/favoritesSelectors';
import {
  addFavorite,
  deleteFavorite,
} from '../../redux/favorites/favoritesSlice';
import { replaceLastFourWords } from '../../helpers/replaceLastFourWords';
import defaultImg from '../../assets/img/defaultImg.jpg';
import { toastWarn, toastSuccess } from '../../helpers/toast';
import { useState } from 'react';
import css from './CarListItem.module.css';
import { Modal } from '../Modal/Modal';
import { ModalBody } from '../ModalBody/ModalBody';

export const CarListItem = ({ car }) => {
  const dispatch = useDispatch();
  const [isShowModal, setIsShowModal] = useState(false);
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
    !isFavorite
      ? toastSuccess('The car has been successfully added to favorites.')
      : toastWarn('The car has been successfully deleted from favorites.');
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
        <LearnMore openModal={() => setIsShowModal(true)} />
      </li>
      {isShowModal && (
        <Modal body={<ModalBody car={car} />} setIsShowModal={setIsShowModal} />
      )}
    </>
  );
};
