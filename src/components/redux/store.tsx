// import { applyMiddleware, combineReducers, createStore } from 'redux' 
// import { composeWithDevTools } from 'redux-devtools-extension';
// ***** NOT NEEDED AFTER REDUX TOOLKIT *****

import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { videoTableReducer } from './video-table/videoTableReducer'
import rainbowReducer from './rainbow/rainbowReducer';
import { watchSaga } from './_saga/rootSaga';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
	videoTable: videoTableReducer,
	colors: rainbowReducer
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, logger, thunk]

// const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)))
const store = configureStore({
	reducer,
	middleware
})
console.log('store', store)
sagaMiddleware.run(watchSaga)

export default store;