import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './store/reducers/index';

export const store = createStore(
    rootReducer,
    composeWithDevTools()
);
