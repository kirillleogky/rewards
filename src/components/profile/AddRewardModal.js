import React, { useState } from 'react';
import { getCurrentDate, setLocalStorage, getFromLocalStorage } from '../../utils';

const AddRewardModal = props => {
    const [rewardfulName, setRewardfulName] = useState('');
    const [rewardAmount, setRewardAmount] = useState('');
    const [comment, setComment] = useState('');

    const rewardfulNameInputHandler = event => {
        setRewardfulName(event.target.value);
    };

    const rewardAmountInputHandler = event => {
        setRewardAmount(event.target.value);
    };

    const commentTextarearHandler = event => {
        setComment(event.target.value);
    };

    const getClassName = () => {
        let resultClassName = 'submit-btn';
        if (rewardfulName && rewardAmount && comment) {
            resultClassName += ` ${resultClassName}--active`;
        }
        return resultClassName;
    };

    const submit = () => {
        const currentRewardList = getFromLocalStorage('rewards');
        currentRewardList.unshift({
            image: '/images/person-5.webp',
            rewardfulName: rewardfulName,
            rewardingName: 'Jane Doe',
            comment: comment,
            rewardTime: getCurrentDate()
        });
        setLocalStorage('rewards', currentRewardList);
    };

    return <div className="modal-content">
        <div className="modal-content__header">
            Give a reward for someone
        </div>
        <form className="form">
            <label className="label">
                To
                <input type="text"
                       name="rewardful name"
                       placeholder="For example: Santa Claus, Yoda or Tim Berners-Lee"
                       onChange={rewardfulNameInputHandler}
                       value={rewardfulName}
                       className="input"/>
            </label>
            <label className="label">
                Reward
                <input type="number"
                       name="reward amount"
                       placeholder="0$"
                       onChange={rewardAmountInputHandler}
                       value={rewardAmount}
                       className="input"/>
            </label>
            <label className="label">
                Why
                <textarea name="reward description"
                          rows="4"
                          placeholder="Tell her/him what this award is for"
                          onChange={commentTextarearHandler}
                          value={comment}
                          className="textarea"/>
            </label>
            <button className={getClassName()} onClick={submit}>Give a reward →</button>
        </form>
    </div>;
};

export default AddRewardModal;
