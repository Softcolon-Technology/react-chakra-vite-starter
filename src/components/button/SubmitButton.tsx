import { useTranslation } from 'react-i18next';
import { Stack, Button } from '@chakra-ui/react';

import { globalStyles } from '../../theme/styles';

interface IProps {
  onSubmit: any;
  isSubmitting: boolean;
}

const SubmitButton = ({ onSubmit, isSubmitting }: IProps) => {
  const { t } = useTranslation();

  return (
    <Stack spacing={4} mt={5} direction="row" align="center">
      <Button
        bgColor={globalStyles.colors.mainColor}
        color="white"
        onClick={onSubmit}
        isLoading={isSubmitting}
      >
        {t('common.submit')}
      </Button>
    </Stack>
  );
};

export default SubmitButton;
