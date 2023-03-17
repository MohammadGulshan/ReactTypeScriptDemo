import { createStore } from 'redux'
import { videoTableReducer } from './videoTableReducer'

export const store = createStore(videoTableReducer)