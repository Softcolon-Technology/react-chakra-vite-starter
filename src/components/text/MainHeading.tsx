import { Text } from "@chakra-ui/react";

interface MainHeadingProps {
    title: string;
    paddingTop?: boolean;
}

const MainHeading = ({ title, paddingTop }: MainHeadingProps) => (
        <Text
            as="h1"
            fontWeight="bold"
            lineHeight="full"
            textAlign="left"
            fontSize="2xl"
            pt={paddingTop ? "" : 4}
        >
            {title}
        </Text>
    );

export default MainHeading;
