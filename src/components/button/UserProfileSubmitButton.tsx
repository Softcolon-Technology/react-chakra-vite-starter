import React from 'react';
import { Button } from '@chakra-ui/react';

import { globalStyles } from '../../theme/styles';

interface AddButtonProps {
  title: string;
  mode?: any;
  handleDisabled?: any;
}

const UserProfileSubmitButton = ({ title, mode, handleDisabled }: AddButtonProps) => (
  <Button
    isDisabled={handleDisabled}
    type="submit"
    size="sm"
    w="40"
    borderRadius="4"
    py="5"
    fontWeight="500"
    transition="0.3s all"
    bg={globalStyles.colors.mainColor}
    _hover={{ bg: '#74b4e8', opacity: 0.8 }}
    onClick={() => mode()}
  >
    {title}
  </Button>
);

export default UserProfileSubmitButton;
