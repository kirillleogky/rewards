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
        <nav className="rewards-nav-list-container">
            <ul className="rewards-nav-list">
                <li className={feedClassProps} onClick={toggleActiveRewardsList}>Feed</li>
                <li className={personalRewardsClassProps} onClick={toggleActiveRewardsList}>My
                    rewards
                </li>
            </ul>
        </nav>
    );
};

export default RewardsNavList;
