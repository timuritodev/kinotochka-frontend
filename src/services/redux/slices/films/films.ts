import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFilms } from './filmsAPI';
import { IFilmsState } from 'src/types/Film.types';

export const getFilmsApi = createAsyncThunk('@@films/films', async () => {
	return getFilms();
});

const idFor = ({id, favorite}: { id: string, favorite: boolean }) => {
	return ({id, favorite});
}

export const updateFavorite = createAsyncThunk('@@films/updateFavorite', async ({id, favorite}: { id: string, favorite: boolean }) => {
    return idFor({id, favorite});
});

const initialState: IFilmsState = {
	status: 'idle',
	error: '',
	films: [
		{
			id: '',
			title: '',
			rating: {
				kinopoisk: 0,
				imdb: 0,
			},
			shortDescription: '',
			imageUrl: '',
			movieCardUrl: '',
			index: 0,
			year: 0,
			genres: [''],
			is_favorite: false,
			must_see: false,
			is_viewed: false,
		},
	],
	favoriteFilms: [
		{
			id: '',
			title: '',
			rating: {
				kinopoisk: 0,
				imdb: 0,
			},
			shortDescription: '',
			imageUrl: '',
			movieCardUrl: '',
			index: 0,
			year: 0,
			genres: [''],
			is_favorite: false,
			must_see: false,
			is_viewed: false,
		},
	],
	mustSeeFilms: [
		{
			id: '',
			title: '',
			rating: {
				kinopoisk: 0,
				imdb: 0,
			},
			shortDescription: '',
			imageUrl: '',
			movieCardUrl: '',
			index: 0,
			year: 0,
			genres: [''],
			is_favorite: false,
			must_see: false,
			is_viewed: false,
		},
	],
	viewedFilms: [
		{
			id: '',
			title: '',
			rating: {
				kinopoisk: 0,
				imdb: 0,
			},
			shortDescription: '',
			imageUrl: '',
			movieCardUrl: '',
			index: 0,
			year: 0,
			genres: [''],
			is_favorite: false,
			must_see: false,
			is_viewed: false,
		},
	],
};

export const filmSlice = createSlice({
	name: '@@films',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getFilmsApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.films = action.payload;
				state.favoriteFilms = action.payload.filter((film) => film.is_favorite);
				state.mustSeeFilms = action.payload.filter((film) => film.must_see);
				state.viewedFilms = action.payload.filter((film) => film.is_viewed);
			})
			.addCase(updateFavorite.fulfilled, (state, action) => {
                state.status = 'success';
                const { id, favorite } = action.payload;
                state.films = state.films.map((film) => film.id === id ? { ...film, is_favorite: favorite } : film);
            })
	},
});

export const filmsReducer = filmSlice.reducer;

// export const selectFilms = (state: { films: IFilmsState }) => state.films.films;
