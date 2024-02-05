import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { Flex, Text, Icon } from '@chakra-ui/react';

const ReturnButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <Flex gap={2} alignItems="center" my={2} onClick={handleReturn} cursor="pointer">
      <Icon as={RxDoubleArrowLeft} />
      <Text>{t('common.return')}</Text>
    </Flex>
  );
};

export default ReturnButton;
