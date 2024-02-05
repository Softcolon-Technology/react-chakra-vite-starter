import React from "react";
import {
    Modal,
    Input,
    Button,
    Container,
    ModalHeader,
    ModalFooter,
    ModalOverlay,
    ModalContent,
    useClipboard,
    ModalCloseButton
} from "@chakra-ui/react";

// redux

import { useTranslation } from "react-i18next";

import CustomDivider from "../form/CustomDivider";
import { globalStyles } from "../../theme/styles";

interface IModalProps {
    isOpen: boolean;
    onClose: any;
    link: string;
}

const CompanyLinkModal = ({ isOpen, onClose, link }: IModalProps) => {
    const { onCopy, value, setValue, hasCopied } = useClipboard(link);
    const { t } = useTranslation();
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Copy Link</ModalHeader>
                <CustomDivider />
                <ModalCloseButton />

                <Container mt={3}>
                    <Input value={link} readOnly />
                </Container>

                <ModalFooter>
                    <Button
                        rounded="md"
                        bgColor={globalStyles.colors.button.success}
                        color="#ffffff"
                        mr={3}
                        onClick={onCopy}
                        _hover={{ bg: globalStyles.colors.button.success }}
                    >
                        {hasCopied ? "Copied!" : "Copy"}
                    </Button>
                    <Button rounded="md" bgColor="#A3A3A3" color="#ffffff" onClick={onClose}>
                        {t("common.cancel")}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CompanyLinkModal;
