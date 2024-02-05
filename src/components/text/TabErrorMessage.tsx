import React from "react";
import { Text } from "@chakra-ui/react";

interface TabErrorMessageProps {
    message: any;
}

const TabErrorMessage = ({ message }: TabErrorMessageProps) => (
        <Text fontSize="sm" mt={1} color="red.300">
            {message?.value}
        </Text>
    );

export default TabErrorMessage;
