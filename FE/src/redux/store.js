import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import courseReducer from './features/courseSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		course: courseReducer,
	},
});
