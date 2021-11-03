import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import CloseModalButton from '../atoms/CloseModalButton';

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
            <CloseModalButton closeModal={closeModal}/>
        </div>
    </CSSTransition>;
};

export default Modal;
