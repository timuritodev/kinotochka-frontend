import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRating, IRatingState } from 'src/types/Rating.types';
import { fetchRating } from './ratingApi';

export const getMoviesRating = createAsyncThunk(
	'@@rating/rating',
	async ({id,rate}:{id: number, rate: any}) => {
		return fetchRating(id,rate);
	}
);

const initialState: IRatingState = {
	status: 'idle',
	error: '',
	movie_rating: {
		id: 0,
		user: 0,
		movie: 0,
		rate: 0,
		is_viewed: false,
		must_see: false,
		is_favorite: false,
	},
};

export const ratingSlice = createSlice({
	name: '@@rating',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			
			.addCase(getMoviesRating.fulfilled, (state, action ) => {
				state.status = 'success';
				//state.movie_rating = action.payload;
			})
			.addCase(getMoviesRating.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const ratingReducer = ratingSlice.reducer;
