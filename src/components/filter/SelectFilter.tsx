import React from "react";
import { useTranslation } from "react-i18next";
import { Flex, Text, Select } from "@chakra-ui/react";

interface selectprop {
    text: string;
    value1?: string;
    value2?: string;
    value3?: string;
    datas?: any;
    name?: any;
    handleChange: any;
    value?: any;
}

const SelectFilter = ({ text, name, value1, value2, value3, datas, handleChange, value }: selectprop) => {
    const { t } = useTranslation();
    return (
        <Flex my={3}>
                <Text fontSize="sm" flex={1} whiteSpace="nowrap" mt={1}>
                    {text}
                </Text>
                <Select
                    size="sm"
                    flex={1.17}
                    w="50%"
                    placeholder={String(t("contract.all"))}
                    name={name}
                    value={value}
                    onChange={handleChange}
                >
                    {datas.map((val: any) => (
                        <option value={val.value} key={val.value}>
                            {t(`status.${val.label}`)}
                        </option>
                    ))}
                </Select>
            </Flex>
    );
};

export default SelectFilter;
