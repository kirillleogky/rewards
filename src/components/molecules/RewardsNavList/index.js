import React from 'react';

import RewardTab from '../../atoms/RewardTab';

import './styles.scss';


const RewardsNavList = ({ currentTabActive, toggleActiveRewardsList, tabsList }) => {
    return (
        <nav className="rewards-nav-list-container">
            <ul className="rewards-nav-list">
                {
                    tabsList.map(({ label, tabName }, key) =>
                        <RewardTab label={label}
                                   tabName={tabName}
                                   isActiveTab={currentTabActive === tabName}
                                   key={key}
                                   toggleActiveRewardsList={toggleActiveRewardsList}/>
                    )
                }
            </ul>
        </nav>
    );
};

export default RewardsNavList;
