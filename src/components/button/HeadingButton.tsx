import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { useRouter } from 'src/routes/hooks';

import MainButton from './MainButton';

interface HeadingProps {
  path?: any;
}

const HeadingButtonRight = ({ path }: HeadingProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Box py={3} display="flex" justifyContent="space-between" alignItems="center">
      <MainButton title={t('common.new_addition')} handleClick={() => router.push(path)} />
    </Box>
  );
};

export default HeadingButtonRight;
