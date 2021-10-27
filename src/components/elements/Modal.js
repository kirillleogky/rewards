import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import CloseModalButton from './CloseModalButton';

const Modal = props => {
    const modalRef = useRef();
    let modalElement = modalRef.current;

    const { children, showModalContent, onEnter, onExited, closeModal } = props;

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
            <CloseModalButton/>
        </div>
    </CSSTransition>;
};

export default Modal;
