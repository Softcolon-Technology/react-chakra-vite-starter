import { Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

import { globalStyles } from '../../theme/styles';

interface AddButtonProps {
  handleAdd: any;
  title: string;
}

const AddButton = ({ title, handleAdd }: AddButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button
      bgColor={globalStyles.colors.mainColor}
      color="white"
      leftIcon={<AddIcon />}
      onClick={handleAdd}
      size="sm"
      rounded="md"
    >
      {title}
    </Button>
  );
};

export default AddButton;
