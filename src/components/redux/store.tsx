import { applyMiddleware, createStore } from 'redux'
import { logger } from 'redux-logger';
import { videoTableReducer } from './videoTableReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(videoTableReducer, composeWithDevTools(applyMiddleware(logger, thunk)))