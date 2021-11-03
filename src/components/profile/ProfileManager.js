import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import RewardsList from '../atoms/RewardsList';
import RewardsNavList from '../atoms/RewardsNavList';
import PersonalInfo from '../atoms/PersonalInfo';

import { setModal } from '../../store/actions/modalAction';

import { getFromLocalStorage } from '../../utils/localStorage';


const ProfileManager = () => {
    const dispatch = useDispatch();
    const rewardsList = getFromLocalStorage('rewards') || [];
    const personalRewardsList = rewardsList.filter(rewardItem => rewardItem.rewardfulName === 'Jane Doe');

    const [isPersonalRewardListActive, setIsPersonalRewardListActive] = useState(false);

    const openAddRewardModal = () => dispatch(setModal('add-reward'));

    const toggleActiveRewardsList = event => {
        if (event.target.textContent === 'Feed') {
            setIsPersonalRewardListActive(false);
        }

        if (event.target.textContent === 'My rewards') {
            setIsPersonalRewardListActive(true);
        }
    };

    return <div className="page profile">
        <div className="profile__container">
            <PersonalInfo/>
            <nav className="profile__navigation-list-container">
                <RewardsNavList isPersonalRewardListActive={isPersonalRewardListActive}
                                toggleActiveRewardsList={toggleActiveRewardsList}/>
            </nav>
            <ul className="profile__rewards-list-container">
                <RewardsList currentRewardList={isPersonalRewardListActive ? personalRewardsList : rewardsList}/>
            </ul>
        </div>
        <button className="profile__add-reward-btn" onClick={openAddRewardModal}>
            <img src="/images/add-icon.svg" alt="add reward"/>
        </button>
    </div>;
};

export default ProfileManager;
