import ja from "date-fns/locale/ja";
import { Flex } from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";

// import CustomLabel from "./CustomLabel";

interface CustomDatePickerProps {
    value: any;
    onChange: any;
    touched: any;
    handleBlur: any;
    name: string;
    setFieldTouched?: any;
    placeHolder?: string;
}

const CustomSearchPicker = ({
    // label,
    value,
    onChange,
    // isMandatory,
    // errors,
    touched,
    handleBlur,
    name,
    setFieldTouched,
    placeHolder
}: CustomDatePickerProps) => (
        <Flex gap={4} alignItems="center" justifyContent="start" w="256px">
            <ReactDatePicker
                dateFormat="yyyy年M月"
                className="search-month-picker"
                name={name}
                selected={value}
                maxDate={new Date()}
                onChange={(date: Date) => {
                    onChange(date);
                }}
                autoComplete="off"
                showMonthYearPicker
                placeholderText={placeHolder}
                // onChangeRaw={() => {
                //     setFieldTouched(name, true, true);
                // }}
                // isClearable
                locale={ja}
                onBlur={handleBlur}
            />
        </Flex>
    );

export default CustomSearchPicker;
