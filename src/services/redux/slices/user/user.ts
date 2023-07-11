import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchSignIn, fetchSignUp } from './userApi';

export interface IUser {
	email: string;
	preferences?: string[];
}

export interface IData extends IUser {
	password?: string;
}

export interface IUserState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
	user: IUser;
}

export const signInUser = createAsyncThunk(
	'@@user/signIn',
	async (data: IData) => {
		return fetchSignIn(data);
	}
);

export const signUpUser = createAsyncThunk(
	'@@user/signUp',
	async (data: IData) => {
		return fetchSignUp(data);
	}
);

const initialState: IUserState = {
	status: 'idle',
	error: '',
	user: { email: '', preferences: [] },
};

const userSlice = createSlice({
	name: '@@user',
	initialState,
	reducers: { signOut: () => initialState },
	extraReducers: (builder) => {
		builder
			.addCase(signInUser.fulfilled, (state, action: PayloadAction<IUser>) => {
				state.status = 'success';
				state.user = action.payload;
			})
			.addCase(signUpUser.fulfilled, (state, action: PayloadAction<IUser>) => {
				state.status = 'success';
				state.user = action.payload;
			})
			.addMatcher(
				(action) => action.type.endsWith('/pending'),
				(state) => {
					state.status = 'loading';
					state.error = undefined;
				}
			)
			.addMatcher(
				(action) => action.type.endsWith('/rejected'),
				(state, action) => {
					state.status = 'failed';
					state.error = action.payload || action.meta.error;
				}
			);
	},
});

export const { signOut } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const selectUser = (state: { user: IUserState }) => state.user.user;
