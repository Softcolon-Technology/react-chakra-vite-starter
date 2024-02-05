import { Flex, Text, Switch } from "@chakra-ui/react";

import CustomFormLabel from "./CustomFormLabel";

interface InputsProp {
    label: string;
    isMandatory: boolean;
    name: string;
    handleChange: any;
    error: any;
    touched: any;
    defaultChecked: boolean;
}

const CustomSwitchField = ({ name, touched, handleChange, error, label, isMandatory, defaultChecked }: InputsProp) => (
        <Flex flexDir="column" flex={0.5}>
            <CustomFormLabel label={label} isMandatory={isMandatory} />

            <Switch mb={3} name={name} defaultChecked={defaultChecked} onChange={handleChange} />

            {error && touched && (
                <Text fontSize="sm" mt={1} color="red.300">
                    {error}
                </Text>
            )}
        </Flex>
    );

export default CustomSwitchField;
