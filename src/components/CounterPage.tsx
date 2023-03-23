
import { createContext, useReducer } from 'react';
import { Private } from '../components/auth/Private';
import { Profile } from '../components/auth/Profile';

import { User } from '../components/context/User';
import { UserContextProvider } from '../components/context/UserContext';

import ClickCounter from '../components/higher-order/ClickCounter';
import ReduceCounter from '../components/reducers/ReduceCounter';

type Action = 'increment' | 'decrement' | 'reset'
export const contextForReducerValue = createContext<number | null>(null)
export const contextForReducerDispatch = createContext<React.Dispatch<Action> | any>({} as any)


const CounterPage = () => {

	const cartInit = 0
	const cartReducer = (cartState: number, cartUpdate: Action) => {
		switch (cartUpdate) {
			case 'increment':
				return cartState + 1
			case 'decrement':
				return cartState - 1
			case 'reset':
				return cartInit
			default:
				return cartState
		}
	}
	
	// useReducer and useContext example
	const [myCart, myCartUpdate] = useReducer(cartReducer, cartInit)
	return (
		<>
			<h4>Login / Logout using useContext</h4>
			<UserContextProvider>
				<User />
			</UserContextProvider>
			<hr />

			<Private isLoggedIn={true} ponent={Profile} />

			<ClickCounter />
			<hr />

			<contextForReducerValue.Provider value={myCart}>
				<contextForReducerDispatch.Provider value={myCartUpdate}>
					<div>
						Reducers in React! - {myCart}
						<button onClick={() => myCartUpdate('increment')}>Increment 1</button>
						<ReduceCounter />
					</div>
				</contextForReducerDispatch.Provider>
			</contextForReducerValue.Provider>
		</>
	)
}

export default CounterPage;
