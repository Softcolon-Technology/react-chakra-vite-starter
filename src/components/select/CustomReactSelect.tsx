import React from "react";
import Select from "react-select";
import { Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface DynamicSelectPorps {
    name: string;
    value: string;
    handleChange: any;
    datas?: any;
}

const DynamicSelect = ({ name, value, handleChange, datas }: DynamicSelectPorps) => {
    const { t } = useTranslation();

    const customStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            background: "#fff",
            borderColor: "2px solid transparent",
            // minHeight: "28px",
            height: "28px",
            width: "37em",
            // minWidth: "18em",
            // maxWidth: "30em",
            boxShadow: state.isFocused ? null : null
        }),

        valueContainer: (provided: any, state: any) => ({
            ...provided,
            height: "28px",
            padding: "0 6px"
        }),

        input: (provided: any, state: any) => ({
            ...provided,
            margin: "0px",
            fontSize: "0.8rem"
        }),
        indicatorSeparator: (state: any) => ({
            display: "none"
        }),
        indicatorsContainer: (provided: any, state: any) => ({
            ...provided,
            height: "28px"
        })
    };

    return (
        <Flex alignItems="center" flex={0.5} w="full">
            {/* <Select
                placeholder={String(t("contract.all"))}
                w={"13rem"}
                h={"1.8rem"}
                value={value}
                onChange={handleChange}
                name={name}
            >
                {values.map((value) => {
                    return <option value={value}>{value}</option>;
                })}
                {datas.map((val: any) => (
                    <option value={val.value} key={val.value}>
                        {t(`status.${val.label}`)}
                    </option>
                ))}

            </Select> */}

            <Select
                onChange={handleChange}
                // isMulti
                name={name}
                placeholder={String(t("contract.all"))}
                styles={customStyles}
                isSearchable
                options={datas}
            />
        </Flex>
    );
};

export default DynamicSelect;
