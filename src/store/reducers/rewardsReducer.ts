import {createReducer} from '../storeUtils';
import {SET_REWARDS, SET_INITIAL_REWARDS} from '../actions/rewardsAction';
import {getDefaultRewardsList} from '../../utils/getDefaultRewardsList';
import {IRewardsInitialState, IAction, IInitialState} from '../store.interfaces';

const initialState: IRewardsInitialState = {
    rewards: getDefaultRewardsList()
};

const setRewards = (state: IInitialState, action: IAction) => ({...state, rewards: [action.data, ...state.rewards]});
const setInitialRewards = (state: IInitialState, action: IAction) => ({...state, rewards: action.data});

export default createReducer(initialState, {
    [SET_REWARDS]: setRewards,
    [SET_INITIAL_REWARDS]: setInitialRewards
});
