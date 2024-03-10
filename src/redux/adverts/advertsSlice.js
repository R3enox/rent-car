import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAdvertsThunk } from './advertsThunk';

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const newArr = [fetchAdvertsThunk];

const functionStatus = (status) => newArr.map((elm) => elm[status]);

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: (builder) => {
    const { pending, rejected } = defaultStatus;

    builder
      .addCase(fetchAdvertsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cars = [...state.cars, ...payload];
      })
      .addMatcher(isAnyOf(...functionStatus(pending)), handlePending)
      .addMatcher(isAnyOf(...functionStatus(rejected)), handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
