import axios from 'axios';

const API = axios.create({
	baseURL: 'http://localhost:8000',
	withCredentials: true,
});

// Ensure your loginUser function sends only the email and password fields
export const loginUser = async ({ email, password }) =>
	API.post('/login', { email, password });

export const registerUser = async ({ name, email, password }) =>
	API.post('/signup', { name, email, password });

export const coursesInformation = async () => API.get('/information');
export const projectsInformation = async () => API.get('/projects');
export const newsInformation = async () => API.get('/news');
