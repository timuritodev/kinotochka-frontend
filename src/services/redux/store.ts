import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import {
	persistReducer,
	persistStore,
	PERSIST,
	REHYDRATE,
	FLUSH,
	PAUSE,
	PURGE,
	REGISTER,
} from 'redux-persist';

import { userReducer } from './slices/user/user';
import { filmsReducer } from './slices/films/films';
import { selectionsReducer } from './slices/selections/selections';
import { ratingReducer } from './slices/rating/rating';
import { windowResizeReducer } from './slices/window_resize/window_resize';
import { genresReducer } from './slices/genres/genres';
import { moviesbygenreReducer } from './slices/movieByGenre/moviesByGenre';

const rootReducer = combineReducers({
	user: userReducer,
	films: filmsReducer,
	movie: moviebyidReducer,
	movies: moviesReducer,
	favoritemovies: favoriteReducer,
	watchmovies: watchReducer,
	compilations: compilationsReducer,
	newmoviecards: newmoviecardsReducer,
	selection: selectionsReducer,
	rating: ratingReducer,
	windowResize: windowResizeReducer,
	genres: genresReducer,
	moviesbygenre: moviesbygenreReducer,
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
				ignoredActions: [PERSIST, REHYDRATE, FLUSH, PAUSE, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
