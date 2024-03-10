import svg from '../../assets/sprite.svg';
import { Wrapper } from './Wrapper.styled';

export const IconChevronBrand = ({ $brandClick }) => {
  return (
    <Wrapper $brandClick={$brandClick}>
      <svg className="iconChevron brandChevron">
        <use href={svg + '#icon-chevron'}></use>
      </svg>
    </Wrapper>
  );
};

export const IconChevronPrice = ({ $priceClick }) => {
  return (
    <Wrapper $priceClick={$priceClick}>
      <svg className="iconChevron priceChevron">
        <use href={svg + '#icon-chevron'}></use>
      </svg>
    </Wrapper>
  );
};
