import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './store/reducers/index';
import createMiddleware from './store/createMiddleware';

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(createMiddleware))
);
