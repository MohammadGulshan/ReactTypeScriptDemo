import { useNavigate } from "react-router-dom"

export const About = () => {

	const navigate = useNavigate()
	return (
		<div>
			About Page
			<div>
				<button onClick={() => navigate('/')}>Go To Home</button>
			</div>
		</div>
	)
}
