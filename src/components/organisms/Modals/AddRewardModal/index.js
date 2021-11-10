import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Label from '../../../atoms/Label';
import Input from '../../../atoms/Input';
import Textarea from '../../../atoms/Textarea';
import Button from '../../../atoms/Button';
import Form from '../../../atoms/Form';

import { setModal } from '../../../../store/actions/modalAction';
import { setRewards } from '../../../../store/actions/rewardsAction';

import { getCurrentDate } from '../../../../utils/getCurrentDate';
import { formatMoney } from '../../../../utils/formatMoney';
import { moveInputCursor } from '../../../../utils/moveInputCursor';

import '../styles.scss';

const DEFAULT_FORM_INITIAL_VALUES = {
    'rewardful name': '',
    'reward amount': '',
    'reward description': ''
};

const AddRewardModal = () => {
    const dispatch = useDispatch();
    const [isFormValid, setIsFormValid] = useState(true);

    const closeModal = () => {
        dispatch(setModal(''));
    };

    const submit = formValues => {
        dispatch(setRewards({
            image: '/images/person-5.webp',
            rewardfulName: formValues['rewardful name'],
            rewardingName: 'Jane Doe',
            comment: formValues['reward description'],
            rewardTime: getCurrentDate()
        }));
        closeModal();
    };

    const getIsFormValid = formValues => {
        let isCurrentFormValid = true;
        for (const value in formValues) {
            if (!formValues[value]) {
                isCurrentFormValid = false;
            }
        }
        setIsFormValid(isCurrentFormValid);
    };

    const onSaveMoneyFieldValue = saveFieldValue => event => {
        if (event.target.value.length === 1) {
            event.target.value = formatMoney(event.target.value);
        }
        moveInputCursor(event);
        return saveFieldValue(event);
    };

    return <div className="modal-content">
        <div className="modal-content__header">
            Give a reward for someone
        </div>
        <Form initialValues={DEFAULT_FORM_INITIAL_VALUES} onSubmit={submit} getIsFormValid={getIsFormValid}>
            {
                (saveFieldValue, formValues) => (
                    <>
                        <Label labelText="To">
                            <Input type="text"
                                   name="rewardful name"
                                   placeholder="For example: Santa Claus, Yoda or Tim Berners-Lee"
                                   onChange={saveFieldValue}/>
                        </Label>
                        <Label labelText="Reward">
                            <Input type="text"
                                   name="reward amount"
                                   placeholder="0$"
                                   onClick={moveInputCursor}
                                   onChange={onSaveMoneyFieldValue(saveFieldValue)}/>
                        </Label>
                        <Label labelText="Why">
                            <Textarea name="reward description"
                                      rows="4"
                                      placeholder="Tell her/him what this award is for"
                                      onChange={saveFieldValue}/>
                        </Label>
                        <Button className="submit-btn" isClassNameActive={isFormValid}>
                            Give a reward →
                        </Button>
                    </>
                )
            }
        </Form>
    </div>;
};

export default AddRewardModal;
