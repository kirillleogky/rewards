import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import Button from '../../atoms/Button';

import { ADD_ICON, TRANSITION_DURATION } from './constants';

import './styles.scss';


const Modal = ({ children, showModalContent, onExited, closeModal }) => {

    useEffect(() => {
        const onKeyPress = event => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        document.addEventListener('keydown', onKeyPress);
        return () => {
            document.removeEventListener('keydown', onKeyPress);
        };
    }, [closeModal]);

    return (
        <CSSTransition in={showModalContent}
                       timeout={TRANSITION_DURATION}
                       classNames="modal-animation-container"
                       unmountOnExit
                       onExited={onExited}
        >
            <div className="modal"
                 data-close-modal={true}
            >
                <div className="modal__body">
                    {children}
                </div>
                <Button onClick={closeModal} className="close-modal-btn">
                    <img src={ADD_ICON} alt="close modal"/>
                </Button>
            </div>
        </CSSTransition>
    );
};

export default Modal;
