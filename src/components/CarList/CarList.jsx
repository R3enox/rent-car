import { CarListItem } from '../CarListItem/CarListItem';
import css from './CarList.module.css';

export const CarList = ({ cars }) => {
  return (
    <>
      <ul className={css.list}>
        {cars.map((car) => (
          <CarListItem car={car} key={car.id} />
        ))}
      </ul>
    </>
  );
};
