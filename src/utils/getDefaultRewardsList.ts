import {getFromLocalStorage} from './localStorage';
import {DEFAULT_REWARDS_LIST} from '../constants/rewards.constants';
import {IRewardsList} from '../interfaces/rewards.interfaces';

export const getDefaultRewardsList = (): IRewardsList[] => {
    if (!getFromLocalStorage('rewards')) {
        return DEFAULT_REWARDS_LIST;
    } else {
        return getFromLocalStorage('rewards');
    }
};
