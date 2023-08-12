import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFavorites, deleteFromFavorites, addToFavorites } from './favoritesApi';
import { IFavoritesState } from 'src/types/Favorites.types';

export const getFavoritesApi = createAsyncThunk(
    '@@favorite/favorite',
    async () => {
        return getFavorites();
    }
);

export const addToFavoritesApi = createAsyncThunk(
    '@@favorite/addFavorite',
    async ({ filmId }: { filmId: number }) => {
        return addToFavorites(filmId);
    }
);

export const deleteFromFavoritesApi = createAsyncThunk(
    '@@favorite/deleteFavorite',
    async ({ filmId }: { filmId: number }) => {
        return deleteFromFavorites(filmId);
    }
);

const initialState: IFavoritesState = {
    status: 'idle',
    error: '',
    favorites: [
        {
            id: 0,
            title: '',
            v_picture: '',
			h_picture: '',
            year: 0,
            rating: {
                rate_imdb: 0,
                rate_kinopoisk: 0,
            },
			genres: [''],
            is_favorite: false,
            is_need_see: false,
        },
    ]
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
                // state.favorites = action.payload;
            });

    },
});

export const favoriteReducer = favoriteSlice.reducer;
