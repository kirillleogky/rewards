import React, { useState } from 'react';

import RewardsList from '../../molecules/RewardsList';
import RewardsNavList from '../../atoms/RewardsNavList';

import { getFromLocalStorage } from '../../../utils/localStorage';

const TABS = {
    FEED: 'Feed',
    MY_REWARDS: 'My rewards'
};

const TABS_LIST = ['Feed', 'My rewards'];

const REWARDS_LISTS = {
    [TABS.FEED]: rewards => rewards,
    [TABS.MY_REWARDS]: rewards => rewards.filter(rewardItem => rewardItem.rewardfulName === 'Jane Doe')
};

const Rewads = () => {
    const [currentTabActive, setCurrentTabActive] = useState('Feed');
    const rewards = getFromLocalStorage('rewards') || [];

    const toggleActiveRewardsList = event => {
        setCurrentTabActive(event.target.textContent);
    };

    return <>
        <RewardsNavList currentTabActive={currentTabActive}
                        tabsList={TABS_LIST}
                        toggleActiveRewardsList={toggleActiveRewardsList}/>
        <RewardsList currentRewardList={REWARDS_LISTS[currentTabActive](rewards)}/>
    </>;
};

export default Rewads;
