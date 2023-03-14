import { useContext, useState } from "react"
import { ThemeContext } from "./ThemeContext"

export const Box = () => {
	const theme = useContext(ThemeContext);
	let boxStylePrimary = {
		backgroundColor: theme.primary.main,
		color: theme.primary.text,
		padding: '30px'
	}
	let boxStyleSecondary = {
		backgroundColor: theme.secondary.main,
		color: theme.secondary.text,
		padding: '30px'
	}

	const [isPrimary, setisPrimary] = useState(true)

	const changeTheme = () => {
		setisPrimary(!isPrimary);
	}

	return (
		<div style={isPrimary ? boxStylePrimary : boxStyleSecondary}>
			Theme Context - - {isPrimary}
			<div>
				<button onClick={changeTheme}>CHANGE THEME</button>
			</div>
		</div>
	)
}