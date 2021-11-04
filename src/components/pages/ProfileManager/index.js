import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import RewardsList from '../../organisms/RewardsList';
import PersonalInfo from '../../organisms/PersonalInfo';
import RewardsNavList from '../../atoms/RewardsNavList';
import Button from '../../atoms/Button';

import { setModal } from '../../../store/actions/modalAction';

import { getFromLocalStorage } from '../../../utils/localStorage';

import './styles.scss';

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
        <Button closeModal={openAddRewardModal} className="add-reward-btn">
          <img src="/images/add-icon.svg" alt="add reward"/>
        </Button>
    </div>;
};

export default ProfileManager;
