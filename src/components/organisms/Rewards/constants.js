export const TABS = {
    FEED: 'Feed',
    MY_REWARDS: 'My rewards'
};

export const TABS_LIST = [{ tabName: TABS.FEED, label: 'Feed' }, { tabName: TABS.MY_REWARDS, label: 'My rewards' }];

export const REWARDS_LISTS = {
    [TABS.FEED]: rewards => rewards,
    [TABS.MY_REWARDS]: rewards => rewards.filter(rewardItem => rewardItem.rewardfulName === 'Jane Doe')
};

export const REWARDFUL_PERSON_DEFAULT_ICON = '/images/default-icon.jpg';
