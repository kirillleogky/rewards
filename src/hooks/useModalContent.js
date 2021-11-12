import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { MODAL_CONTENT_BY_TYPE } from '../components/pages/ModalLayout/constants';

const getModalTypeSelector = state => state.modal.modal;

export const useModalContent = () => {
    const modalType = useSelector(getModalTypeSelector);
    const ModalContent = MODAL_CONTENT_BY_TYPE[modalType] || null;
    const [showModalContent, setShowModalContent] = useState(!!ModalContent);
    useEffect(() => {
        setShowModalContent(!!ModalContent);
    }, [ModalContent]);

    return {
        ModalContent,
        showModalContent,
        setShowModalContent
    };
};
