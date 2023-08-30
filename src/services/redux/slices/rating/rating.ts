import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IRating, IRatingState } from 'src/types/Rating.types';
import { fetchSetRating, fetchUpdateRating } from './ratingApi';

// export interface IRatingState {
// 	[x: string]: any;
// 	status: 'idle' | 'success' | 'loading' | 'failed';
// 	error: unknown;
// 	movie_rating: IRating;
// }

// export const getMoviesRating = createAsyncThunk(
// 	'@@movie_rating/getMoviesRating',
// async ({ id, rate, token, method }: {id: number; rate: any; token: any; method: string;}, { fulfillWithValue, rejectWithValue }) => {
// 		try {

// 			const response = await postRating(id, rate, token, method);

// 			//const json = await response.json();
// 			return fulfillWithValue(response);

// 		} catch (error: unknown) {
// 			return rejectWithValue(error);
// 		}
// 	}
// );

export const setRatingApi = createAsyncThunk(
	'@@rate/setRate',
	async (
		arg: { id: number; rate: any; token: string },
		{ fulfillWithValue, rejectWithValue }
	) => {
		const { id, rate, token } = arg;
		try {
			const response = await fetchSetRating(id, rate, token);
			const responseData = { status: response.status, ok: response.ok };
			return fulfillWithValue(responseData);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const updateRatingApi = createAsyncThunk(
	'@@rate/updateRate',
	async (
		arg: { id: number; rate: any; token: string },
		{ fulfillWithValue, rejectWithValue }
	) => {
		const { id, rate, token } = arg;
		try {
			const response = await fetchUpdateRating(id, rate, token);
			const responseData = { status: response.status, ok: response.ok };
			return fulfillWithValue(responseData);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IRatingState = {
	status: 'idle',
	error: '',
	movie_rating: {
		id: 0,
		rate: 0,
	},
}

export const ratingSlice = createSlice({
	name: '@@rate',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(setRatingApi.fulfilled, (state, action) => {
				state.status = 'success';
			}
			)
			.addCase(updateRatingApi.fulfilled, (state, action) => {
				state.status = 'success';
			})
	},
});

export const ratingReducer = ratingSlice.reducer;
// export { postRating };
