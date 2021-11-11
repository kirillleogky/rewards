import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { setModal } from '../../../store/actions/modalAction';

import Modal from '../../molecules/Modal';

import { useModalContent } from '../../../hooks/useModalContent';


const ModalLayout = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    let {
        ModalContent,
        showModalContent,
        prevModalContent
    } = useModalContent();

    useEffect(() => {
        dispatch(setModal(''));
    }, [location.pathname, dispatch]);


    if (prevModalContent && !ModalContent) {
        const currentModalContent = ModalContent;
        ModalContent = prevModalContent;
        setTimeout(() => {                                                        // Add delay when we close modal to prevent setting empty modal content (for animation)
            ModalContent = currentModalContent;
        }, 300);
    }

    const closeModal = () => {
        dispatch(setModal(''));
    };

    return (
        <Modal closeModal={closeModal}
               showModalContent={showModalContent}
        >
            {ModalContent && <ModalContent/>}
        </Modal>
    );
};

export default ModalLayout;
