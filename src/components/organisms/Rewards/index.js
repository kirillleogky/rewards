import React, { useState } from 'react';

import RewardsList from '../../molecules/RewardsList';
import RewardsNavList from '../../atoms/RewardsNavList';

import { getFromLocalStorage } from '../../../utils/localStorage';


const REWARDS = getFromLocalStorage('rewards') || [];

const TABS = {
    FEED: 'Feed',
    MY_REWARDS: 'My rewards'
};

const TABS_LIST = ['Feed', 'My rewards'];

const REWARDS_LISTS = {
    [TABS.FEED]: REWARDS,
    [TABS.MY_REWARDS]: REWARDS.filter(rewardItem => rewardItem.rewardfulName === 'Jane Doe')
};

const Rewads = () => {
    const [currentTabActive, setCurrentTabActive] = useState('Feed');

    const toggleActiveRewardsList = event => {
        setCurrentTabActive(event.target.textContent);
    };

    return <>
        <RewardsNavList currentTabActive={currentTabActive}
                        tabsList={TABS_LIST}
                        toggleActiveRewardsList={toggleActiveRewardsList}/>
        <RewardsList currentRewardList={REWARDS_LISTS[currentTabActive]}/>
    </>;
};

export default Rewads;
