import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
  handleDelete: any;
  isLoading: boolean;
}

const ConfirmButton = ({ handleDelete, isLoading }: ButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button colorScheme="red" onClick={handleDelete} isLoading={isLoading}>
      {t('common.delete')}
    </Button>
  );
};

export default ConfirmButton;
