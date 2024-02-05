import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
// custom imports
import { useTranslation } from 'react-i18next';
import { FaSignOutAlt, FaExchangeAlt } from 'react-icons/fa';
// Chakra UI imports
import {
  Box,
  Flex,
  Text,
  Stack,
  Image,
  Avatar,
  VStack,
  HStack,
  Popover,
  useToast,
  PopoverBody,
  PopoverArrow,
  PopoverTrigger,
  PopoverContent,
} from '@chakra-ui/react';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import useProfile from 'src/hooks/ use-profile';

const AuthHeader = ({ open }: any) => {
  const { profile } = useProfile();

  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const toast = useToast();
  const { t } = useTranslation();

  const handleLogout = () => {
    // TokenService.removeUser();
    // navigate('/login');
    // sessionStorage.removeItem('selectedtabadmin');
    // toast({
    //   title: t('messages.logout_success'),
    //   status: 'success',
    //   position: 'top-right',
    //   duration: 2000,
    //   isClosable: true,
    // });
  };

  const handelPageChange = (page: string) => {
    setOpen(false); // Close
    router.push(page);
  };
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px="4"
      position="sticky"
      zIndex={5}
      bg="white"
      _dark={{
        bg: 'gray.900',
      }}
      borderBottomWidth="1px"
      color="inherit"
      h="12"
      pos="fixed"
      top={0}
    >
      {/* <IconButton
                aria-label="Menu"
                display={{
                    base: "inline-flex",
                    lg: "none"
                }}
                justifyContent={"flex-start"}
                icon={}
                size="sm"
            /> */}

      <Box
        display={{
          base: 'inline-flex',
          lg: 'none',
        }}
      >
        <FiMenu color="black" onClick={open} cursor="pointer" />
      </Box>

      <Flex align="center">
        <Stack
          flex={{ base: 1, md: 1 }}
          spacing={{ base: 2, md: 5 }}
          justify="flex-end"
          direction="row"
          alignItems="center"
          _hover={{ cursor: 'pointer' }}
          onClick={() => {
            router.push(paths.dashboard.root);
          }}
        >
          {/* <Box width={"32"}>{t("shokunin_base")}</Box> */}
          <Image src="/assets/images/logo.svg" width="32" />
        </Stack>
      </Flex>

      {/* profile  */}

      <Flex align="center">
        <Stack
          flex={{ base: 1, md: 1 }}
          spacing={{ base: 2, md: 5 }}
          justify="flex-end"
          direction="row"
          alignItems="center"
        >
          <Box>{profile.userName ? profile.userName : ' '}</Box>

          <Popover>
            <PopoverTrigger>
              <Avatar
                size="sm"
                src={profile.profileImage?.url ?? '/assets/images/avatar.png'}
                cursor="pointer"
              />
            </PopoverTrigger>
            <PopoverContent w="96">
              <PopoverArrow />

              <PopoverBody zIndex="10">
                <VStack align="flex-start" zIndex="12">
                  <HStack>
                    <BiUser />
                    <Text onClick={() => handelPageChange('/profile')} cursor="pointer">
                      {t('login.profile')}
                    </Text>
                  </HStack>

                  <HStack>
                    <FaExchangeAlt />
                    <Text onClick={() => handelPageChange('/change-password')} cursor="pointer">
                      {t('login.change_password')}
                    </Text>
                  </HStack>
                  <HStack>
                    <FaSignOutAlt />
                    <Text onClick={handleLogout} cursor="pointer">
                      {t('login.logout')}
                    </Text>
                  </HStack>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default AuthHeader;
