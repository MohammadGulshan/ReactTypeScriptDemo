import { createSlice } from "@reduxjs/toolkit";
// import { SET_COLOR } from "../types"

// const initialState = {
// 	colors: undefined
// }

// export const rainbowReducer = (initState = initialState, action: any) => {
// 	switch(action.type) {
// 		case SET_COLOR: {
// 			const { colors } = action;
// 			return {...initState, colors}
// 		}
// 		default: return initState
// 	}
// }

const rainbowReducer = createSlice({
	name: 'colors',
	initialState: {
		colors: undefined
	},
	reducers: {
		setColors: (state, action) => {
			const { colors } = action.payload;
			return {...state, colors}
		},
		getColors: () => {}
	}
})

export const { setColors, getColors } = rainbowReducer.actions;
export default rainbowReducer.reducer;