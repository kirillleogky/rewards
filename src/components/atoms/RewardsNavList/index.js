import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const RewardsNavList = ({ isPersonalRewardListActive, toggleActiveRewardsList }) => {

    const feedClassProps = classnames(
        'rewards-nav-list__navigation-item',
        {
            'rewards-nav-list__navigation-item--active': !isPersonalRewardListActive
        }
    );

    const personalRewardsClassProps = classnames(
        'rewards-nav-list__navigation-item',
        {
            'rewards-nav-list__navigation-item--active': isPersonalRewardListActive
        }
    );

    return (
        <ul className="rewards-nav-list">
            <li className={feedClassProps} onClick={toggleActiveRewardsList}>Feed</li>
            <li className={personalRewardsClassProps} onClick={toggleActiveRewardsList}>My
                rewards
            </li>
        </ul>
    );
};

export default RewardsNavList;
