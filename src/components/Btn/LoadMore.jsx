import { useState } from 'react';
import { fetchAdvertsThunk } from '../../redux/adverts/advertsThunk';
import { useDispatch } from 'react-redux';
import css from './BtnStyles.module.css';

export const LoadMore = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);

  const loadMorePhotos = () => {
    setPage(page + 1);
    dispatch(fetchAdvertsThunk(page));
  };

  return (
    <button className={css.btnLoadMore} onClick={loadMorePhotos}>
      Load More
    </button>
  );
};
