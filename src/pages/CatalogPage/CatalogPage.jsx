import { useDispatch, useSelector } from 'react-redux';
import { CarList } from '../../components/CarList/CarList';
import { useEffect } from 'react';
import { fetchAdvertsThunk } from '../../redux/adverts/advertsThunk';
import { selectCars } from '../../redux/adverts/advertsSelectors';
import { LoadMore } from '../../components/Btn/LoadMore';
import css from './CatalogPage.module.css';
const CatalogPage = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const carsLeng = cars.length > 0;

  useEffect(() => {
    if (carsLeng) return;
    dispatch(fetchAdvertsThunk());
  }, [dispatch, carsLeng]);

  return (
    <section className={css.container}>
      <CarList cars={cars} />
      {cars.length > 0 && cars.length % 12 === 0 && <LoadMore />}
    </section>
  );
};

export default CatalogPage;
