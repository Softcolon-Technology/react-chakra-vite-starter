import React from "react";
import { Box, Flex, Text, FormLabel, NumberInput, NumberInputField } from "@chakra-ui/react";

import { globalStyles } from "../../theme/styles";

interface CustomNumberInputFieldProps {
    values?: any;
    handleChange?: any;
    handleBlur?: any;
    isMandatory?: any;
    label?: any;
    errors?: any;
    touched?: any;
    name?: any;
}

const ContractNumberField = ({
    values,
    handleChange,
    handleBlur,
    isMandatory,
    label,
    errors,
    touched,
    name
}: CustomNumberInputFieldProps) => (
        <Flex borderTop="1px solid #E0E0E0" borderBottom="1px solid #E0E0E0" alignItems="center">
            <FormLabel fontWeight="500" p={5} w="2xs" backgroundColor="#F9FAFA" m="0">
                {label}
                {isMandatory && (
                    <Text color="red" as="span">
                        *
                    </Text>
                )}
            </FormLabel>

            <Box width="lg" ps="5">
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
                >
                    <NumberInputField
                        borderColor="#D6D6D6"
                        _focus={{ borderColor: globalStyles.colors.mainColor }}
                        _placeholder={{ color: "gray" }}
                        min={1}
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
            </Box>
        </Flex>
    );

export default ContractNumberField;
