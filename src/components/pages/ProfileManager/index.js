import React from 'react';
import { useDispatch } from 'react-redux';

import PersonalInfo from '../../organisms/PersonalInfo';
import Button from '../../atoms/Button';

import Rewads from '../../organisms/Rewards';

import { setModal } from '../../../store/actions/modalAction';

import './styles.scss';

import { ADD_ICON, REWARD_FROM_MODAL } from './constants';


const ProfileManager = () => {
    const dispatch = useDispatch();

    const openAddRewardModal = () => dispatch(setModal(REWARD_FROM_MODAL));

    return <div className="page profile">
        <div className="profile__container">
            <PersonalInfo/>
            <Rewads/>
        </div>
        <Button onClick={openAddRewardModal} className="add-reward-btn">
            <img src={ADD_ICON} alt="add reward"/>
        </Button>
    </div>;
};

export default ProfileManager;
