import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const login = createAsyncThunk(
	'auth/login',
	async ({ data, navigate, toast }, { rejectWithValue }) => {
		try {
			const response = await api.loginUser(data);
			toast.success('Login successful');
			navigate('/homepage');
		} catch (err) {
			console.error('Error during login:', err.message);
			return rejectWithValue(err.response.data);
		}
	}
);

export const signup = createAsyncThunk(
	'auth/signup',
	async ({ data, navigate, toast }, { rejectWithValue }) => {
		try {
			const response = await api.registerUser(data);
			toast.success('Sign Up successful');
			navigate('/homepage');
		} catch (err) {
			console.error('Error during login:', err.message);
			return rejectWithValue(err.response.data);
		}
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
				state.user = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload.message;
			});
		builder.addCase(signup.pending, (state, action) => {
			state.status = 'loading';
		});
		builder.addCase(signup.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.user = action.payload;
		});
		builder.addCase(signup.rejected, (state, action) => {
			state.status = 'failed';
			state.error = action.payload.message;
		});
	},
});

export default authSlice.reducer;
