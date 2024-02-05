import { Box, Flex } from '@chakra-ui/react';
import { ImCancelCircle } from 'react-icons/im';

interface AddButtonProps {
  title: string;
  mode?: any;
  setMode: any;
}

const CancelEditButton = ({ title, mode, setMode }: AddButtonProps) => (
  <Flex justifyContent="flex-end">
    <Box
      onClick={() => {
        setMode(!mode);
      }}
      position="absolute"
      cursor="pointer"
      w="10"
      h="10"
      bg="none"
      mt={-4}
      mr={-7}
      color="#ee5d50"
      _hover={{ bg: 'red', color: 'white' }}
      transition="0.3s all"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderTopRightRadius="lg"
    >
      <ImCancelCircle fontSize="20" />
    </Box>
  </Flex>
);

export default CancelEditButton;
