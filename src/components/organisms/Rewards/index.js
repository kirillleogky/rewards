import React, { useState } from 'react';

import RewardsList from '../../molecules/RewardsList';
import RewardsNavList from '../../atoms/RewardsNavList';

import { getFromLocalStorage } from '../../../utils/localStorage';

const Rewads = () => {
    const rewardsList = getFromLocalStorage('rewards') || [];
    const personalRewardsList = rewardsList.filter(rewardItem => rewardItem.rewardfulName === 'Jane Doe');

    const [isPersonalRewardListActive, setIsPersonalRewardListActive] = useState(false);

    const toggleActiveRewardsList = event => {
        if (event.target.textContent === 'Feed') {
            setIsPersonalRewardListActive(false);
        }

        if (event.target.textContent === 'My rewards') {
            setIsPersonalRewardListActive(true);
        }
    };

    return <>
        <RewardsNavList isPersonalRewardListActive={isPersonalRewardListActive}
                        toggleActiveRewardsList={toggleActiveRewardsList}/>
        <RewardsList currentRewardList={isPersonalRewardListActive ? personalRewardsList : rewardsList}/>
    </>;
};

export default Rewads;
