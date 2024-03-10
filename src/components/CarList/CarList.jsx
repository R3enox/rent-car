import { CarListItem } from '../CarListItem/CarListItem';
import { useSelector } from 'react-redux';
import { selectIsOpenModal } from '../../redux/modal/modalSelectors';
import { Modal } from '../Modal/Modal';
import { ModalBody } from '../ModalBody/ModalBody';
import css from './CarList.module.css';

export const CarList = ({ cars }) => {
  const isOpenModal = useSelector(selectIsOpenModal);

  return (
    <>
      <ul className={css.list}>
        {cars.map((car) => (
          <CarListItem car={car} key={car.id} />
        ))}
      </ul>

      {isOpenModal && <Modal body={<ModalBody />} />}
    </>
  );
};
