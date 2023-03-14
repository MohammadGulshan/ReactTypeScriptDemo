import { useEffect, useState } from "react"

type FormProps = {
	changeSort: Function
}


const Form = ({changeSort}: FormProps) => {
	const [username, setUsername] = useState('')
	const [comment, setComment] = useState('')
	const [dropdown, setDropdown] = useState('')
	const [radioSort, setRadioSort] = useState('')

	const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value)
	}

	const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setComment(e.target.value)
	}

	const handleDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setDropdown(e.target.value)
	}

	const handleRadioSort = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target);
		setRadioSort(e.target.id)
		changeSort(e.target.id);
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		alert('Submitted')
		e.preventDefault()
	}

	useEffect(() => {
		console.log('Do something after counter has changed', radioSort);
	}, [radioSort]);

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div>
				<div style={{ marginBottom: '30px', marginTop: '30px' }}>
					<label htmlFor="username">User Name</label>
					<input type="text" name="username" id="username" value={username} onChange={(e) => handleUsername(e)} />
					---- {username}
				</div>

				<div style={{ marginBottom: '30px', marginTop: '30px' }}>
					<label htmlFor="comment">Comments</label>
					<textarea name="comment" id="comment" value={comment} onChange={(event) => handleComment(event)} ></textarea>
					---- {comment}
				</div>

				<div style={{ marginBottom: '30px', marginTop: '30px' }}>
					<label htmlFor="dropdown">
						Pick your favorite flavor:
						<select name="dropdown" id="dropdown" value={dropdown} onChange={(event) => handleDropdown(event)}>
							<option value=""></option>
							<option value="grapefruit">Grapefruit</option>
							<option value="lime">Lime</option>
							<option value="coconut">Coconut</option>
							<option value="mango">Mango</option>
						</select>
					</label>
				</div>

				<div style={{ marginBottom: '30px', marginTop: '30px' }}>
					<label htmlFor="sortName">Sort by Name</label>
					<input type="radio" name="sortTable" id="sortName"
						value={radioSort}
						onChange={(event) => handleRadioSort(event)}
						checked={radioSort === 'sortName'}
					/>
					<br />
					<label htmlFor="sortDate">Sort by Date</label>
					<input type="radio" name="sortTable" id="sortDate"
						value={radioSort}
						onChange={(event) => handleRadioSort(event)}
						checked={radioSort === 'sortDate'}
					/>
					<div>
						{` This is the way it will be sorted - ${radioSort}`}
					</div>

				</div>

				<div>
					<button type="submit">Submit</button>
				</div>
			</div>
		</form>
	)
}

export default Form
