import React from 'react';

import './styles.scss';

const CloseModalButton = ({ closeModal }) => {
    return <button className="close-modal-btn" onClick={closeModal}>
        <img src="/images/add-icon.svg" alt="close modal"/>
    </button>;
};

export default CloseModalButton;
