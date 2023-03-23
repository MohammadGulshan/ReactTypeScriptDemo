import { useContext } from "react"
import { contextForReducerDispatch, contextForReducerValue } from "../CounterPage"


const ReduceCounter = () => {
	const reducerContext = useContext(contextForReducerValue)
	const reducerContextDispatch = useContext(contextForReducerDispatch)

	return (
		<div>
			<div>
				{`The Count value is ${reducerContext}`}
			</div>
			<button onClick={() => reducerContextDispatch('increment')}>Increment 1</button>
			<button onClick={() => reducerContextDispatch('decrement')}>Decrement 1</button>
			<button onClick={() => reducerContextDispatch('reset')}>Reset</button>
		</div>
	)
}

export default ReduceCounter