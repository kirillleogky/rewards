import React from 'react';

import RewardTab from '../../atoms/RewardTab';

import './styles.scss';

const RewardsNavList = ({ currentTabActive, toggleActiveRewardsList, tabsList }) => {

    return (
        <nav className="rewards-nav-list-container">
            <ul className="rewards-nav-list">
                {
                    tabsList.map(tabName =>
                        <RewardTab label={tabName}
                                   isActiveTab={currentTabActive === tabName}
                                   key={tabName}
                                   setIsActiveTab={toggleActiveRewardsList}/>
                    )
                }
            </ul>
        </nav>
    );
};

export default RewardsNavList;
