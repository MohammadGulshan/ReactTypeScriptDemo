import axios from "axios"
import { useState } from "react"

const ClickCounter = () => {
	const [count, setCount] = useState(0)
	const [posts, setPosts] = useState<any>([])

	const incrementXTimes = () => {
		setCount((prevState) => {
			return prevState + 1;
		});
	}

	const getPosts = () => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(
			(res) => {
				console.log(res)
				setPosts(res.data);
			}
		)
		.catch(
			(err) => {
				console.log(err)
			}
		)
	}

	return (
		<div>
			<button onClick={incrementXTimes}>{`Clicked ${count} Times`}</button>
			<div>
				{`Response from Server is ->`}
				{posts[0]?.body}
			</div>
			<div>
				<button onClick={getPosts}>Get Posts</button>
			</div>
			
		</div>
	)
}

export default ClickCounter