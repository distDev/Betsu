import { FC, ReactNode } from "react";
import Navbar from "./navbar";
import { Box, Container, Flex } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container bg="white" >
      <Flex>
        <Box w="20%">
          <Navbar />
        </Box>
        <Box w="80%">{children}</Box>
      </Flex>
    </Container>
  );
};

export default Layout;
