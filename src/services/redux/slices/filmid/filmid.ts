import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilmIdState {
  id: number
}

const initialState: FilmIdState = {
  id: 0,
};

const filmIdSlice = createSlice({
  name: 'filmId',
  initialState,
  reducers: {
    setFilmId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    clearFilmId: (state) => {
      state.id = 0;
    },
  },
});

export const { setFilmId, clearFilmId } = filmIdSlice.actions;

export const filmidReducer = filmIdSlice.reducer;

// export default filmIdSlice.reducer;
