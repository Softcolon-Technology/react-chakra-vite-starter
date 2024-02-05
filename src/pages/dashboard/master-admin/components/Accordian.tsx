import { FaUserLock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Icon,
  Stack,
  Button,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from '@chakra-ui/react';

import { useRouter, usePathname } from 'src/routes/hooks';

import { INavItem, MASTER_ADMIN_NAV_ITEMS } from 'src/utils/SidebarConstant';

import { globalStyles } from 'src/theme/styles';

const Accordian = ({ onClose, getSidebarData }: { onClose: any; getSidebarData: any }) => {
  const router = useRouter();
  const { t } = useTranslation();

  const pathname = usePathname();

  return (
    <Accordion allowToggle color="white" defaultIndex={[0]}>
      <AccordionItem border="0">
        <h2>
          <AccordionButton
            px="2.5"
            py={3}
            bg="white"
            color="black"
            _hover={{ bg: globalStyles.colors.mainColor, color: 'white' }}
          >
            <Box as="span" flex="1" textAlign="left" display="flex" fontWeight="bold" fontSize="14">
              <Box>
                {/* <RiAdminFill style={{ marginRight: "8", display: "flex", alignItems: "center", fontSize : "18"}}/> */}
                {/* マスター管理者 */}
                <Icon as={FaUserLock} w={4} h={4} mr={2} />
              </Box>
              {t('master_mgmt.master_management')}
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={2} px="0" borderBottom="0" background="white" py="0">
          <Stack direction="column" border="none">
            {MASTER_ADMIN_NAV_ITEMS.map((item: INavItem) => (
              <Button
                bg={pathname.includes(item.label) ? globalStyles.colors.mainColor : 'white'}
                onClick={() => {
                  router.push(item.path);
                  onClose();
                  getSidebarData();
                }}
                fontWeight="500"
                color={pathname.includes(item.label) ? 'white' : 'black'}
                borderRadius="0"
                w="full"
                p="0"
                display="flex"
                justifyContent="start"
                px={2.5}
                py={3}
                key={item.id}
                fontSize="14"
                _hover={{ bg: globalStyles.colors.mainColor, color: 'white' }}
                _focus={{ bg: globalStyles.colors.mainColor, color: 'white' }}
                mt="0"
              >
                {t(`common.${item.label}`)}
              </Button>
            ))}
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordian;
