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
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { Status } from './components/Status';

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
				items={[
					{
						id: 1,
						first: 'Bruce',
						last: 'Wayne'
					},
					{
						id: 2,
						first: 'Clark',
						last: 'Kent'
					},
					{
						id: 3,
						first: 'Princess',
						last: 'Diana'
					}
				]}
				onClick={item => console.log(item)}
			/>

			<hr />
			{/* Wrapping HTML Elements */}
			<CustomButton variant='primary' onClick={() => console.log('Clicked')}>
				Button Label
			</CustomButton>
        </div>
    );
}

export default App;
