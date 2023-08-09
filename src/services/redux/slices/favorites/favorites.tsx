import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMoviebyid } from './favoritesApi';
import { IFavorites } from 'src/types/Favorites.types';

export const getMoviebyidApi = createAsyncThunk(
    '@@movie/movie',
    async ({ filmId }: { filmId: number }) => {
        return getMoviebyid(filmId);
    }
);

const initialState: IMoviebyidState = {
    status: 'idle',
    error: '',
    favorites: {
        id: 0,
        title: '',
        v_picture: '',
        premiere_date: '',
        rating: {
            rate_imdb: 0,
            rate_kinopoisk: 0,
        },
        is_favorite: false,
        is_need_see: false,
    },
};

export const moviebyidSlice = createSlice({
    name: '@@movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMoviebyidApi.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getMoviebyidApi.fulfilled, (state, action) => {
                state.status = 'success';
                state.movie = action.payload;
            });

},
});

export const moviebyidReducer = moviebyidSlice.reducer;
