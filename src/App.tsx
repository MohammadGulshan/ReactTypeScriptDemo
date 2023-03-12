import { useState } from 'react';
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

function App() {
    const personName = {
        first: 'Bruce',
        last: 'Bhai'
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

	let inputValue = '';
	const [sortList, setSortList] = useState<sortTableType[]>([
		{
			id: 1,
			first: 'Bruce',
			last: 'Wayne',
			dateOfBirth: '1/1/1985'
		},
		{
			id: 2,
			first: 'Clark',
			last: 'Kent',
			dateOfBirth: '3/3/1980'
		},
		{
			id: 3,
			first: 'Princess',
			last: 'Diana',
			dateOfBirth: '5/5/1995'
		},
		{
			id: 4,
			first: 'Barry',
			last: 'Allen',
			dateOfBirth: '10/10/1990'
		},
		{
			id: 5,
			first: 'Billy',
			last: 'Batson',
			dateOfBirth: '21/12/2000'
		}
	])

	const changeSortFn = (radioSort: string) => {
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
	}
	
    return (
        <div className="App">
            <Greet name='Gullu' isLoggedIn={true} />
            <Person name={personName} />
			<hr />

            <PersonList names={nameList}/>
			<hr />

			<Status status='loading'/>
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
				console.log(event);
			}} />
			{`-- >> ${inputValue}`}
			<hr />

			<Container styles={{
				border: '1px solid red',
				display: 'inline-block',
				padding: '20px',
				marginBottom: '20px'
			}}/>
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

			<DomRef />
			<MutableRef />
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

			<Form changeSort={changeSortFn}/>
			<Table sortArray={sortList}/>
			<hr />

			<ClickCounter />
        </div>
    );
}

export default App;
