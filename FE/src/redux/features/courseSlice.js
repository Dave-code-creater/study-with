import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '../api';

export const fetchCourse = createAsyncThunk(
	'course/fetchCourse',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.coursesInformation();
			return response.data;
		} catch (err) {
			console.error('Error during fetching course:', err.message);
			if (err.response) {
				// If error has a response, return response data
				return rejectWithValue(err.response.data);
			} else {
				// If error does not have a response, return error message directly
				return rejectWithValue(err.message);
			}
		}
	}
);

const courseSlice = createSlice({
	name: 'course',
	initialState: {
		course: [],
		status: 'idle',
		error: null,
		loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCourse.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchCourse.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.course = action.payload;
			})
			.addCase(fetchCourse.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload.message;
			});
	},
});

export default courseSlice.reducer;
