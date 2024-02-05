import { Box, Flex, Text, Input } from "@chakra-ui/react";

import { globalStyles } from "../../theme/styles";
import ContractFormLabel from "./ContractFormLabel";

interface InputsProp {
    placehold?: any;
    Type?: any;
    name?: any;
    values?: any;
    handleChange?: any;
    handleBlur?: any;
    errors?: any;
    touched?: any;
    label?: any;
    isMandatory?: any;
    min?: string;
    isRequiredError?: boolean;
    pattern?: string;
}

const ContractInput = ({
    placehold,
    Type,
    name,
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    label,
    isMandatory,
    min,
    isRequiredError,
    pattern
}: InputsProp) => (
        <Flex borderTop="1px solid #E0E0E0" borderBottom="1px solid #E0E0E0" alignItems="center">
            <ContractFormLabel isMandatory={isMandatory} label={label} />

            <Box width="lg" ps="5">
                <Input
                    _focus={{ borderColor: globalStyles.colors.mainColor }}
                    border="1px solid #D6D6D6"
                    type={Type}
                    name={name}
                    // placeholder={placehold}
                    _placeholder={{ color: "gray" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values}
                    min={min ?? new Date().toISOString().split("T")[0]}
                    isInvalid={errors && touched}
                    errorBorderColor="red.300"
                    pattern={pattern}
                    textTransform={Type === "email" ? "lowercase" : "none"}
                />
                {errors && touched && (
                    <Text fontSize="sm" mt={1} color="red.300">
                        {isRequiredError ? `${label  }必要` : errors}
                    </Text>
                )}
            </Box>
        </Flex>
    );

export default ContractInput;
