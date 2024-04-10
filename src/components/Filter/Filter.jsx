import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { CAR, PRICE_HOURS } from '../../constans/constans';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/adverts/advertsSelectors';
import css from './Filter.module.css';
import { IconChevronBrand, IconChevronPrice } from '../Icon/IconChevron';
import { toastSuccess } from '../../helpers/toast';

export const Filter = ({ setFilterCars, setLoadMore }) => {
  const cars = useSelector(selectCars);
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [brandClick, setBrandClick] = useState(null);
  const [priceClick, setPriceClick] = useState(null);

  const handleBrandChange = ({ target: { value } }) => {
    setBrand(value);
    setBrandClick(false);
  };

  const handlePriceChange = ({ target: { value } }) => {
    setPrice(value);
    setPriceClick(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let filteredCars = cars;

    if (brand) {
      filteredCars = filteredCars.filter(
        (car) => car.make.toLowerCase() === brand.toLowerCase()
      );
      toastSuccess(`This is the ${brand} you've been looking for.`);
    }

    if (price) {
      filteredCars = filteredCars.filter(
        (car) => Number(car.rentalPrice.split('$')[1]) <= price
      );
      toastSuccess(`This is the ${price} you've been looking for.`);
    }
    setFilterCars(filteredCars);
    setLoadMore(false);
  };

  const handleReset = () => {
    setBrand('');
    setPrice('');
    setFilterCars(cars);
    setLoadMore(true);
    toastSuccess(`The filter's been cleaned successfully.`);
  };

  const isActive = brand || price;

  return (
    <form onSubmit={handleSubmit} className={css.formWrapper}>
      <div className={`${css.labelWrapper} ${css.brandWrapper}`}>
        <label htmlFor="brand">Car brand</label>
        <select
          onFocus={() => setBrandClick(true)}
          onBlur={() => setBrandClick(false)}
          onChange={handleBrandChange}
          id="brand"
          value={brand}
        >
          <option value="" key="default" defaultValue>
            Enter the text
          </option>
          {CAR.map((car) => {
            const id = nanoid();
            return (
              <option value={car} key={id}>
                {car}
              </option>
            );
          })}
        </select>
        <IconChevronBrand $brandClick={brandClick} />
      </div>

      <div className={`${css.labelWrapper} ${css.priceWrapper}`}>
        <label htmlFor="price">Price/ 1hour</label>

        <select
          onFocus={() => setPriceClick(true)}
          onBlur={() => setPriceClick(false)}
          onChange={handlePriceChange}
          id="price"
          value={price}
        >
          <option value="" defaultValue>
            To $
          </option>
          {PRICE_HOURS.map((value) => {
            const id = nanoid();
            return (
              <option key={id} value={value}>
                {value}
              </option>
            );
          })}
        </select>
        <IconChevronPrice $priceClick={priceClick} />
      </div>

      <div className={css.btnWrapper}>
        <button className={css.sbmtBtn} type="submit">
          Search
        </button>
        <button
          className={css.restBtn}
          disabled={!isActive}
          onClick={handleReset}
          type="button"
        >
          Reset
        </button>
      </div>
    </form>
  );
};
