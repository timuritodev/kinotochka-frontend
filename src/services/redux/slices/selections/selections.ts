import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSelections } from './selectionsAPI';
import { ISelectionState } from 'src/types/Film.types';

export const getSelectionsApi = createAsyncThunk('@@selections/films', async () => {
	return getSelections();
});

const initialState: ISelectionState = {
	status: 'idle',
	error: '',
	films: [
        [
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
		},
    ],
	],
};

export const selectionSlice = createSlice({
	name: '@@selections',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getSelectionsApi.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getSelectionsApi.fulfilled, (state, action) => {
				state.status = 'success';
				state.films = action.payload;
			})
			.addCase(getSelectionsApi.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const selectionsReducer = selectionSlice.reducer;
