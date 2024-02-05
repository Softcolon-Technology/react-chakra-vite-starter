import { Text, FormLabel } from "@chakra-ui/react";

interface CustomFormLabelProps {
    label: string;
    isMandatory?: boolean;
}

const ContractLable = ({ label, isMandatory }: CustomFormLabelProps) => (
        // <Flex>
        <FormLabel fontWeight="500" w="2xs" backgroundColor="#F9FAFA" mx={0} p={5} mb="0">
            {label}
            {isMandatory && (
                <Text color="red" as="span">
                    *
                </Text>
            )}
        </FormLabel>
        // </Flex>
    );

export default ContractLable;
