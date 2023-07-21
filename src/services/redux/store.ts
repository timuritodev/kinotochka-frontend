import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import {
	persistReducer,
	persistStore,
	PERSIST,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PURGE,
	REGISTER,
} from 'redux-persist';

import { exampleReducer } from './slices/example/example';
import { userReducer } from './slices/user/user';
import { filmsReducer } from './slices/films/films';
import { selectionsReducer } from './slices/selections/selections';
import { ratingReducer } from './slices/rating/rating';
import { windowResizeReducer } from './slices/window_resize/window_resize';

const rootReducer = combineReducers({
	example: exampleReducer,
	user: userReducer,
	films: filmsReducer,
	selection: selectionsReducer,
	rating: ratingReducer,
	windowResize: windowResizeReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const persistor = persistStore(store);
