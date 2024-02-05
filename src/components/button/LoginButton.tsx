import React from 'react';
import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { globalStyles } from '../../theme/styles';

interface ButtonProp {
  label: any;
  isSubmitting?: any;
}

const LoginButton = ({ label, isSubmitting }: ButtonProp) => {
  const { t } = useTranslation();
  return (
    <Button
      bgColor={globalStyles.colors.mainColor}
      type="submit"
      isLoading={isSubmitting}
      color="white"
      _hover={{ opacity: 0.8 }}
      width="full"
      borderRadius="2xl"
      fontWeight="black"
    >
      {t(label)}
    </Button>
  );
};

export default LoginButton;
