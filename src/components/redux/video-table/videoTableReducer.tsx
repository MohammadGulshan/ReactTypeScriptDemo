import { VIDEO_TABLE_TYPE } from "../types"

const initialState = {
	initNoOfMovies: 1000
}

export const videoTableReducer = (initState = initialState, action: any) => {
	switch(action.type) {
		case VIDEO_TABLE_TYPE: {
			return {...initState, initNoOfMovies: initState.initNoOfMovies + action.payload}
		}
		default: return initState
	}
}