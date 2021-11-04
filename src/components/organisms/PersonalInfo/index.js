import React from 'react';

import './styles.scss';

const PersonalInfo = () => {

    return (
        <div className="personal-info__container">
            <div className="personal-info__reward" style={{ backgroundImage: 'url(/images/flower-1-icon.svg)' }}>
                <div className="personal-info__amount">
                    $250
                </div>
                <div className="personal-info__text">
                    My rewards
                </div>
            </div>
            <div className="personal-info__name-and-image">
                <img src="/images/person-5.webp" alt="person"
                     className="personal-info__image"/>
                <div className="personal-info__name">Jane Doe</div>
            </div>
            <div className="personal-info__gratitude"
                 style={{ backgroundImage: 'url(/images/flower-2-icon.svg)' }}>
                <div className="personal-info__amount">
                    $100
                </div>
                <div className="personal-info__text">
                    Give
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
