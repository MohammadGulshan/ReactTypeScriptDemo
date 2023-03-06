import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
	isLoggedIn: boolean
	ponent: React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, ponent: Component }: PrivateProps) => {
	if (isLoggedIn) {
		return <Component name='Gulshan' />
	} else {
		return <Login />
	}
}