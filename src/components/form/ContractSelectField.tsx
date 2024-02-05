import React from 'react';
import Select from 'react-select';
import { Box, Flex, Text } from '@chakra-ui/react';

import ContractFormLabel from './ContractFormLabel';

interface dataProps {
  label: string;
  value: string;
}

interface MySelectProps {
  onChange: any;
  onBlur: any;
  value: any;
  options: Array<dataProps>;
  name: string;
  multi: boolean;
  error: any;
  touched: any;
  label: string;
  isMandatory: boolean;
}

interface managerdataProps {
  userName: string;
  _id: string;
  email: string;
}

const ContractSelectField = ({
  onChange,
  onBlur,
  value,
  options,
  name,
  multi,
  label,
  isMandatory,
  touched,
  error,
}: MySelectProps) => {
  const handleChange = (newValue: any) => {
    onChange(name, newValue);
  };

  const handleBlur = () => {
    onBlur(name, true);
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      width: 'var(--chakra-sizes-full)',
      outline: '2px solid transparent',
      borderRadius: 'var(--chakra-radii-md)',
      border: `1.5px solid ${error && touched ? '#fc8181' : '#d6d6d6'} `,
      minHeight: 'var(--chakra-sizes-10)',

      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided: any, state: any) => ({
      ...provided,
      padding: '0 6px',
    }),
    menu: (provied: any, state: any) => ({
      ...provied,
      zIndex: 9,
    }),

    input: (provided: any, state: any) => ({
      ...provided,
      margin: '0px',
      fontSize: 'var(--chakra-fontSizes-md)',
      fontWeight: 400,
    }),
    indicatorSeparator: (state: any) => ({
      display: 'none',
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      // height: "28px"
    }),
  };
  return (
    <Flex borderTop="1px solid #E0E0E0" borderBottom="1px solid #E0E0E0" alignItems="center">
      <ContractFormLabel isMandatory={isMandatory} label={label} />

      <Box ps={5} w="lg">
        <Select
          options={options}
          isMulti={multi}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          styles={customStyles}
          placeholder=""
          // className={error && touched && "border-red"}
        />
        {error && touched && (
          <Text fontSize="sm" mt={1} color="red.300">
            {error && error.value ? error.value : error}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default ContractSelectField;
