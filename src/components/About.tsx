import { useNavigate } from "react-router-dom"
import { useState, useCallback } from "react"
import { List } from "./generics/List"
import { Table, sortTableType } from "./react-interview/Table"
import Form from "./react-interview/Form"

export const About = () => {

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

	const navigate = useNavigate()
	return (
		<>
			About Page
			<div>
				<button onClick={() => navigate('/')}>Go To Home</button>
			</div>
			<div>
				<div>
					<Form changeSort={changeSortFn} />
					<Table sortArray={sortList} />
				</div>
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
			</div>
		</>
	)
}
