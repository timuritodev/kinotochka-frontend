import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFavorites, deleteFromFavorites, addToFavorites } from './favoritesApi';
import { IFavoritesState } from 'src/types/Favorites.types';

export const getFavoritesApi = createAsyncThunk(
    '@@favorite/favorite',
    async () => {
        return getFavorites();
    }
);

const initialState: IFavoritesState = {
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

export const favoriteSlice = createSlice({
    name: '@@favorite',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFavoritesApi.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getFavoritesApi.fulfilled, (state, action) => {
                state.status = 'success';
                state.favorites = action.payload;
            });

    },
});

export const favoriteReducer = favoriteSlice.reducer;
