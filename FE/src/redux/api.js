import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:8000',
	withCredentials: true,
});

export const loginUser = async (data) => {
	try {
		const response = await api.post('/login', data);
		return response;
	} catch (error) {
		return error;
	}
};
