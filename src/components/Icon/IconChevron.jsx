import svg from '../../assets/sprite.svg';
import { Wrapper } from './Wrapper.styled';

export const IconChevronBrand = ({ $brandClick }) => {
  return (
    <Wrapper $brandClick={$brandClick}>
      <button type="button" className="btnWrapper">
        <svg className="iconChevron brandChevron">
          <use href={svg + '#icon-chevron'}></use>
        </svg>
      </button>
    </Wrapper>
  );
};

export const IconChevronPrice = ({ $priceClick }) => {
  return (
    <Wrapper $priceClick={$priceClick}>
      <button type="button" className="btnWrapper">
        <svg className="iconChevron priceChevron">
          <use href={svg + '#icon-chevron'}></use>
        </svg>
      </button>
    </Wrapper>
  );
};
