import React, { useState } from 'react';

import Label from '../atoms/Label';
import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';

import { setLocalStorage, getFromLocalStorage } from '../../utils/localStorage';
import { getCurrentDate } from '../../utils/getCurrentDate';
import { formatMoney, deformatMoney } from '../../utils/formatMoney';

const AddRewardModal = () => {
    const [rewardfulName, setRewardfulName] = useState('');
    const [rewardAmount, setRewardAmount] = useState('');
    const [comment, setComment] = useState('');

    const formHandler = event => {
        if (event.target.name === 'rewardful name') {
            setRewardfulName(event.target.value);
        }
        if (event.target.name === 'reward amount') {
            setRewardAmount(deformatMoney(event.target.value));
        }
        if (event.target.name === 'reward description') {
            setComment(event.target.value);
        }
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
            <Label labelText="To">
                <Input type="text"
                       name="rewardful name"
                       placeholder="For example: Santa Claus, Yoda or Tim Berners-Lee"
                       onChange={formHandler}
                       value={rewardfulName}/>
            </Label>
            <Label labelText="Reward">
                <Input type="text"
                       name="reward amount"
                       placeholder="0$"
                       onChange={formHandler}
                       value={rewardAmount ? formatMoney(rewardAmount) : rewardAmount}/>
            </Label>
            <Label labelText="Why">
                <Textarea name="reward description"
                          rows="4"
                          placeholder="Tell her/him what this award is for"
                          onChange={formHandler}
                          value={comment}/>
            </Label>
            <button className={getClassName()} onClick={submit}>Give a reward →</button>
        </form>
    </div>;
};

export default AddRewardModal;
