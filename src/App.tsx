import { createContext, useCallback, useReducer, useState } from 'react';
import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { List } from './components/generics/List';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { CustomButton } from './components/html/Button';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import Form from './components/react-interview/Form';
import { sortTableType, Table } from './components/react-interview/Table';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { Status } from './components/Status';
import ClickCounter from './components/higher-order/ClickCounter';
import ReduceCounter from './components/reducers/ReduceCounter';
import { useDispatch, useSelector } from 'react-redux';
import { videoTableActions } from './components/redux/videoTableActions';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { ErrorPage } from './components/ErrorPage';

type Action = 'increment' | 'decrement' | 'reset'
export const contextForReducerValue = createContext<number | null>(null)
export const contextForReducerDispatch = createContext<React.Dispatch<Action> | any>({} as any)

const cartInit = 0
const cartReducer = (cartState: number, cartUpdate: Action) => {
	switch (cartUpdate) {
		case 'increment':
			return cartState + 1
		case 'decrement':
			return cartState - 1
		case 'reset':
			return cartInit
		default:
			return cartState
	}
}

function App(props: any) {

	const personName = {
		first: 'Bruce',
		last: 'Banner'
	}

	const nameList = [
		{
			first: 'Bruce',
			last: 'Wayne'
		},
		{
			first: 'Clark',
			last: 'Kent'
		},
		{
			first: 'Princess',
			last: 'Diana'
		}
	]

	const [inputValue, setInputValue] = useState('RRR');
	const [sortList, setSortList] = useState<sortTableType[]>([
		{
			id: 1,
			first: 'Bruce',
			last: 'Wayne',
			dateOfBirth: '1/1/1985',
			videoUrl: 'mqqft2x_Aa4',
			noOfMovies: 10
		},
		{
			id: 2,
			first: 'Clark',
			last: 'Kent',
			dateOfBirth: '3/3/1980',
			videoUrl: 'T6DJcgm3wNY',
			noOfMovies: 10
		},
		{
			id: 3,
			first: 'Princess',
			last: 'Diana',
			dateOfBirth: '5/5/1995',
			videoUrl: '1Q8fG0TtVAY',
			noOfMovies: 10
		},
		{
			id: 4,
			first: 'Barry',
			last: 'Allen',
			dateOfBirth: '10/10/1990',
			videoUrl: 'hebWYacbdvc',
			noOfMovies: 10
		},
		{
			id: 5,
			first: 'Billy',
			last: 'Batson',
			dateOfBirth: '21/12/2000',
			videoUrl: 'AIc671o9yCI',
			noOfMovies: 10
		}
	])

	const changeSortFn = useCallback(
		(radioSort: string) => {
			// console.log('Sort Changed to ', radioSort)
			// console.log(sortList);
			// console.log(JSON.parse(JSON.stringify(sortList.sort((a, b) => a.first.localeCompare(b.first)))))
			if (radioSort === 'sortName') {
				setSortList(JSON.parse(JSON.stringify(sortList.sort((a, b) => a.first.localeCompare(b.first)))))
			} else if (radioSort === 'sortDate') {
				setSortList(JSON.parse(JSON.stringify(sortList.sort((a, b) => {
					return a.dateOfBirth.split('/').reverse().join().localeCompare(b.dateOfBirth.split('/').reverse().join());
				}))))

			}
		},
		[sortList],
	)

	// useReducer and useContext example
	const [myCart, myCartUpdate] = useReducer(cartReducer, cartInit)

	const noOfMov = useSelector((state) => {
		return {
			initNoOfMovies: state
		}
	})
	const dispatchnoOfMov = useDispatch()
	const [changeMovieBy, setChangeMovieBy] = useState(1);

	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/table' element={<About />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>

			<Greet name='Gullu' isLoggedIn={true} />
			<Person name={personName} />
			<hr />

			<Form changeSort={changeSortFn} />
			<Table sortArray={sortList} />

			{/* ++++++++++ REDUX EXAMPLE ++++++++++ START */}
			{/* {`Number of Movies released (WTIHOUT HOOK useSelector() - ${props.initNoOfMovies}`} <br /> */}
			{`Number of Movies released (WTIHOUT HOOK useSelector() - ${noOfMov.initNoOfMovies}`} <br />
			<input type="number" value={changeMovieBy} onChange={(e) => setChangeMovieBy(parseInt(e.target.value))} />
			{/* <button onClick={props.newRelease}>NEW RELEASE</button> */}
			<button onClick={() => dispatchnoOfMov(videoTableActions(changeMovieBy))}>NEW RELEASE</button>
			{/* ++++++++++ REDUX EXAMPLE ++++++++++ END */}
			<hr />

			<DomRef />
			<MutableRef />
			<hr />

			<PersonList names={nameList} />
			<hr />

			<Status status='loading' />
			<hr />

			<Heading>Hello, this is Heading!</Heading>
			<Oscar>
				<Heading>Heading is Inside another component Oscar</Heading>
			</Oscar>
			<hr />

			<Button buttonText='Click Here' handleClick={(event, id) => {
				console.log(`The ID is ${id} and event is ${event}`);
			}} />
			<Input value={inputValue} handleChange={(event) => {
				setInputValue(event.target.value)
			}} />
			{`-- >> ${inputValue}`}
			<hr />

			<Container styles={{
				border: '1px solid green',
				display: 'inline-block',
				padding: '20px',
				marginBottom: '25px'
			}} />
			<hr />

			{/* State Tutorial Starts */}
			<LoggedIn />
			<hr />

			{/* Reducer Tutorial Starts */}
			<Counter />
			<hr />

			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
			<hr />

			<h4>Login / Logout using useContext</h4>
			<UserContextProvider>
				<User />
			</UserContextProvider>
			<hr />

			<Private isLoggedIn={true} ponent={Profile} />
			<hr />

			{/* <List
						items={['Batman', 'Superman', 'Wonder Woman']}
						onClick={item => console.log(item)}
					/>
					<List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
			<List
				items={sortList}
				onClick={item => console.log(item)}
			/>

			<hr />
			{/* Wrapping HTML Elements */}
			<CustomButton variant='primary' onClick={() => console.log('Clicked')}>
				Button Label
			</CustomButton>
			<hr />

			<ClickCounter />
			<hr />

			<contextForReducerValue.Provider value={myCart}>
				<contextForReducerDispatch.Provider value={myCartUpdate}>
					<div>
						Reducers in React! - {myCart}
						<button onClick={() => myCartUpdate('increment')}>Increment 1</button>
						<ReduceCounter />
					</div>
				</contextForReducerDispatch.Provider>
			</contextForReducerValue.Provider>

		</div>
	);
}

// const mapStateToProps = (state: any) => {
// 	return {
// 		initNoOfMovies: state
// 	}
// }

// const mapDispatchToProps = (dispatch: any) => {
// 	return {
// 		newRelease: () => dispatch(videoTableActions())
// 	}
// }

export default (App);
// connect(mapStateToProps, mapDispatchToProps)  <-- Put this before (App) for the old way!
