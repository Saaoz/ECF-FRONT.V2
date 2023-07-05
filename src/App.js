import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Series from './pages/Series';
import Movies from './pages/Movies';
import Favoris from './pages/Favoris';

import './styles/App.css';
import './styles/reset.css';
import './styles/helpers.css';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} index />
				{/* if link doesn't work free back to home  */}
				<Route path="*" element={<Home/>} />

				<Route path="/admin" element={<Admin/>} />

        <Route path="/login" element={<Login/>}  />

        <Route path="/sign_in" element={<Registration/>}  />

        <Route path="/movies" element={<Movies/>}  />

        <Route path="/series" element={<Series/>}  />

        <Route path="/favoris" element={<Favoris/>}  />

			</Routes>
		</BrowserRouter>
	);
}

export default App;