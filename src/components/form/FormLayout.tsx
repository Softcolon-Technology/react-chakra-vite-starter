import { Box } from "@chakra-ui/react";

import { globalStyles } from "../../theme/styles";

interface FormLayoutProps {
    children: JSX.Element;
}

const FormLayout = ({ children }: FormLayoutProps) => (
        <Box px={6} pb={0} rounded="md" pt={2} bg={globalStyles.colors.common.white} w={{ xl: "4xl" }}>
            {children}
        </Box>
    );

export default FormLayout;
