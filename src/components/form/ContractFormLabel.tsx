import { Text, FormLabel } from "@chakra-ui/react";

interface ContractFormLabelProps {
    label: string;
    isMandatory: boolean;
}

const ContractFormLabel = ({ label, isMandatory }: ContractFormLabelProps) => (
        <FormLabel fontWeight="500" p={5} w="2xs" backgroundColor="#F9FAFA" m="0">
            {label}
            {isMandatory && (
                <Text color="red" as="span">
                    *
                </Text>
            )}
        </FormLabel>
    );

export default ContractFormLabel;
