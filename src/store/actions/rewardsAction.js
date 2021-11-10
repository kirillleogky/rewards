export const SET_REWARDS = 'SET_REWARDS';
export const SET_INITIAL_REWARDS = 'SET_INITIAL_REWARDS';

export const setRewards = data => ({
    type: SET_REWARDS,
    data
});

export const setInitialRewards = data => ({
    type: SET_INITIAL_REWARDS,
    data
});
