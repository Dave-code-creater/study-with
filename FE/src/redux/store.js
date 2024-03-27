import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import courseReducer from './features/courseSlice';
import projectsReducer from './features/projectSlice';
import newsReducer from './features/newSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		course: courseReducer,
		project: projectsReducer,
		news: newsReducer,
	},
});
