// redux
import { useSelector } from 'react-redux';
import { Formik, FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import React, { useRef, useState } from 'react';
import {
  Flex,
  Modal,
  Switch,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/react';

// components
import CustomDivider from '../form/CustomDivider';
import CustomFormLabel from '../form/CustomFormLabel';
import CustomInputField from '../form/CustomInputLogin';
import ModalFooterComponent from './ModalFooterComponent';
import CustomNumberInputField from '../form/CustomNumberInputField';
import { CategorySchema } from '../../validations/masteradmin.validation';

interface IModalProps {
  isOpen: boolean;
  onClose: any;
  getAll: any;
}

const AddCategoryModal = ({ isOpen, onClose, getAll }: IModalProps) => {
  const categoryDetails = useSelector((row: any) => row?.MasterAdmin?.selectedCategory);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { t } = useTranslation();
  const formRef = useRef<FormikProps<any>>(null);

  // submit handler
  const onSubmit = async (values: any) => {
    //
  };

  const handleClose = () => {
    onClose();
    formRef?.current?.resetForm();
  };
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{!categoryDetails?.isEdit ? 'カテゴリを追加' : 'カテゴリを編集'}</ModalHeader>
        <CustomDivider />
        <ModalCloseButton />

        <Formik
          initialValues={{
            name: categoryDetails?.name ?? '',
            order: categoryDetails?.order ?? undefined,
            status: categoryDetails?.status ?? true,
          }}
          enableReinitialize
          onSubmit={() => {
            onSubmit(formRef?.current?.values);
          }}
          innerRef={formRef}
          validationSchema={CategorySchema(t)}
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
                <Flex flexDir="column" gap={3}>
                  <CustomInputField
                    label={String(t('common.category_name'))}
                    name="name"
                    Type="text"
                    values={values.name}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors.name}
                    touched={touched.name}
                    isMandatory
                  />

                  <CustomNumberInputField
                    label={String(t('common.sort_order'))}
                    values={values.order}
                    isMandatory
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    errors={errors.order}
                    touched={touched.order}
                    name="order"
                    isDisabled={false}
                  />

                  <Flex flexDir="column" flex={0.5}>
                    <CustomFormLabel label={String(t('common.status'))} isMandatory={false} />

                    <Switch
                      mb={3}
                      name="status"
                      defaultChecked={categoryDetails?.isEdit ? categoryDetails?.status : true}
                      onChange={(e: any) => {
                        if (e.target.checked) {
                          setFieldValue('status', true);
                        } else {
                          setFieldValue('status', false);
                        }
                        setFieldTouched('status', true);
                      }}
                    />
                  </Flex>
                </Flex>
              </ModalBody>
              <CustomDivider />

              <ModalFooterComponent
                handleClose={onClose}
                isLoading={isLoading}
                handleDisabled={!(dirty && Object.keys(errors).length === 0)}
              />
            </form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default AddCategoryModal;
