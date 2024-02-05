import { Flex, Stack, Skeleton } from "@chakra-ui/react";

const BarChartSkeleton = () => (
        <Stack>
            <Flex gap={5} mx={10} my={4}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Skeleton key={item} height="350px" width="100%" />
                ))}
            </Flex>
        </Stack>
    );

export default BarChartSkeleton;
