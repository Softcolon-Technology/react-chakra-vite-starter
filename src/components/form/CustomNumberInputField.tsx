import React from "react";
import { Flex, Text, FormLabel, NumberInput, NumberInputField } from "@chakra-ui/react";

import { globalStyles } from "../../theme/styles";

interface CustomNumberInputFieldProps {
    values?: any;
    handleChange?: any;
    handleBlur?: any;
    isMandatory?: any;
    label?: any;
    errors?: any;
    touched?: any;
    name: string;
    isDisabled: boolean;
}

const CustomNumberInputField = ({
    values,
    handleChange,
    handleBlur,
    isMandatory,
    label,
    errors,
    touched,
    name,
    isDisabled
}: CustomNumberInputFieldProps) => (
        <Flex flexDir="column" flex={0.5}>
            <FormLabel fontWeight="bold">
                {label}
                {isMandatory && (
                    <Text color="red" as="span">
                        *
                    </Text>
                )}
            </FormLabel>
            <NumberInput
                borderColor="#D6D6D6"
                size="md"
                _focus={{ borderColor: globalStyles.colors.mainColor }}
                _placeholder={{ color: "gray" }}
                min={1}
                name={name}
                value={values}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={errors && touched}
                errorBorderColor="red.300"
                isDisabled={isDisabled}
            >
                <NumberInputField
                    borderColor="#D6D6D6"
                    _focus={{ borderColor: globalStyles.colors.mainColor }}
                    _placeholder={{ color: "gray" }}
                    min={1}
                    minLength={1}
                    // maxLength={4}
                    name={name}
                    value={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </NumberInput>

            {errors && touched && (
                <Text fontSize="sm" mt={1} color="red.300">
                    {errors}
                </Text>
            )}
        </Flex>
    );

export default CustomNumberInputField;
