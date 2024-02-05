import { Box, Text, useColorModeValue } from '@chakra-ui/react';

import Card from './Card';
import MiniLoader from '../loader/MiniLoader';

export interface StatisticsCardProps {
  _id: number;
  isLoading: boolean;
  title: string;
  value: string;
  isTarget?: boolean;
  isValuePending?: boolean;
  handleAdd?: () => void;
}

const StatisticsCard = ({
  _id,
  isLoading,
  title,
  value,
  isTarget,
  isValuePending,
  handleAdd,
}: StatisticsCardProps) => {
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  const bg = useColorModeValue('white', 'navy.700');

  return (
    <Card
      bg={bg}
      onClick={() => {
        if (isTarget && handleAdd) {
          handleAdd();
        }
      }}
      cursor={isTarget ? 'pointer' : 'default'}
      px={4}
      py={2}
    >
      <Box>
        <Text fontWeight="500" color={textColorSecondary} fontSize="sm" as="h3">
          {isTarget && (
            <Text fontWeight="500" color="red" fontSize="sm" as="span">
              【目標】
            </Text>
          )}
          {title}
        </Text>

        {isLoading ? (
          <MiniLoader />
        ) : (
          <Text color={textColorPrimary} fontWeight="500" fontSize="md">
            {value}
          </Text>
        )}
      </Box>
    </Card>
  );
};

export default StatisticsCard;
