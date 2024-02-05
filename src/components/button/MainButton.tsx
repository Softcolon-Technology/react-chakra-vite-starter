import { Button } from '@chakra-ui/react';

import { globalStyles } from '../../theme/styles';

interface MainButtonProps {
  handleClick: any;
  title: string;
}

const MainButton = ({ handleClick, title }: MainButtonProps) => (
  <Button
    size="md"
    fontWeight="500"
    w="44"
    rounded="md"
    onClick={handleClick}
    fontSize="md"
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

export default MainButton;
