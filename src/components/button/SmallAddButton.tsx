import { Button } from '@chakra-ui/react';

import { globalStyles } from '../../theme/styles';

interface ButtonProps {
  handleClick: any;
  title: string;
}
const SmallAddButton = ({ handleClick, title }: ButtonProps) => (
  <Button
    size="sm"
    fontWeight="500"
    w="full"
    rounded="md"
    onClick={handleClick}
    fontSize="sm"
    bg={globalStyles.colors.mainColor}
    _hover={{
      bgColor: globalStyles.colors.mainColor,
      opacity: 0.8,
    }}
    color="white"
  >
    {title}
  </Button>
);

export default SmallAddButton;
