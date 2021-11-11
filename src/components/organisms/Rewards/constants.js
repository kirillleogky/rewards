export const TABS = {
    FEED: 'Feed',
    MY_REWARDS: 'My rewards'
};

export const TABS_LIST = ['Feed', 'My rewards'];

export const REWARDS_LISTS = {
    [TABS.FEED]: rewards => rewards,
    [TABS.MY_REWARDS]: rewards => rewards.filter(rewardItem => rewardItem.rewardfulName === 'Jane Doe')
};
