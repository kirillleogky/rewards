import { createStore } from 'redux';
import { rootReducer } from './store/reducers/index';

export const store = createStore(rootReducer);
