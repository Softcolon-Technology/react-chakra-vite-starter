import React from 'react';
import { DatePicker, CustomProvider } from 'rsuite';

import languageSupport from 'src/utils/languageSupport';

const dateFormat = 'yyyy/MM/dd';

interface RsuitDatePickerProps {
  setFieldValue: any;
  value: any;
  name: any;
  placeHolder?: string;
  setFieldTouched?: any;
  setDate?: any;
}

const RsuitDatePicker = ({
  setFieldValue,
  setDate,
  value,
  name,
  placeHolder,
  setFieldTouched,
}: RsuitDatePickerProps) => (
  <CustomProvider locale={languageSupport}>
    <DatePicker
      style={{ width: '100%', height: 'var(--chakra-sizes-7)' }}
      format={dateFormat}
      // oneTap
      className={
        value == null ? 'r-suit-date-picker single-picker' : 'no-value-date-picker single-picker'
      }
      name={name}
      // onFocus={(e: any) => e.target.blur()}
      size="lg"
      value={value}
      onChangeCalendarDate={(date) => setFieldValue(name, date)}
      onChange={(date) => {
        setFieldValue(name, date);
        setDate(date);
      }}
      onBlur={() => setFieldTouched(name, true, true)}
      placeholder={placeHolder}
    />
  </CustomProvider>
);

export default RsuitDatePicker;
