import { VIDEO_TABLE_TYPE } from "./videoTableTypes"

const initNoOfMovies = 110

export const videoTableReducer = (initState = initNoOfMovies, action: any) => {
	switch(action.type) {
		case VIDEO_TABLE_TYPE: {
			return initState + action.payload
		}
		default: return initState
	}
}