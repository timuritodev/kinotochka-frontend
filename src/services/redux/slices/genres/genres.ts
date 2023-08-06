import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGenres } from './genresAPI';
import { IGenresState } from 'src/types/Genres.types';

export const getGenresApi = createAsyncThunk('@@genres/genres', async () => {
	console.log(2);
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

export const GenresSlice = createSlice({
	name: '@@genres',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getGenresApi.fulfilled, (state, action) => {
			state.genres = action.payload;
		});
	},
});

export const genresReducer = GenresSlice.reducer;
