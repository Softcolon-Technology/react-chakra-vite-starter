import { useNavigate } from 'react-router-dom';
import { Tab, Text, TabList } from '@chakra-ui/react';

import { tabListProps } from 'src/utils/types/data.types';

interface TabListComponentsProps {
  tabList: any;
}

const TabListComponents = ({ tabList }: TabListComponentsProps) => {
  const navigate = useNavigate();
  return (
    <TabList justifyContent="start">
      {tabList.map((currentTabs: tabListProps) => (
        <Tab
          h={{ lg: '12', xl: '12' }}
          onClick={() => {
            navigate({ search: `?tab=${currentTabs.id}` });
          }}
          key={currentTabs.id}
        >
          <Text fontSize={{ md: 'sm' }} fontWeight="700">
            {currentTabs.label}
          </Text>
        </Tab>
      ))}
    </TabList>
  );
};

export default TabListComponents;
