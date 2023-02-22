import { useReducer } from "react";

type CounterState = {
	count: number
}

type UpdateAction = {
	type: 'increment' | 'decrement',
	payload: number
}

type ResetAction = {
	type: 'reset'
}

type CounterAction = UpdateAction | ResetAction;

const initialState = {
	count: 100
}


const countReducer = (state: CounterState, action: CounterAction) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + action.payload }
		case 'decrement':
			return { count: state.count - action.payload }
		case 'reset':
			return initialState
		default:
			return state
	}
}

export const Counter = () => {
	const [state, dis] = useReducer(countReducer, initialState);

	return (
		<div>
			Count = {state.count}

			<div>
				<button onClick={() => dis({ type: 'increment', payload: 100 })}>Increment 100</button>
				<button onClick={() => dis({ type: 'decrement', payload: 100 })}>Decrement 100</button>
				<button onClick={() => dis({ type: 'reset' })}>Reset</button>
			</div>
		</div>
	)
}