import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../store/actions/modalAction';

const rewardsList = [
    {
        image: '/images/person-1.webp',
        rewardfulName: 'David Greene',
        rewardingName: 'John Chen',
        comment: 'Big thanks for everything',
        rewardTime: '4 hours ago'
    },
    {
        image: '/images/person-2.webp',
        rewardfulName: 'Alex Brown',
        rewardingName: 'Rajesh Kumar',
        comment: 'Thanks for help',
        rewardTime: 'Feb 1, 2021'
    }
];

const ProfileManager = () => {
    const dispatch = useDispatch();

    const getRewardfulPersonImage = rewardItem => {
        return rewardItem.image ? rewardItem.image : '/images/default-icon.jpg';
    };

    const openAddRewardModal = () => dispatch(setModal('add-reward'));

    return <div className="page profile">
        <div className="profile__container">
            <div className="profile__header">
                <div className="profile__personal-reward" style={{ backgroundImage: 'url(/images/flower-1-icon.svg)' }}>
                    <div className="profile__personal-info-amount">
                        $250
                    </div>
                    <div className="profile__personal-info-text">
                        My rewards
                    </div>
                </div>
                <div className="profile__personal-info">
                    <img src="/images/person-3.webp" alt="person"
                         className="profile__personal-image"/>
                    <div className="profile__personal-name">Jane Doe</div>
                </div>
                <div className="profile__personal-gratitude"
                     style={{ backgroundImage: 'url(/images/flower-2-icon.svg)' }}>
                    <div className="profile__personal-info-amount">
                        $100
                    </div>
                    <div className="profile__personal-info-text">
                        Give
                    </div>
                </div>
            </div>
            <nav className="profile__navigation">
                <ul className="profile__navigation-list">
                    <li className="profile__navigation-item profile__navigation-item--active">Feed</li>
                    <li className="profile__navigation-item">My rewards</li>
                </ul>
            </nav>
            <ul className="profile__rewards">
                {
                    rewardsList.map(rewardItem =>
                        <li className="profile__reward" key={rewardItem.comment}>
                            <div className="profile__reward-info">
                                <img src={getRewardfulPersonImage(rewardItem)} alt="rewardful person"
                                     className="profile__reward-image"/>
                                <div>
                                    <div
                                        className="profile__reward-names">{rewardItem.rewardfulName} → {rewardItem.rewardingName}</div>
                                    <div className="profile__reward-date">{rewardItem.rewardTime}</div>
                                </div>
                            </div>
                            <div className="profile__reward-comment">{rewardItem.comment}</div>
                        </li>
                    )
                }
            </ul>
        </div>
        <button className="profile__add-reward-btn" onClick={openAddRewardModal}>
            <img src="/images/add-icon.svg" alt="add reward"/>
        </button>
    </div>;
};

export default ProfileManager;
