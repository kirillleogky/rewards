import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../store/actions/modalAction';
import { getFromLocalStorage } from '../../utils';


const ProfileManager = () => {
    const dispatch = useDispatch();
    const rewardsList = getFromLocalStorage('rewards') || [];
    const myRewardsList = rewardsList.filter(rewardItem => rewardItem.rewardfulName === 'Jane Doe');

    const [isMyRewardListActive, setIsMyRewardListActive] = useState(false);

    const getRewardfulPersonImage = rewardItem => {
        return rewardItem.image ? rewardItem.image : '/images/default-icon.jpg';
    };

    const openAddRewardModal = () => dispatch(setModal('add-reward'));

    const renderRewardList = currentRewardList => {
        return (
            currentRewardList.map(rewardItem =>
                <li className="profile__reward" key={rewardItem.comment}>
                    <div className="profile__reward-info">
                        <img src={getRewardfulPersonImage(rewardItem)} alt="rewardful person"
                             className="profile__reward-image"/>
                        <div>
                            <div
                                className="profile__reward-names">{rewardItem.rewardingName} → {rewardItem.rewardfulName}</div>
                            <div className="profile__reward-date">{rewardItem.rewardTime}</div>
                        </div>
                    </div>
                    <div className="profile__reward-comment">{rewardItem.comment}</div>
                </li>
            ));
    };

    const getClassName = currentNavElem => {
        let resultClassName = 'profile__navigation-item';
        if (currentNavElem === 'feed' && !isMyRewardListActive) {
            resultClassName += ` ${resultClassName}--active`;
        }
        if (currentNavElem === 'my rewards' && isMyRewardListActive) {
            resultClassName += ` ${resultClassName}--active`;
        }
        return resultClassName;
    };

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
                    <img src="/images/person-5.webp" alt="person"
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
                    <li className={getClassName('feed')} onClick={() => setIsMyRewardListActive(false)}>Feed</li>
                    <li className={getClassName('my rewards')} onClick={() => setIsMyRewardListActive(true)}>My
                        rewards
                    </li>
                </ul>
            </nav>
            <ul className="profile__rewards">
                {
                    isMyRewardListActive
                        ? renderRewardList(myRewardsList)
                        : renderRewardList(rewardsList)
                }
            </ul>
        </div>
        <button className="profile__add-reward-btn" onClick={openAddRewardModal}>
            <img src="/images/add-icon.svg" alt="add reward"/>
        </button>
    </div>;
};

export default ProfileManager;
