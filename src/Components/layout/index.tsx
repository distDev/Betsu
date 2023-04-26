import { FC, ReactNode } from "react";
import Navbar from "./navbar";
import { Box, Container, Flex } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box bg="white" w="100vw">
      <Flex>
        <Box w="20%">
          <Navbar />
        </Box>
        <Box w="80%" padding="40px 40px 0px 40px" bg="#F2F4F7">
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
