import { Text, FormLabel } from "@chakra-ui/react";

interface CustomFormLabelProps {
    label: string;
    isMandatory?: boolean;
}

const CustomFormLabel = ({ label, isMandatory }: CustomFormLabelProps) => (
        <FormLabel fontWeight="bold">
            {label}
            {isMandatory && (
                <Text color="red" as="span">
                    *
                </Text>
            )}
        </FormLabel>
    );

export default CustomFormLabel;
