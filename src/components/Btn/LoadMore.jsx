import { useState } from 'react';
import { fetchAdvertsThunk } from '../../redux/adverts/advertsThunk';
import { useDispatch } from 'react-redux';
import css from './BtnStyles.module.css';
import { toastSuccess } from '../../helpers/toast';

export const LoadMore = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);

  const loadMorePhotos = async () => {
    await setPage(page + 1);
    await dispatch(fetchAdvertsThunk(page));
    toastSuccess('We found 12 more cars for you.');
  };

  return (
    <button className={css.btnLoadMore} onClick={loadMorePhotos}>
      Load More
    </button>
  );
};
