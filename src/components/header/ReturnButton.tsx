import { BiArrowBack } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';

import { useRouter } from 'src/routes/hooks';

import MainHeading from './MainHeading';

interface returnprops {
  navigatetitle: string;
  title: string;
  mt?: number;
  handleclick?: any;
  textTitle?: any;
  bottomTitle?: any;
  isBackNavigate?: boolean;
}

const ReturnButton = ({
  navigatetitle,
  textTitle,
  title,
  mt,
  handleclick,
  bottomTitle,
  isBackNavigate,
}: returnprops) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Box _hover={{ cursor: 'pointer' }} zIndex={4} mt={2} display="flex" alignItems="center">
      <Icon
        as={BiArrowBack}
        size={30}
        color="gray"
        zIndex="10"
        onClick={() => {
          if (isBackNavigate) {
            router.back();
          } else {
            router.push(navigatetitle);
          }
        }}
        cursor="pointer"
      />

      <Flex flexDir="column" zIndex="10">
        <Text
          mb={-2}
          ml={2}
          fontSize="xs"
          color="gray"
          onClick={() => {
            if (isBackNavigate) {
              router.back();
            } else {
              router.push(navigatetitle);
            }
          }}
        >
          {textTitle}
        </Text>
        <MainHeading handleclick={navigatetitle} title={title} mt={mt || 1} />
        {bottomTitle && (
          <Text
            mb={-2}
            ml={2}
            fontSize="xs"
            color="gray"
            onClick={() => {
              if (isBackNavigate) {
                router.back();
              } else {
                router.push(navigatetitle);
              }
            }}
          >
            {bottomTitle}
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default ReturnButton;
