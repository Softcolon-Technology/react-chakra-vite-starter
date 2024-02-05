/* eslint-disable consistent-return */
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoadingBar from 'react-top-loading-bar';
import { useState, useEffect, ReactNode } from 'react';
// chakra
import {
  Box,
  Flex,
  Text,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  DrawerCloseButton,
  useBreakpointValue,
} from '@chakra-ui/react';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import useAuth from 'src/hooks/use-auth';

import { NAV_ITEMS } from 'src/utils/SidebarConstant';

import Accordian from 'src/pages/dashboard/master-admin/components/Accordian';

import { globalStyles } from '../theme/styles';
// custom
import AuthHeader from '../components/header/AuthHeader';

interface NavItemProps {
  path: string;
  icon: any;
  label: string;
  setProgress: any;
  onClose: any;
  getSidebarData: any;
}

const NavItem = ({ path, icon, label, setProgress, onClose, getSidebarData }: NavItemProps) => {
  const currentTab = window.location.pathname;
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Flex
      align="center"
      px="2.5"
      py="3"
      role="group"
      fontWeight="semibold"
      transition=".25s all linear"
      bgColor={currentTab?.includes(path) ? globalStyles.colors.mainColor : ''}
      color={currentTab?.includes(path) ? 'white' : ''}
      onClick={() => {
        router.push(path);
        setProgress(100);
        getSidebarData();
        onClose();
      }}
      cursor="pointer"
      css={{
        'svg path': {
          stroke: currentTab?.includes(path) ? 'white' : 'black',
        },
      }}
    >
      {/* { <Icon boxSize="4" as={icon}  />} */}
      {icon && icon(currentTab?.includes(path) ? 'white' : 'black')}

      <Flex w="full" alignItems="center" gap={2}>
        <Text ml={2} fontSize="sm" color={currentTab?.includes(path) ? 'white' : 'black'}>
          {t(label)}
        </Text>
      </Flex>
    </Flex>
  );
};

const SidebarContent = ({
  setExpandSideBar,
  expandSideBar,
  setProgress,
  negotioanData,
  getSidebarData,
  ...props
}: any) => (
  <Box
    as="nav"
    pos="fixed"
    h="-webkit-fill-available"
    left="0"
    zIndex="sticky"
    bg="white"
    borderRightWidth="1px"
    transition=".20s all linear"
    w={expandSideBar ? '40' : '12'}
    {...props}
  >
    <Flex
      direction="column"
      as="nav"
      fontSize="sm"
      aria-label="Main Navigation"
      justifyContent="space-between"
      // h="full"
    >
      <Box>
        {/* NAV_ITEMS */}
        {NAV_ITEMS.map((nav: any) => (
          <NavItem
            key={nav.id}
            icon={nav.icon}
            path={nav.path}
            label={nav.label}
            setProgress={setProgress}
            onClose={props.onClose}
            getSidebarData={getSidebarData}
          />
        ))}
      </Box>
      <Accordian onClose={props.onClose} getSidebarData={getSidebarData} />
    </Flex>
  </Box>
);

interface ProtectedLayoutProps {
  children: ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const { token } = useAuth();

  const [expandSideBar, setExpandSideBar] = useState(true);

  const [progress, setProgress] = useState(0);

  const handleSidebar = () => {
    sessionStorage.setItem('selectedtabadmin', window.location.pathname);
  };

  useEffect(() => {
    if (token) {
      return handleSidebar();
    }
    router.push(paths.auth.login);
    sessionStorage.removeItem('selectedtabadmin');
  }, []);

  const getSidebarData = () => {
    // console.log('getSidebarData');
  };

  useEffect(
    () => () => {
      handleSidebar();
    },
    [router]
  );

  return (
    <Box pos="relative">
      <LoadingBar
        color={globalStyles.colors.mainColor}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />
      <AuthHeader open={onOpen} />
      <Box mt={12}>
        <Box>
          {/* sidebar which will be seen after lg breakpoint */}
          <SidebarContent
            display={{
              base: 'none',
              lg: 'unset',
            }}
            setExpandSideBar={setExpandSideBar}
            expandSideBar={expandSideBar}
            onClose={onClose}
            setProgress={setProgress}
            getSidebarData={getSidebarData}
          />
          {/* drawer for sm and md screen */}
          <Drawer isOpen={isOpen} onClose={onClose} placement="left">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <SidebarContent
                w="full"
                borderRight="none"
                onClose={onClose}
                display={{ base: 'inline-block', lg: 'none' }}
                setProgress={setProgress}
              />
            </DrawerContent>
          </Drawer>
          <Box
            ml={useBreakpointValue({
              base: '0',
              lg: expandSideBar ? '40' : '12',
            })}
            transition=".20s all linear"
            px="4"
            h="95vh"
            bg="#f4f7fe"
            overflowY="scroll"
            pb={10}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
      <Box
        ml={useBreakpointValue({ base: '0', lg: expandSideBar ? '40' : '12' })}
        transition=".20s all linear"
        position="absolute"
        width="full"
        bottom={0}
      >
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};

export default ProtectedLayout;
