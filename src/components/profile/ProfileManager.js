import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

    const getRewardfulPersonImage = rewardItem => {
        return rewardItem.image ? rewardItem.image : '/images/default-icon.jpg';
    };

    return <div className="page profile">
        <div className="profile__container">
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
    </div>;
};

export default ProfileManager;
