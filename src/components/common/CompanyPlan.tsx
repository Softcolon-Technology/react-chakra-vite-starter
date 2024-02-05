import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { Flex, Icon, Text } from "@chakra-ui/react";

interface CompanyPlanProps {
    plan: string;
}

const CompanyPlan = ({ plan }: CompanyPlanProps) => (
        <Flex alignItems="center" gap={1}>
            <Icon as={RxDotFilled} color="#666666" boxSize="1rem" />
            <Text fontWeight="700" fontSize="xs" color="#666666">
                {plan}
            </Text>
        </Flex>
    );

export default CompanyPlan;
