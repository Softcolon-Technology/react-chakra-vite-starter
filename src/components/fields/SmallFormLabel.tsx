import { Text } from "@chakra-ui/react";

const SmallFormLabel = ({ title }: { title: string }) => (
        <Text flex={1} fontSize="sm" fontWeight="bold" display="block">
            {title}
        </Text>
    );

export default SmallFormLabel;
