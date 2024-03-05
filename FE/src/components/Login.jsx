import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Login() {
	const navigate = useNavigate()
	const loginUser = (e) => {
		e.preventDefault()
		const {email, password} = data;
		try {
			const response = axios.post('/login', {email, password})
			console.log('response', response)
			if (response.data.error) {
				toast.error(data.error)
			}
			else {
				setData({})
				toast.success('User logged in successfully')
				navigate('/homepage')
			}
		}
		catch (error) {
			console.log('error', error)
		}
	}

	const [data, setData] = useState({
		name: '',
		password: ''
	})


	return (
	<div>
		<form onSubmit={loginUser}>
			<label>Email</label>
			<input type="text" name="name" required placeholder='enter your email ...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
			<label>Password</label>
			<input type="password" name="password" required placeholder='enter your password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
			<button type="submit">Register</button>
		</form>
	</div>
  )
}
