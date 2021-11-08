import React from 'react';
import { useDispatch } from 'react-redux';

import PersonalInfo from '../../organisms/PersonalInfo';
import Button from '../../atoms/Button';

import Rewads from '../../organisms/Rewards';

import { setModal } from '../../../store/actions/modalAction';

import './styles.scss';

const ProfileManager = () => {
    const dispatch = useDispatch();

    const openAddRewardModal = () => dispatch(setModal('add-reward'));

    return <div className="page profile">
        <div className="profile__container">
            <PersonalInfo/>
            <Rewads/>
        </div>
        <Button closeModal={openAddRewardModal} className="add-reward-btn">
            <img src="/images/add-icon.svg" alt="add reward"/>
        </Button>
    </div>;
};

export default ProfileManager;
