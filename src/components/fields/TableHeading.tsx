import { Text } from "@chakra-ui/react";

interface Props {
    text: string;
    center?: boolean;
}

const TableHeading = ({ text, center }: Props) => (
        <Text fontWeight="bold" margin={center ? "auto" : ""}>
            {text}
        </Text>
    );

export default TableHeading;
