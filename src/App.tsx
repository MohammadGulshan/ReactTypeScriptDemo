import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Home } from './components/Home';
import { ErrorPage } from './components/ErrorPage';
import Redux from './components/Redux';
import CounterPage from './components/CounterPage';
import { Basics } from './components/Basics';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/table' element={<About />} />
				<Route path='/redux' element={<Redux />} />
				<Route path='/basics' element={<Basics />} />
				<Route path='/counter' element={<CounterPage />} />

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
