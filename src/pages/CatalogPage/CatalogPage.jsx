import { useDispatch, useSelector } from 'react-redux';
import { CarList } from '../../components/CarList/CarList';
import { useEffect, useState } from 'react';
import { fetchAdvertsThunk } from '../../redux/adverts/advertsThunk';
import { LoadMore } from '../../components/Btn/LoadMore';
import { Filter } from '../../components/Filter/Filter';
import { selectCars } from '../../redux/adverts/advertsSelectors';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const [filteredCars, setFilteredCars] = useState(null);
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const carsLeng = cars.length > 0;

  useEffect(() => {
    if (carsLeng) return;
    dispatch(fetchAdvertsThunk());
  }, [dispatch, carsLeng]);

  return (
    <section className={css.container}>
      <Filter setFilterCars={setFilteredCars} />
      <CarList cars={filteredCars ? filteredCars : cars} />

      {cars.length > 0 && cars.length % 12 === 0 && <LoadMore />}
    </section>
  );
};

export default CatalogPage;
