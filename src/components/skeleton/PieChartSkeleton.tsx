import { Flex, SkeletonCircle } from "@chakra-ui/react";

const PieChartSkeleton = () => (
        <Flex w="full" justifyContent="center" py={4}>
            <SkeletonCircle size="200" />
        </Flex>
    );

export default PieChartSkeleton;
