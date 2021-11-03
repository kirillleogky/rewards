import React from 'react';

import './styles.scss';

const RewardsNavList = ({ isPersonalRewardListActive, toggleActiveRewardsList }) => {

    const getClassName = currentNavElem => {
        let resultClassName = 'rewards-nav-list__navigation-item';
        if (currentNavElem === 'feed' && !isPersonalRewardListActive) {
            resultClassName += ` ${resultClassName}--active`;
        }
        if (currentNavElem === 'my rewards' && isPersonalRewardListActive) {
            resultClassName += ` ${resultClassName}--active`;
        }
        return resultClassName;
    };

    return (
        <ul className="rewards-nav-list">
            <li className={getClassName('feed')} onClick={toggleActiveRewardsList}>Feed</li>
            <li className={getClassName('my rewards')} onClick={toggleActiveRewardsList}>My
                rewards
            </li>
        </ul>
    );
};

export default RewardsNavList;
