import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import RewardsList from '../../molecules/RewardsList';
import RewardsNavList from '../../molecules/RewardsNavList';

import { TABS_LIST, REWARDS_LISTS, REWARDFUL_PERSON_DEFAULT_ICON } from './constants';


const Rewads = () => {
    const [currentTabActive, setCurrentTabActive] = useState('Feed');
    const rewards = useSelector(state => state.rewards.rewards.map(reward => {
        reward.image = reward.image ? reward.image : REWARDFUL_PERSON_DEFAULT_ICON;
        return reward;
    }));

    const toggleActiveRewardsList = tabName => {
        setCurrentTabActive(tabName);
    };

    return <>
        <RewardsNavList currentTabActive={currentTabActive}
                        tabsList={TABS_LIST}
                        toggleActiveRewardsList={toggleActiveRewardsList}/>
        <RewardsList currentRewardList={REWARDS_LISTS[currentTabActive](rewards)}/>
    </>;
};

export default Rewads;
