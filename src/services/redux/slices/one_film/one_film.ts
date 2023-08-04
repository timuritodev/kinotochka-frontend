import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFilmsMoviePage } from './one_filmApi';
import { IFilmsOneState } from 'src/types/OneFilm.types';

export const getFilmsApiMoviePage = createAsyncThunk('@@film/film', async () => {
    return getFilmsMoviePage();
});

const initialState: IFilmsOneState = {
    status: 'idle',
    error: '',
    film:
    {
        id: '',
        title: '',
        original_title: '',
        v_picture: '',
        h_picture: '',
        premiere_date: '',
        rating: {
            rate_imdb: 0,
            rate_kinopoisk: 0,
        },
        duration_minutes: 0,
        age_limit: 0,
        genres: [
            {
                id: 0,
                slug: '',
                title: '',
            },
        ],
        actors: [''],
        directors: [''],
        countries: [
            {
                id: 0,
                slug: '',
                title: '',
            },
        ],
        categories: 
            {
                id: 0,
                slug: '',
                title: '',
            },
        description: '',
        is_favorite: false,
        is_need_see: false,
        trailer_link: "https://www.youtube.com/watch?v=n0PhbTNNB7k",
        user_rate: 0
    },
};

export const filmSlice = createSlice({
    name: '@@films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilmsApiMoviePage.fulfilled, (state, action) => {
                state.status = 'success';
                state.film = action.payload;
            })
    },
});

export const filmReducer = filmSlice.reducer;

// export const selectFilms = (state: { films: IFilmsState }) => state.films.films;
