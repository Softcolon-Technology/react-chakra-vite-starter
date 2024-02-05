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
}

const WithDrawModal = ({ isOpen, onClose, handleSubmit, isLoading }: IModalProps) => (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>退会済</ModalHeader>
                <CustomDivider />
                <ModalCloseButton />
                <form onSubmit={handleSubmit} autoComplete="off">
                    <ModalBody>
                        <p>本当にユーザーを退会させますか?</p>
                        <p>退会したユーザー情報は復元できません</p>
                    </ModalBody>
                    <CustomDivider />

                    <ModalFooterComponent handleClose={onClose} isLoading={isLoading} />
                </form>
            </ModalContent>
        </Modal>
    );

export default WithDrawModal;
