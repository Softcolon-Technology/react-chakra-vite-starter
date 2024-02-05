import { useTranslation } from 'react-i18next';
import { Flex, Button } from '@chakra-ui/react';

interface IProps {
  isSubmitting: boolean;
  onClick?: any;
  handleDisabled?: any;
}

const SaveButton = ({ isSubmitting, onClick, handleDisabled }: IProps) => {
  const { t } = useTranslation();

  return (
    <Flex w="full" justifyContent="center" alignItems="center">
      <Button
        isDisabled={handleDisabled}
        type="submit"
        onClick={onClick}
        fontWeight="700"
        fontSize="lg"
        mt={5}
        mb={5}
        w="10em"
        rounded="md"
        bgColor="#4299E1"
        _hover={{ opacity: 0.8 }}
        color="#FFFFFF"
        isLoading={isSubmitting}
      >
        {t('common.save')}
      </Button>
    </Flex>
  );
};

export default SaveButton;
