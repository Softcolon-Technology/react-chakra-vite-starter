import ja from "date-fns/locale/ja";
import ReactDatePicker from "react-datepicker";
import { Flex, Text, FormLabel } from "@chakra-ui/react";

// import CustomLabel from "./CustomLabel";

interface CustomDatePickerProps {
    label: string;
    value: any;
    onChange: any;
    isMandatory?: boolean;
    errors: any;
    touched: any;
    handleBlur: any;
    name: string;
    setFieldTouched?: any;
    placeHolder?: string;
}

const CustomMonthPicker = ({
    label,
    value,
    onChange,
    isMandatory,
    errors,
    touched,
    handleBlur,
    name,
    setFieldTouched,
    placeHolder
}: CustomDatePickerProps) => (
        <Flex flexDir="column" flex={0.5}>
            <FormLabel fontWeight="bold">
                {label}
                {isMandatory && (
                    <Text color="red" as="span">
                        *
                    </Text>
                )}
            </FormLabel>

            <Flex gap={4} alignItems="center" justifyContent="start" w="full" flexDir="column">
                <ReactDatePicker
                    dateFormat="yyyy年M月"
                    className={`custom-month-picker ${errors && touched ? "border-red" : ""}`}
                    name={name}
                    selected={value}
                    onChange={(date: Date) => {
                        onChange(date);
                    }}
                    autoComplete="off"
                    showMonthYearPicker
                    placeholderText={placeHolder}
                    // onChangeRaw={() => {
                    //     setFieldTouched(name, true, true);
                    // }}
                    isClearable
                    locale={ja}
                    onBlur={handleBlur}
                />
                {errors && touched && (
                    <Text fontSize="sm" mt={1} color="red.300">
                        {isMandatory ? `${label  }必要` : errors}
                    </Text>
                )}
            </Flex>
        </Flex>
    );

export default CustomMonthPicker;
