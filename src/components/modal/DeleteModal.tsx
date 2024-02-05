import React from "react";
// redux
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalOverlay,
    ModalContent,
    ModalCloseButton
} from "@chakra-ui/react";

import CustomDivider from "../form/CustomDivider";
import DeleteModalFooter from "./DeleteModalFooter";

interface IModalProps {
    isOpen: boolean;
    onClose: any;
    handleDelete: any;
    modalHeading: string;
    modalMessage: string;
    isLoading: boolean;
}

const DeleteModal = ({ isOpen, onClose, handleDelete, modalHeading, modalMessage, isLoading }: IModalProps) => (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{modalHeading}</ModalHeader>
                <CustomDivider />
                <ModalCloseButton />
                <ModalBody>
                    {modalMessage} <br />
                    削除した情報は復元できません
                </ModalBody>
                <CustomDivider />

                <DeleteModalFooter handleClose={onClose} isLoading={isLoading} handleDelete={handleDelete} />
            </ModalContent>
        </Modal>
    );

export default DeleteModal;
