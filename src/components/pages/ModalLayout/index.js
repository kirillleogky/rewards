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
        setShowModalContent
    } = useModalContent();

    useEffect(() => {
        dispatch(setModal(''));
    }, [location.pathname, dispatch]);

    const closeModal = () => {
        dispatch(setModal(''));
    };

    const hideModalContent = () => {
        setShowModalContent(false);
    };

    return (
        <Modal closeModal={hideModalContent}
               showModalContent={showModalContent}
               onExited={closeModal}
        >
            {ModalContent && <ModalContent/>}
        </Modal>
    );
};

export default ModalLayout;
