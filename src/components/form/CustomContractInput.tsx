import React from 'react';
import { Flex, Text, Input } from '@chakra-ui/react';

interface InputsProp {
  placehold?: any;
  Type?: any;
  name?: any;
  values?: any;
  handleChange?: any;
  handleBlur?: any;
  error?: any;
  touched?: any;
}

const CustomInputField = ({
  placehold,
  Type,
  name,
  values,
  handleBlur,
  handleChange,
  error,
  touched,
}: InputsProp) => (
  <Flex flexDir="column" flex={0.5}>
    <Input
      w="md"
      border="1px solid #D6D6D6"
      type={Type}
      name={name}
      placeholder={placehold}
      _placeholder={{ color: 'gray' }}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values}
      isInvalid={error && touched}
      errorBorderColor="red.300"
      textTransform={Type === 'email' ? 'lowercase' : 'none'}
    />
    {error && touched && (
      <Text fontSize="sm" mt={1} color="red.300">
        {error}
      </Text>
    )}
  </Flex>
);

export default CustomInputField;
