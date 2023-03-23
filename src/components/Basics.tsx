import { useState } from 'react'
import { Greet } from '../components/Greet';
import { Heading } from '../components/Heading';
import { CustomButton } from '../components/html/Button';
import { Input } from '../components/Input';
import { Oscar } from '../components/Oscar';
import { Person } from '../components/Person';
import { PersonList } from '../components/PersonList';
import { DomRef } from '../components/ref/DomRef';
import { MutableRef } from '../components/ref/MutableRef';
import { Counter } from '../components/state/Counter';
import { LoggedIn } from '../components/state/LoggedIn';
import { Status } from '../components/Status';
import { Button } from '../components/Button';
import { Container } from '../components/Container';

export const Basics = () => {
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
	return (
		<>
			<Greet name='Gullu' isLoggedIn={true} />
			<Person name={personName} />
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

			{/* Wrapping HTML Elements */}
			<CustomButton variant='primary' onClick={() => console.log('Clicked')}>
				Button Label
			</CustomButton>
			<hr />
		</>
	)
}
