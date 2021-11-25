import React from 'react';

import './styles.scss';


const RewardsList = ({ currentRewardList }) => {

    return (
        <ul className="rewards-list-container">
            {
                currentRewardList.map((rewardItem, index) =>
                    <li className="rewards-list" key={index}>
                        <div className="rewards-list__info">
                            <img src={rewardItem.image} alt="rewardful person"
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
