import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGenres } from './genresAPI';
import { IFilmsState } from 'src/types/Film.types';

export interface IGenres {
    name: string
    whiteImg: string
}
interface IGenresState {
    genres: IGenres[],
}

export const getGenresApi = createAsyncThunk('@@genres/genres', async () => {
    return getGenres();
});


const initialState: IGenresState = {
    genres: []
};

export const genresSlice = createSlice({
    name: '@@genres',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGenresApi.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
    },
});

export const genresReducer = genresSlice.reducer;
