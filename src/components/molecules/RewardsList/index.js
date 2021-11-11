import React from 'react';

import { REWARDFUL_PERSON_DEFAULT_ICON } from './constants';

import './styles.scss';


const RewardsList = ({ currentRewardList }) => {
    const getRewardfulPersonImage = rewardItem => {
        return rewardItem.image ? rewardItem.image : REWARDFUL_PERSON_DEFAULT_ICON;
    };

    return (
        <ul className="rewards-list-container">
            {
                currentRewardList.map((rewardItem, index) =>
                    <li className="rewards-list" key={index}>
                        <div className="rewards-list__info">
                            <img src={getRewardfulPersonImage(rewardItem)} alt="rewardful person"
                                 className="rewards-list__image"/>
                            <div>
                                <div
                                    className="rewards-list__names">{rewardItem.rewardingName} → {rewardItem.rewardfulName}</div>
                                <div className="rewards-list__date">{rewardItem.rewardTime}</div>
                            </div>
                        </div>
                        <div className="rewards-list__comment">{rewardItem.comment}</div>
                    </li>
                )
            }
        </ul>
    );
};

export default RewardsList;
