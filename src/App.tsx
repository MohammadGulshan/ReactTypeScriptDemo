import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
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
        </div>
    );
}

export default App;
