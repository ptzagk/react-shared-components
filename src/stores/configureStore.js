'use strict';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
};
