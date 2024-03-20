// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes
import NavBar from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Course from './components/Course';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';
import Login from './Pages/Login';
import DefaultPage from './components/DefaultPage';
import './App.css';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
	return (
		<div>
			<NavBar />
			<ToastContainer position='top-center' />
			<Routes>
				{/* Public routes */}
				<Route
					path='/'
					element={<DefaultPage />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/signup'
					element={<SignUp />}
				/>
				<Route
					path='/projects'
					element={<Projects />}
				/>
				<Route
					path='/course'
					element={<Course />}
				/>

				{/* Private route */}
				<Route
					path='/homepage'
					element={<Homepage />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
