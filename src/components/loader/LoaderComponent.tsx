import { Flex, Spinner } from "@chakra-ui/react";

const LoaderComponent = () => (
        <Flex
            pos="absolute"
            top="50%"
            left="50%"
            justifyContent="center"
            alignItems="center"
            transform="translate(-50%, -50%)"
        >
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        </Flex>
    );

export default LoaderComponent;
