import {IAction} from '../store.interfaces';
import {IRewardsList} from '../../interfaces/rewards.interfaces';

export const SET_REWARDS = 'SET_REWARDS';
export const SET_INITIAL_REWARDS = 'SET_INITIAL_REWARDS';

export const setRewards = (data: IRewardsList): IAction => ({
    type: SET_REWARDS,
    data
});

export const setInitialRewards = (data: IRewardsList): IAction => ({
    type: SET_INITIAL_REWARDS,
    data
});
