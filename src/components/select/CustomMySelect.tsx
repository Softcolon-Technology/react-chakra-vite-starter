import React from 'react';
import Select from 'react-select';
import { Box } from '@chakra-ui/react';

import SmallFormLabel from '../fields/SmallFormLabel';

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
  label?: string;
}

const MySelect = ({ onChange, onBlur, value, options, name, multi, label }: MySelectProps) => {
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
      borderColor: '2px solid transparent',
      minHeight: '28px',
      // height: "15px",
      width: '13rem',
      // minWidth: "18em",
      // maxWidth: "30em",
      height: 'var(--chakra-sizes-7)',
      boxShadow: state.isFocused ? null : null,
      fontWeight: 400,
      color: 'black',
      fontSize: 'var(--chakra-fontSizes-sm)',
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      height: '28px',
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      height: '28px',
      margin: '0px',
      fontWeight: 400,
      color: 'black',
      fontSize: 'var(--chakra-fontSizes-sm)',
      marginBottom: '-0.3rem',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      fontWeight: 400,
      color: 'black',
      fontSize: 'var(--chakra-fontSizes-sm)',
    }),
    indicatorSeparator: (state: any) => ({
      display: 'none',
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      height: '28px',
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      zIndex: 99,
    }),
  };

  return (
    <Box flexDir="row">
      {label && <SmallFormLabel title={label} />}
      <Select
        styles={customStyles}
        options={options}
        isMulti={multi}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        placeholder=""
      />
    </Box>
  );
};

export default MySelect;
