import React from 'react';

import './styles.scss';

const Button = ({ children, closeModal, className }) => {
    return <button className={className} onClick={closeModal}>
        {children}
    </button>;
};

export default Button;
