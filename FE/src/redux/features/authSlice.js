import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const login = createAsyncThunk(
	'auth/login',
	async (email, password, navigate, toast) => {
		const response = await api.loginUser({ email, password });
		if (response.data.message) {
			toast.error(response.data.message);
		} else {
			navigate('/homepage');
		}
		return response;
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		status: 'idle',
		error: null,
		loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = 'succeeded';
				localStorage.setItem(
					'profile',
					JSON.stringify({ ...action.payload.data })
				);
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default authSlice.reducer;
