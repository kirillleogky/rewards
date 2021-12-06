import {combineReducers} from 'redux';

import modal from './modalReducer';
import rewards from './rewardsReducer';

export const rootReducer = combineReducers({
    modal,
    rewards
});
