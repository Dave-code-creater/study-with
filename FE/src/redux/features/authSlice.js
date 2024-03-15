import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		status: 'idle',
		error: null,
		loading: false,
	},
});

export default authSlice.reducer;
