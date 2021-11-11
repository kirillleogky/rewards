import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { MODAL_CONTENT_BY_TYPE } from '../components/pages/ModalLayout/constants';

const getModalTypeSelector = state => state.modal.modal;

export const useModalContent = () => {
    const modalType = useSelector(getModalTypeSelector);
    const ModalContent = MODAL_CONTENT_BY_TYPE[modalType] || null;
    const showModalContent = !!ModalContent;

    const prevRef = useRef('');
    useEffect(() => {
        prevRef.current = ModalContent;
    });
    const prevModalContent = prevRef.current;

    return {
        ModalContent,
        showModalContent,
        prevModalContent
    };
};
