import React from 'react';

import './styles.scss';

const RewardsList = ({ currentRewardList }) => {
    const getRewardfulPersonImage = rewardItem => {
        return rewardItem.image ? rewardItem.image : '/images/default-icon.jpg';
    };

    return (
        currentRewardList.map(rewardItem =>
            <li className="rewards-list" key={rewardItem.comment}>
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
        ));
};

export default RewardsList;
