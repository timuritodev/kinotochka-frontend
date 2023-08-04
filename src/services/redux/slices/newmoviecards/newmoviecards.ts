import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovieCards } from './newmoviecardsApi';
import { IMovieCardState } from 'src/types/MovieCard.types';

export const getMovieCardsApi = createAsyncThunk('@@moviecards/moviecards', async () => {
    return getMovieCards();
});

const initialState: IMovieCardState = {
    status: 'idle',
    error: '',
    movies: [
        {
            id: 0,
            title: '',
            v_picture: '',
            h_picture: '',
            rating: {
                rate_imdb: 0,
                rate_kinopoisk: 0,
            },
            year: 0,
            genres: [''],
            is_favorite: false,
            is_need_see: false,
        },
    ]
};

export const moviecardsSlice = createSlice({
    name: '@@MovieCards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovieCardsApi.fulfilled, (state, action) => {
                state.status = 'success';
                state.movies = action.payload;
            })
    },
});

export const moviecardsReducer = moviecardsSlice.reducer;
