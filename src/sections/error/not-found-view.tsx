import { useTranslation } from 'react-i18next';
import { Flex, Text, Button } from '@chakra-ui/react';

import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export default function NotFoundView() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Flex direction="column" height="100vh" alignItems="center" justifyContent="center" gap={2}>
      <Text> {t('messages.404error')}</Text>
      <Button bg="blue.500" color="gray.50" onClick={() => router.back()}>
        {t('common.return')}
      </Button>
    </Flex>
  );
}
