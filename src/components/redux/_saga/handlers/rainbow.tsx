import { call, put } from "redux-saga/effects";
import { requestGetColor } from "../requests/rainbow";
import { setColors } from "../../rainbow/rainbowReducer";
// import { setColors } from "../../rainbow/rainbowActions";

export function* handleGetColor(): any {
	try {
		const response = yield call(requestGetColor)
		const { data } = response;
		yield put(setColors({...data}))
	} catch (err) {
		console.log(`This is handleGetColor error ${err}`)
	}
}