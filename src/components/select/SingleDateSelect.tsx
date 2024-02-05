import { Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import SmallFormLabel from "../fields/SmallFormLabel";
import RsuitDatePicker from "../form/RsuitDatePicker";

interface DateSelectProps {
    label: string;
    startDate: any;
    setStartDate: any;
    selected?: any;
    setFieldValue?: any;
    name?: string;
}

const SingleDateSelect = ({ label, startDate, setStartDate, selected, setFieldValue, name }: DateSelectProps) => {
    const { t } = useTranslation();
    return (
        <Flex fontSize="sm" alignItems={{ base: "flex-start", md: "center" }}>
            <SmallFormLabel title={label} />
            {/* <ReactDatePicker
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                // placeholderText={label}
                onChange={(date: Date) => {
                    setStartDate(date);
                    setFieldValue && setFieldValue(name, true);
                }}
                maxDate={new Date()}
                startDate={startDate}
                className="custom"
                popperClassName="popper-class"
                popperPlacement="bottom-start"
                todayButton={t("common.today")}
                showPopperArrow={false}
                // maxDate={new Date()}
                locale={"ja"}
                popperModifiers={[
                    {
                        name: "offset",
                        options: {
                            offset: [0, 0]
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            rootBoundary: "viewport",
                            tether: false,
                            altAxis: true
                        }
                    }
                ]}
            /> */}
            <RsuitDatePicker placeHolder="yyyy/mm/dd" name={name} setFieldValue={setFieldValue} value={startDate} setDate={setStartDate} />

        </Flex>
    );
};

export default SingleDateSelect;
