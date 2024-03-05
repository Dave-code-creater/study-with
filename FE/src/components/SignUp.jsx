import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import  { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
	
	const navigate = useNavigate();
	const registerUser = async (e) => {
		e.preventDefault();
		const { name, email, password } = data;
		try {
			const response = await axios.post('/register', { name, email, password });
			if (data.error)	{
				toast.error(data.error);
			}
			else {
				setData({})
				toast.success('User registered successfully');
				navigate('/homepage');
			}
		}
		
		catch (error) {
			console.log('error', error);
		}
	}
	
	const [data, setData] = useState({
		name: '',
		email: '',
		password: ''
	})

		return (
		<div>
			<form onSubmit={registerUser}>
				<label>Name</label>
				<input type="text" name="name" required placeholder='enter your name ...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
				<label>Email</label>
				<input type="email" name="email" required placeholder='enter your email ...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
				<label>Password</label>
				<input type="password" name="password" required placeholder='enter your password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
				<button type="submit">Register</button>
			</form>
		</div>
	  )
}
