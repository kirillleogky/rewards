import React, { useCallback, useEffect, useRef, useState } from 'react';
import { setModal } from '../../store/actions/modalAction';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../elements/Modal';
import AddRewardModal from '../profile/AddRewardModal';
import { useLocation } from 'react-router-dom';

const ModalLayout = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const modalInfoString = useSelector(state => state.modal.modal);
    const [modalContent, setModalContent] = useState(null);
    const [showModalContent, setShowModalContent] = useState(false);
    const [modalInfo, setModalInfo] = useState({ name: '', params: [] });

    useEffect(() => {
        dispatch(setModal(''));
    }, [location.pathname, dispatch]);

    const prevRef = useRef('');
    useEffect(() => {
        prevRef.current = modalInfoString;
    });
    const previousModalInfoString = prevRef.current;

    const getModalContent = useCallback(() => {
        switch (modalInfo.name) {
            case 'add-reward':
                return <AddRewardModal/>;
            default:
                return null;
        }
    }, [modalInfo.name]);

    useEffect(() => {
        const currentModalInfo = parseModalString(modalInfoString);
        const prevModalInfo = parseModalString(previousModalInfoString);

        setModalContent(getModalContent());
        if (!currentModalInfo.name) {
            setTimeout(() => setModalInfo(currentModalInfo), 300);   // Add delay when we close modal to prevent unmount modal content (for animation)
        } else {
            setModalInfo(currentModalInfo);
        }

        if (prevModalInfo.name !== currentModalInfo.name) {       // For opening one modal from another
            setShowModalContent(!prevModalInfo.name);
        }
    }, [modalInfoString, previousModalInfoString, getModalContent]);

    const getSetModalContent = content => () => setModalContent(content);

    const setNewModal = () => {
        const currentModalInfo = parseModalString(modalInfoString);
        setModalInfo(currentModalInfo);
        if (currentModalInfo.name) {
            setShowModalContent(true);
        }
    };

    const closeModal = () => {
        dispatch(setModal(''));
    };

    const parseModalString = modalString => {
        const splittedModalString = modalString.split('/');
        return {
            name: splittedModalString[0],
            params: splittedModalString.slice(1)
        };
    };

    return <Modal onEnter={getSetModalContent(getModalContent())}
                  onExited={setNewModal}
                  closeModal={closeModal}
                  showModalContent={showModalContent}
    >
        {modalContent}
    </Modal>;
};

export default ModalLayout;
