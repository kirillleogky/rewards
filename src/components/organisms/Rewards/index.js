import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import RewardsList from '../../molecules/RewardsList';
import RewardsNavList from '../../atoms/RewardsNavList';

import { TABS_LIST, REWARDS_LISTS } from './constants';


const Rewads = () => {
    const [currentTabActive, setCurrentTabActive] = useState('Feed');
    const rewards = useSelector(state => state.rewards.rewards);

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
