import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { setModal } from '../../../store/actions/modalAction';

import Modal from '../../molecules/Modal';
import AddRewardModal from '../../organisms/Modals/AddRewardModal';

const MODAL_TYPES = {
    ADD_REWARD: 'add-reward',
}

const MODAL_CONTENT_BY_TYPE = {
    [MODAL_TYPES.ADD_REWARD]: AddRewardModal,
}

const getModalTypeSelector = state => state.modal.modal

const useModalContent = () => {
    const modalType = useSelector(getModalTypeSelector);
    const ModalContent = MODAL_CONTENT_BY_TYPE[modalType] || null;
    const showModalContent = !!ModalContent;

    return {
        ModalContent,
        showModalContent,
    }
}

const ModalLayout = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const {
        ModalContent,
        showModalContent,
    } = useModalContent();

    // const modalInfoString = useSelector(state => state.modal.modal);
    // const [modalContent, setModalContent] = useState(null);
    // const [showModalContent, setShowModalContent] = useState(false);
    // const [modalInfo, setModalInfo] = useState({ name: '', params: [] });

    useEffect(() => {
        dispatch(setModal(''));
    }, [location.pathname, dispatch]);

    // const prevRef = useRef('');
    //
    // useEffect(() => {
    //     prevRef.current = modalInfoString;
    // });

    // const previousModalInfoString = prevRef.current;

    // const getModalContent = useCallback(() => {
    //     switch (modalInfo.name) {
    //         case 'add-reward':
    //             return <AddRewardModal/>;
    //         default:
    //             return null;
    //     }
    // }, [modalInfo.name]);

    // useEffect(() => {
    //     const currentModalInfo = parseModalString(modalInfoString);
    //     const prevModalInfo = parseModalString(previousModalInfoString);
    //
    //     setModalContent(getModalContent());
    //
    //     if (!currentModalInfo.name) {
    //         setTimeout(() => setModalInfo(currentModalInfo), 300);   // Add delay when we close modal to prevent unmount modal content (for animation)
    //     } else {
    //         setModalInfo(currentModalInfo);
    //     }
    //
    //     if (prevModalInfo.name !== currentModalInfo.name) {         // For opening one modal from another
    //         setShowModalContent(!prevModalInfo.name);
    //     }
    // }, [modalInfoString, previousModalInfoString, getModalContent]);

    // const getSetModalContent = content => () => setModalContent(content);

    // const setNewModal = () => {
    //     const currentModalInfo = parseModalString(modalInfoString);
    //
    //     setModalInfo(currentModalInfo);
    //
    //     if (currentModalInfo.name) {
    //         setShowModalContent(true);
    //     }
    // };

    const closeModal = () => {
        dispatch(setModal(''));
    };

    // const parseModalString = modalString => {
    //     const splittedModalString = modalString.split('/');
    //     return {
    //         name: splittedModalString[0],
    //         params: splittedModalString.slice(1)
    //     };
    // };

    return (
        <Modal
            // onEnter={getSetModalContent(getModalContent())}
            // onExited={setNewModal}
            closeModal={closeModal}
            showModalContent={showModalContent}
        >
            { ModalContent && <ModalContent /> }
        </Modal>
    );
};

export default ModalLayout;
