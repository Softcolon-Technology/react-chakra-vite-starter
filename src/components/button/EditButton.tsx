import { Flex, Button } from '@chakra-ui/react';

interface AddButtonProps {
  title: string;
  mode?: any;
}

const EditButton = ({ title, mode }: AddButtonProps) => (
  <Flex justifyContent="flex-end">
    <Button
      type="submit"
      fontWeight="bold"
      rounded="lg"
      w={28}
      size="sm"
      colorScheme="teal"
      variant="outline"
      display="flex"
      gap="2"
      onClick={() => mode()}
    >
      {title}
    </Button>
  </Flex>
);

export default EditButton;
