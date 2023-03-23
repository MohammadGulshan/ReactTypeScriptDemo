import { takeLatest } from "redux-saga/effects";
// import { GET_COLOR } from "../types";
import { handleGetColor } from "./handlers/rainbow";
import { getColors } from "../rainbow/rainbowReducer";

export function* watchSaga() {
	yield takeLatest(getColors.type, handleGetColor)
}