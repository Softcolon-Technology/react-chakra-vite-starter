import React, { FC, useState } from 'react';
// Icon
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {
  Box,
  Text,
  Input,
  FormLabel,
  InputGroup,
  FormControl,
  InputRightElement,
} from '@chakra-ui/react';

import { globalStyles } from '../../theme/styles';

interface CustomPasswordFieldProps {
  label: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: any;
  touched: any;
  isMandatory: boolean;
}

const CustomPasswordField: FC<CustomPasswordFieldProps> = ({
  label,
  name,
  value,
  handleChange,
  handleBlur,
  errors,
  touched,
  isMandatory,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <FormLabel>
        {label}
        {isMandatory && (
          <Text color="red" as="span">
            *
          </Text>
        )}
      </FormLabel>
      <InputGroup size="md">
        <Input
          name={name}
          _focus={{ borderColor: globalStyles.colors.mainColor }}
          type={show ? 'text' : 'password'}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={!!(errors && touched)}
          errorBorderColor="red.300"
          onFocus={handleBlur}
        />
        <InputRightElement width="4.5rem">
          {show ? (
            <Box onClick={handleClick} cursor="pointer">
              <AiFillEye size="22" />
            </Box>
          ) : (
            <Box onClick={handleClick} cursor="pointer">
              <AiFillEyeInvisible size="22" />
            </Box>
          )}
        </InputRightElement>
      </InputGroup>

      {errors && touched && (
        <Text fontSize="sm" mt={1} color="red.300">
          {errors}
        </Text>
      )}
    </FormControl>
  );
};

export default CustomPasswordField;
