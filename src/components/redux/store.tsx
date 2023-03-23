import { applyMiddleware, combineReducers, createStore } from 'redux'
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { videoTableReducer } from './video-table/videoTableReducer'
import { rainbowReducer } from './rainbow/rainbowReducer';
import { watchSaga } from './_saga/rootSaga';

const reducer = combineReducers({
	videoTable: videoTableReducer,
	colors: rainbowReducer
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, logger, thunk]

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)))

sagaMiddleware.run(watchSaga)

export default store;