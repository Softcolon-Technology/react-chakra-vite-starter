import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { globalStyles } from "../../theme/styles";

interface FormViewProps {
    label: string;
    value: string | any;
}

const FormView = ({ label, value }: FormViewProps) => (
    <Flex borderY={`1px solid ${globalStyles.colors.border.gray}`} w="full">
        <Box w="md" backgroundColor={globalStyles.colors.common.lightblack}>
            <Box p={5} fontWeight="500">
                <Text>{label}</Text>
            </Box>
        </Box>
        <Flex gap={4} alignItems="center" justifyContent="start" w="full" px={5} py="4">
            <Text fontSize={14} fontWeight="400" overflowWrap="anywhere" whiteSpace="pre-line">
                {value || "--"}
            </Text>
        </Flex>
    </Flex>
);

export default FormView;
