import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { DatePicker, CustomProvider } from 'rsuite';

import languageSupport from 'src/utils/languageSupport';

import ContractFormLabel from '../form/ContractFormLabel';

const dateFormat = 'yyyy/MM/dd';

interface CustomDatePickerProps {
  label: string;
  value: any;
  onChange: any;
  isMandatory: boolean;
  errors: any;
  touched: any;
  handleBlur: any;
  minDate?: any;
  name: string;
  setFieldTouched: any;
  setFieldValue: any;
  placeHolder: any;
  placement?: any;
  endDate?: any;
}

const CustomDatePicker = ({
  label,
  value,
  onChange,
  isMandatory,
  errors,
  touched,
  handleBlur,
  minDate,
  name,
  setFieldTouched,
  setFieldValue,
  placeHolder,
  placement,
  endDate,
}: CustomDatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <Flex borderTop="1px solid #E0E0E0" borderBottom="1px solid #E0E0E0" alignItems="center">
      <ContractFormLabel isMandatory={isMandatory} label={label} />

      <Box width="lg" ps="5">
        <CustomProvider locale={languageSupport}>
          <DatePicker
            style={{ width: '100%', height: 'var(--chakra-sizes-10)' }}
            format={dateFormat}
            // oneTap
            className={value == null ? 'r-suit-date-picker' : 'no-value-date-picker'}
            name={name}
            // onFocus={(e: any) => e.target.blur()}
            size="lg"
            value={value}
            onChangeCalendarDate={(date) => setFieldValue(name, date)}
            onChange={(date) => setFieldValue(name, date)}
            onBlur={() => setFieldTouched(name, true, true)}
            placement={placement}
            placeholder="yyyy/mm/dd"
          />
        </CustomProvider>

        {/* <ReactDatePicker
                    wrapperClassName="datePickerWrapper"
                    dateFormat="yyyy/MM/dd"
                    className={`custom-date-picker datePicker ${errors && touched ? "border-red" : ""}`}
                    name={name}
                    minDate={minDate}
                    selected={value}
                    onChange={(date: Date) => {
                        onChange(date);
                    }}
                    onChangeRaw={() => {
                        setFieldTouched(name, true, true);
                    }}
                    isClearable
                    onBlur={handleBlur}
                    locale={"ja"}
                /> */}
        {errors && touched && (
          <Text fontSize="sm" mt={1} color="red.300">
            {isMandatory ? `${label}必要` : errors}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default CustomDatePicker;
