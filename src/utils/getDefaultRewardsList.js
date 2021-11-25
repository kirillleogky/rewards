import { getFromLocalStorage } from './localStorage';
import { DEFAULT_REWARDS_LIST } from '../constants';

export const getDefaultRewardsList = () => {
  if (!getFromLocalStorage('rewards')) {
      return DEFAULT_REWARDS_LIST;
  } else {
      return getFromLocalStorage('rewards');
  }
};
