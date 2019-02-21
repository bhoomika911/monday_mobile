/*****************************************************************************************************************
 * Project mangement React Native App
 * Author : Bhoomika Kathiriya
 * File : configureStore.js
 * Date : 19/01/2019
 * Updated date : 19/01/2019
 * Comment : Setting up Saga Middleware for this reducer application.
 ****************************************************************************************************************/

import { applyMiddleware, compose, createStore } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import reducers from '../Reducer/MainReducer';
import sagas from '../Saga/sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = fromJS({})) {

	const middlewares = [ sagaMiddleware ];
	const enhancers = [ applyMiddleware(...middlewares) ];
	const store = createStore(reducers, compose(...enhancers));

	// Extensions
	sagaMiddleware.run(sagas, store.dispatch);

	return store;
}

export default configureStore;
