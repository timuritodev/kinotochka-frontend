import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGenres } from './genresAPI';
import { IGenresState } from 'src/types/Genres.types';

export const getGenresApi = createAsyncThunk('@@genres/genres', async () => {
	return getGenres();
});

const initialState: IGenresState = {
	genres: [
		{
			id: 0,
			title: '',
			slug: '',
			picture: '',
		},
	],
};

export const genresSlice = createSlice({
	name: '@@genres',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getGenresApi.fulfilled, (state, action) => {
			state.genres = action.payload;
		});
	},
});

export const genresReducer = genresSlice.reducer;
