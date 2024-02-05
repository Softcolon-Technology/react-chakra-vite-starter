import React from "react";
import { Flex, Input } from "@chakra-ui/react";

import SmallFormLabel from "../fields/SmallFormLabel";

interface InputSelectProps {
    label: string;
    value: string;
    handleChange: any;
    name: string;
    type: string;
}

const InputSelect = ({ label, name, value, handleChange, type }: InputSelectProps) => (
        <Flex>
            <SmallFormLabel title={label} />
            <Input type={type} size="sm" h={7} w="13rem" value={value} onChange={handleChange} name={name} />
        </Flex>
    );

export default InputSelect;
