import React from 'react';
import classnames from 'classnames';


const RewardTab = ({ label, isActiveTab, setIsActiveTab }) => {
    const tabClassProps = classnames(
        'rewards-nav-list__navigation-item',
        {
            'rewards-nav-list__navigation-item--active': isActiveTab
        }
    );

    return (
        <li className={tabClassProps} onClick={setIsActiveTab}>{label}</li>
    );
};

export default RewardTab;
