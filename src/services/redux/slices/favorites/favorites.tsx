import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
	fetchAddToFavorites,
	fetchDeleteFromFavorites,
	getFavoriteMovies,
} from './favoritesApi';
import { IFavoritesState } from 'src/types/Favorites.types';

export const getFavoritesApi = createAsyncThunk(
	'@@favorite/getFavorite',
	async (token: string, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await getFavoriteMovies(token);
			const json = await response.json();
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const addToFavoritesApi = createAsyncThunk(
	'@@favorite/addFavorite',
	async (
		arg: { id: number; token: string },
		{ fulfillWithValue, rejectWithValue }
	) => {
		const { id, token } = arg;
		try {
			const response = await fetchAddToFavorites(id, token);
			return fulfillWithValue(response);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

export const deleteFromFavoritesApi = createAsyncThunk(
	'@@favorite/deleteFavorite',
	async (
		arg: { id: number; token: string },
		{ fulfillWithValue, rejectWithValue }
	) => {
		const { id, token } = arg;
		try {
			const response = await fetchDeleteFromFavorites(id, token);
			return fulfillWithValue(response);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IFavoritesState = {
	status: 'idle',
	error: '',
	favorites: [],
};

export const favoriteSlice = createSlice({
	name: '@@favorite',
	initialState,
	reducers: {
		resetFavorites: () => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(getFavoritesApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.favorites = action.payload;
			})
			.addCase(addToFavoritesApi.fulfilled, (state) => {
				state.status = 'success';
			})
			.addCase(deleteFromFavoritesApi.fulfilled, (state) => {
				state.status = 'success';
			})
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				(state) => {
					state.status = 'loading';
					state.error = '';
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				(state, action) => {
					state.status = 'failed';
					state.error = action.payload.statusText;
				}
			);
	},
});

export const { resetFavorites } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
