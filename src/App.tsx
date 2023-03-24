import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Home } from './components/Home';
import { ErrorPage } from './components/ErrorPage';
import Redux from './components/Redux';
import { Basics } from './components/Basics';
import React, { Suspense } from 'react';

const CounterPage = React.lazy(() => import('./components/CounterPage'));
const LazyLoad = React.lazy(() => import('./components/Lazy'));

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/table' element={<About />} />
				<Route path='/redux' element={<Redux />} />
				<Route path='/basics' element={<Basics />} />
				<Route path='/counter' element={
					<Suspense fallback={<div>Loading...</div>}>
						<CounterPage />
					</Suspense>
				} />
				<Route path='/lazy' element={
					<Suspense fallback={<div>Loading...</div>}>
						<LazyLoad />
					</Suspense>
				} />

				<Route path='*' element={<ErrorPage />} />
			</Routes>


			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
			<hr />
		</div>
	);
}

export default (App);
