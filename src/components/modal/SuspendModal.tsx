import React from "react";
// redux
import { Modal, ModalBody, ModalHeader, ModalOverlay, ModalContent, ModalCloseButton } from "@chakra-ui/react";

import CustomDivider from "../form/CustomDivider";
import ModalFooterComponent from "./ModalFooterComponent";

interface IModalProps {
    isOpen: boolean;
    onClose: any;
    handleSubmit: any;
    isLoading: boolean;
    modalheader: string;
    modalContent: string;
}

const SuspendModal = ({ isOpen, onClose, handleSubmit, isLoading, modalheader, modalContent }: IModalProps) => (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{modalheader}</ModalHeader>
                <CustomDivider />
                <ModalCloseButton />
                <form onSubmit={handleSubmit} autoComplete="off">
                    <ModalBody>{modalContent}</ModalBody> <CustomDivider />
                    <ModalFooterComponent handleClose={onClose} isLoading={isLoading} />
                </form>
            </ModalContent>
        </Modal>
    );

export default SuspendModal;
