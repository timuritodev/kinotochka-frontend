import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFilms } from './filmsAPI';
import { IFilmsState } from 'src/types/Film.types';

export const getFilmsApi = createAsyncThunk('@@films/films', async () => {
	return getFilms();
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
		},
	],
};

export const filmSlice = createSlice({
	name: '@@films',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getFilmsApi.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getFilmsApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.films = action.payload;
			})
			.addCase(getFilmsApi.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const filmsReducer = filmSlice.reducer;
