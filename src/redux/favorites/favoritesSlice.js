import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesCars: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoritesCars.push(payload);
    },
    deleteFavorite: (state, { payload }) => {
      state.favoritesCars = state.favoritesCars.filter(
        (car) => car.id !== payload.id
      );
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
