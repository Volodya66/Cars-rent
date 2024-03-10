// import { configureStore } from '@reduxjs/toolkit';

// import { carReducer } from './slice';

// export const store = configureStore({
//   reducer: {
//     car: carReducer,
//     filter: '',
//   },
// });

import { configureStore } from '@reduxjs/toolkit';

import { carReducer } from './slice';
import { modalReducer } from '../modal/operation';

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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, carReducer);

export const store = configureStore({
  reducer: {
    car: persistedReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
