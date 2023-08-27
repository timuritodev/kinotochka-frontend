import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRating, IRatingState } from 'src/types/Rating.types';
import { postRating } from './ratingApi';

/*export const getMoviesRating = createAsyncThunk(
	'@@movie_rating/postRating',
	async ({ id, rate }: { id: any; rate: any }) => {
		return postRating(id, rate);
	}
);*/

/*export const getMoviesRating = createAsyncThunk(
	'@@movie_rating/getMoviesRating',
	async ({ id, rate, token }: { id: any; rate: any; token: any }) => {
		return postRating(id, rate, token);
	}
);*/
export const getMoviesRating = createAsyncThunk(
	'@@movie_rating/getMoviesRating',
async ({ id, rate, token}: {id: any; rate: any; token: any}, { fulfillWithValue, rejectWithValue }) => {
		try {
			console.log(rate)
			const response = await postRating(id,rate, token);
			
			//const json = await response.json();
			return fulfillWithValue(response);
			
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IRatingState = {
	status: 'idle',
	error: '',
	movie_rating: [],
};

export const ratingSlice = createSlice({
	name: '@@movie_rating',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getMoviesRating.fulfilled, (state, action) => {
			state.status = 'success';
			//state.movie_rating = action.payload;
			//state.movie_rating = state.movie_rating, action.payload;
			//const { id, rate } = action.payload;
			//state.movie_rating = state.movie_rating.map((movie_rate) =>
			//movie_rate.id === id ? { ...movie_rate, rate: rate } : movie_rate
			//);
		});
	},
});

export const ratingReducer = ratingSlice.reducer;
export { postRating };
