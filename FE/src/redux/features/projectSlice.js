import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

export const fetchProject = createAsyncThunk(
	'project/fetchProject',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.projectsInformation();
			return response.data;
		} catch (err) {
			console.error('Error during fetching project:', err.message);
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

const projectSlice = createSlice({
	name: 'project',
	initialState: {
		project: [],
		status: 'idle',
		error: null,
		loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProject.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchProject.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.project = action.payload;
			})
			.addCase(fetchProject.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload.message;
			});
	},
});

export default projectSlice.reducer;
