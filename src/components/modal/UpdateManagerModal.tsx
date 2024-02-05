// redux
import { useSelector } from 'react-redux';
import { Formik, FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import React, { useRef, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Modal,
  Stack,
  Switch,
  ModalBody,
  FormLabel,
  ModalHeader,
  FormControl,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/react';

import CustomDivider from '../form/CustomDivider';
import ModalFooterComponent from './ModalFooterComponent';

interface IModalProps {
  isOpen: boolean;
  onClose: any;
  getAll: any;
}

const UpdateManagerModal = ({ isOpen, onClose, getAll }: IModalProps) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const adminDetail = useSelector((row: any) => row?.Admin.selectedAdmin);
  const formRef = useRef<FormikProps<any>>(null);

  // submit handler
  const onSubmit = async () => {
    //
  };

  const handleClose = () => {
    onClose();
    formRef?.current?.resetForm();
    setIsLoading(false);
  };
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>担当者を変更</ModalHeader>
        <CustomDivider />
        <ModalCloseButton />

        <Formik
          initialValues={{
            status: adminDetail?.status ?? adminDetail?.status,
          }}
          enableReinitialize
          onSubmit={() => {
            onSubmit();
          }}
          innerRef={formRef}
        >
          {({
            handleSubmit,
            errors,
            touched,
            values,
            setFieldValue,
            setFieldTouched,
            handleChange,
            handleBlur,
            dirty,
          }) => (
            <form onSubmit={handleSubmit} autoComplete="off">
              <ModalBody>
                <Box>
                  <Stack spacing={4}>
                    <Flex flexDir="column">
                      <Text fontWeight="bold">{String(t('login.email'))} </Text>
                      <Text>{adminDetail?.email}</Text>
                    </Flex>

                    <Flex flexDir="column">
                      <Text fontWeight="bold">{String(t('status.user'))} </Text>

                      <Text>{adminDetail?.userName ? adminDetail?.userName : '-'}</Text>
                    </Flex>

                    <FormControl>
                      <FormLabel fontWeight="bold">{String(t('common.status'))}</FormLabel>

                      <Switch
                        mb={3}
                        name="status"
                        defaultChecked={adminDetail?.status}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFieldValue('status', true);
                          } else {
                            setFieldValue('status', false);
                          }
                        }}
                      />
                    </FormControl>
                  </Stack>
                </Box>
              </ModalBody>
              <CustomDivider />

              <ModalFooterComponent
                handleClose={onClose}
                handleDisabled={!(dirty && Object.keys(errors).length === 0)}
                isLoading={isLoading}
              />
            </form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default UpdateManagerModal;
