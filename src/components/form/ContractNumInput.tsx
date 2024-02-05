import { Box, Flex, Text, NumberInput, NumberInputField } from "@chakra-ui/react";

import { globalStyles } from "../../theme/styles";
import ContractFormLabel from "./ContractFormLabel";

interface ContractNumberInputProps {
    label: string;
    isMandatory: boolean;
    values: any;
    name: string;
    handleChange: any;
    handleBlur: any;
    errors: any;
    touched: any;
    minLength?: number;
    maxLength?: number;
}

const ContractNumInput = ({
    label,
    isMandatory,
    values,
    name,
    handleChange,
    handleBlur,
    errors,
    touched,
    minLength,
    maxLength
}: ContractNumberInputProps) => (
        <Flex borderTop="1px solid #E0E0E0" borderBottom="1px solid #E0E0E0" alignItems="center">
            <ContractFormLabel isMandatory={isMandatory} label={label} />

            <Box width="lg" ps="5">
                <NumberInput
                    borderColor="#D6D6D6"
                    size="md"
                    _focus={{ borderColor: globalStyles.colors.mainColor }}
                    _placeholder={{ color: "gray" }}
                    min={0}
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
                        name={name}
                        value={values}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        minLength={minLength}
                        maxLength={maxLength}
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

export default ContractNumInput;
