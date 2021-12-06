import React from 'react';
import classnames from 'classnames';


const RewardTab = ({ label, isActiveTab, toggleActiveRewardsList, tabName }) => {
    const tabClassProps = classnames(
        'rewards-nav-list__navigation-item',
        {
            'rewards-nav-list__navigation-item--active': isActiveTab
        }
    );

    const toggleActiveTab = () => {
      toggleActiveRewardsList(tabName);
    };

    return (
        <li className={tabClassProps} onClick={toggleActiveTab}>{label}</li>
    );
};

export default RewardTab;
