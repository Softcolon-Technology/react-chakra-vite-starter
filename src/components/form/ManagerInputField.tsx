import React from "react";
import { Flex, Text, Select, FormLabel } from "@chakra-ui/react";

interface InputProps {
    name: string;
    value: string;
    handleChange: any;
    handleBlur: any;
    error: any;
    touched: any;
    label: string;
    isMandatory: boolean;
    datas: Array<managerdataProps>;
    defaultChecked? : any;
}

interface managerdataProps {
    userName: string;
    _id: string;
    email: string;
}

const ManagerInputField = ({
    name,
    value,
    handleBlur,
    handleChange,
    error,
    touched,
    label,
    isMandatory,
    datas,
    defaultChecked
}: InputProps) => (
        <Flex flexDir="column" flex={0.5}>
            <FormLabel fontWeight="bold">
                {label}
                {isMandatory && (
                    <Text color="red" as="span">
                        *
                    </Text>
                )}
            </FormLabel>
            <Select
                placeholder={label}
                onChange={handleChange}
                onBlur={handleBlur}
                name={name}
                defaultChecked={defaultChecked?? ""}
                value={value}
                errorBorderColor="red.300"
                isInvalid={error && touched}
            >
                {datas.map((data: managerdataProps) => (
                    <option value={data._id} key={data._id}>
                        {data.userName ? data.userName : data.email}
                    </option>
                ))}
            </Select>
            {error && touched && (
                <Text fontSize="sm" mt={1} color="red.300">
                    {error}
                </Text>
            )}
        </Flex>
    );

export default ManagerInputField;
