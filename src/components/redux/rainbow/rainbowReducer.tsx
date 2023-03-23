import { SET_COLOR } from "../types"

const initialState = {
	colors: undefined
}

export const rainbowReducer = (initState = initialState, action: any) => {
	switch(action.type) {
		case SET_COLOR: {
			const { colors } = action;
			return {...initState, colors}
		}
		default: return initState
	}
}