import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/advertsSlice';
import { modalReducer } from './modal/modalSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoritesReducer } from './favorites/favoritesSlice';

const favoritesConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favoritesCars'],
};

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    modal: modalReducer,
    favorites: persistReducer(favoritesConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
