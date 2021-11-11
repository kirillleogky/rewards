import React from 'react';

import { FLOWER_ICONS, PERSONAL_DEFAULT_INFO } from './constants';

import './styles.scss';


const PersonalInfo = () => {
    return (
        <div className="personal-info__container">
            <div className="personal-info__reward" style={{ backgroundImage: FLOWER_ICONS[0] }}>
                <div className="personal-info__amount">
                    {PERSONAL_DEFAULT_INFO['REWARD_AMOUNT']}
                </div>
                <div className="personal-info__text">
                    My rewards
                </div>
            </div>
            <div className="personal-info__name-and-image">
                <img src={PERSONAL_DEFAULT_INFO['IMAGE']} alt="person"
                     className="personal-info__image"/>
                <div className="personal-info__name">PERSONAL_DEFAULT_INFO['NAME']</div>
            </div>
            <div className="personal-info__gratitude"
                 style={{ backgroundImage: FLOWER_ICONS[1] }}>
                <div className="personal-info__amount">
                    {PERSONAL_DEFAULT_INFO['GRATITUDE_AMOUNT']}
                </div>
                <div className="personal-info__text">
                    Give
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
