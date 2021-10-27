import React from 'react';

const AddRewardModal = props => {

    return <div className="modal-content">
        <div className="modal-content__header">
            Give a reward for someone
        </div>
        <form className="form">
            <label className="label">
                To
                <input type="text" name="rewardful name" placeholder="For example: Santa Claus, Yoda or Tim Berners-Lee"
                       className="input"/>
            </label>
            <label className="label">
                Reward
                <input type="number" name="reward amount" placeholder="0$" className="input"/>
            </label>
            <label className="label">
                Why
                <textarea name="reward description" rows="4" placeholder="Tell her/him what this award is for"
                          className="textarea"/>
            </label>
            <button className="submit-btn">Give a reward →</button>
        </form>

    </div>;
};

export default AddRewardModal;
