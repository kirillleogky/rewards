import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import Button from '../../atoms/Button';

import './styles.scss';

const Modal = ({ children, showModalContent, onEnter, onExited, closeModal }) => {
    const modalRef = useRef();
    let modalElement = modalRef.current;

    useEffect(() => {
        if (modalElement) {
            modalElement.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [showModalContent, modalElement]);

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

    return <CSSTransition in={showModalContent}
                          timeout={300}
                          classNames="modal-animation-container"
                          unmountOnExit
                          onEnter={onEnter}
                          onExited={onExited}
    >
        <div className="modal"
             data-close-modal={true}
             ref={modalRef}
        >
            <div className="modal__body">
                {children}
            </div>
            <Button closeModal={closeModal} className="close-modal-btn">
              <img src="/images/add-icon.svg" alt="close modal"/>
            </Button>
        </div>
    </CSSTransition>;
};

export default Modal;
