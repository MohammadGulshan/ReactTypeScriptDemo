import { VIDEO_TABLE_TYPE } from "../types"

export const videoTableActions = (changeMovieBy: number) => {
	return {
		type: VIDEO_TABLE_TYPE,
		payload: changeMovieBy
	}
}