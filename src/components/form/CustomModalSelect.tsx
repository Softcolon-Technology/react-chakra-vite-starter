import React from 'react';
import Select from 'react-select';
import { Box } from '@chakra-ui/react';

interface dataProps {
  label: string;
  value: string | boolean;
}

interface MySelectProps {
  onChange: any;
  onBlur?: any;
  value: any;
  options: Array<dataProps>;
  name: string;
  multi: boolean;
  errors: any;
  touched: any;
}

const ModalSelect = ({
  onChange,
  onBlur,
  value,
  options,
  name,
  multi,
  errors,
  touched,
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
      background: '#fff',
      border: `${errors && touched ? '2px solid #FC8181' : '1px solid #d6d6d6'}`,

      height: '40px',
      width: '25em',

      boxShadow: state.isFocused ? null : null,
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      height: '28px',
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      height: '28px',
      margin: '0px',
      fontSize: '0.8rem',
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
    <Box flexDir="row">
      {/* <SmallFormLabel title={label} /> */}
      <Select
        styles={customStyles}
        options={options}
        isMulti={multi}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </Box>
  );
};

export default ModalSelect;
