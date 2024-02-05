import React from 'react';
import { Flex } from '@chakra-ui/react';
import { CustomProvider, DateRangePicker } from 'rsuite';

import languageSupport from 'src/utils/languageSupport';

import SmallFormLabel from '../fields/SmallFormLabel';

interface RsuiteDateRangeProps {
  setStartDate: any;
  setEndDate: any;
  title: string;
  value: any;
}

const RsuiteDateRange = ({ setStartDate, setEndDate, title, value }: RsuiteDateRangeProps) => (
  <Flex fontSize="sm" alignItems={{ base: 'flex-start', md: 'center' }}>
    <SmallFormLabel title={title} />
    <CustomProvider locale={languageSupport}>
      <DateRangePicker
        value={value}
        ranges={[]}
        format="yyyy/MM/dd"
        style={{ width: '13rem', height: 'var(--chakra-sizes-7)' }}
        className={
          value[0] == null && value[1] == null ? 'r-suit-date-picker' : 'no-value-date-picker'
        }
        onChange={(date: any) => {
          setStartDate(date[0]);
          setEndDate(date[1]);
        }}
        cleanable
        showOneCalendar
        placement="bottom"
        placeholder="yyyy/mm/dd ~ yyyy/mm/dd"
      />
    </CustomProvider>
  </Flex>
);

export default RsuiteDateRange;
