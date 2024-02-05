import { Text } from "@chakra-ui/react";

interface DashboardHeadingProps {
    title: string;
}

const DashboardHeading = ({ title }: DashboardHeadingProps) => (
        <Text as="h1" fontWeight="bold" lineHeight="full" textAlign="left" fontSize="xl" pt="4">
            {title}
        </Text>
    );

export default DashboardHeading;
