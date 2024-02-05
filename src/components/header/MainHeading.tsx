import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface MainHeadingProps {
    title: string;
    mt?: number;
    handleclick?: any;
}

const MainHeading = ({ title, mt, handleclick }: MainHeadingProps) => {
    const navigate = useNavigate();
    return (
        <Text
                as="h1"
                ml={2}
                onClick={() => navigate(handleclick)}
                fontWeight="bold"
                lineHeight="full"
                textAlign="left"
                fontSize="2xl"
                mt={mt || 0}
            >
                {title}
            </Text>
    );
};

export default MainHeading;
