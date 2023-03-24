import { NavLink } from 'react-router-dom'

export const NavBar = () => {
	return (
		<>
			<nav>
				<NavLink to={'/'}>Home</NavLink>
				<NavLink to={'/redux'}>Redux</NavLink>
				<NavLink to={'/table'}>Table</NavLink>
				<NavLink to={'/basics'}>Basics</NavLink>
				<NavLink to={'/counter'}>Counter</NavLink>
				<NavLink to={'/lazy'}>Lazy Load</NavLink>
			</nav>
		</>
	)
}
