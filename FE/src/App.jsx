// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes
import NavBar from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Course from './components/Course';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import DefaultPage from './components/DefaultPage';
import './App.css';

function App() {
	return (
		<div>
			<NavBar />
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
