/* eslint-disable import/no-cycle */
import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

import { NODE_ENV } from 'src/utils/environments';

import rootReducer from './slices';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
