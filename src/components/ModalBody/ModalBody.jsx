import { useSelector } from 'react-redux';
import { selectModalData } from '../../redux/modal/modalSelectors';
import { addCommaToMileage } from '../../helpers/addCommaToMileage';
import { reversePrice } from '../../helpers/reversePrice';
import defaultImg from '../../assets/img/defaultImg.jpg';
import css from './ModalBody.module.css';

export const ModalBody = () => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    address,
    accessories,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    rentalConditions,
    mileage,
    rentalPrice,
  } = useSelector(selectModalData);

  const addressParts = address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  const rentalConditionsParts = rentalConditions.split('\n');

  return (
    <div>
      <img className={css.imgModal} src={img ? img : defaultImg} alt="car" />
      <h2 className={css.titleModal}>
        {make} <span className={css.blueClr}>{model}</span>, {year}
      </h2>
      <ul className={css.listModal}>
        <div className={css.topWrapper}>
          <li className={css.liItem}>
            <p>{city}</p>
          </li>
          <li className={css.liItem}>
            <p>{country}</p>
          </li>
          <li className={css.liItem}>
            <p>Id: {id}</p>
          </li>
          <li className={css.liItem}>
            <p>Year: {year}</p>
          </li>
          <li className={css.liItem}>
            <p>Type: {type}</p>
          </li>
        </div>
        <div className={css.botWrapper}>
          <li className={css.liItem}>
            <p>Fuel Consumption: {fuelConsumption}</p>
          </li>
          <li className={css.liItem}>
            <p>Engine Size: {engineSize}</p>
          </li>
        </div>
      </ul>
      <h3 className={css.titleDesc}>{description}</h3>
      <h2 className={css.titleAcess}>Accessories and functionalities:</h2>
      <ul className={css.listAcess}>
        {accessories.map((item, idx, arr) => {
          return (
            <li className={css.listAcessItem} key={item}>
              {idx === arr.length - 1 ? item : `${item} | `}
            </li>
          );
        })}
      </ul>
      <ul className={css.listFunct}>
        {functionalities.map((item, idx, arr) => {
          return (
            <li key={item}>{idx === arr.length - 1 ? item : `${item} | `}</li>
          );
        })}
      </ul>
      <h2 className={css.titleAcess}>Rental Conditions: </h2>
      <ul className={css.listCon}>
        <div className={css.upper}>
          {rentalConditionsParts.map((item, idx) =>
            idx === 0 ? (
              <li key={idx}>
                <p className={css.condition}>
                  {item.split(' ')[0]} {item.split(' ')[1]}{' '}
                  <span className={css.blueDesc}>
                    &nbsp;{item.split(' ')[2]}{' '}
                  </span>
                </p>
              </li>
            ) : (
              <li key={idx}>
                <p className={css.condition}>{item}</p>
              </li>
            )
          )}
        </div>
        <div className={css.bottom}>
          <li>
            <p className={css.condition}>
              Mileage:&nbsp;
              <span className={css.blueDesc}>{addCommaToMileage(mileage)}</span>
            </p>
          </li>
          <li>
            <p className={css.condition}>
              Price:&nbsp;
              <span className={css.blueDesc}>{reversePrice(rentalPrice)}</span>
            </p>
          </li>
        </div>
      </ul>

      <button className={css.linkTel} href="tel:+380730000000">
        Rental car
      </button>
    </div>
  );
};
