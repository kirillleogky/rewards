import { createReducer } from '../storeUtils';
import { SET_REWARDS, SET_INITIAL_REWARDS } from '../actions/rewardsAction';

const initialState = {
    rewards: []
};

const setRewards = (state, action) => ({ ...state, rewards: [action.data, ...state.rewards] });
const setInitialRewards = (state, action) => ({ ...state, rewards: action.data });

export default createReducer(initialState, {
    [SET_REWARDS]: setRewards,
    [SET_INITIAL_REWARDS]: setInitialRewards
});
