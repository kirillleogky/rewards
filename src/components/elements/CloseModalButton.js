import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setModal } from '../../store/actions/modalAction';

const Button = () => {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setModal(''));
    };

    return <button className="modal__close-btn" onClick={closeModal}>
        <img src="/images/add-icon.svg" alt="close modal"/>
    </button>;
};

Button.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string
};

export default Button;
