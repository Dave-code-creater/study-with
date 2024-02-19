import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Update from './components/Course';
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
					path='/homepage/*'
					element={<Homepage />}
				/>
				<Route
					path='/update/'
					element={<Update />}
				/>
				<Route
					path='/projects/'
					element={<Projects />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
