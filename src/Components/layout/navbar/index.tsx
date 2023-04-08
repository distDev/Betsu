import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Box padding="24px">
      <Flex justify="space-between" align="center">
        <Stack spacing="10px" direction="row">
          <Avatar
            name="Ryan Florence"
            w="24px"
            h="24px"
            src="https://bit.ly/ryan-florence"
          />
          <Text fontSize="sm">Дмитрий</Text>
        </Stack>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<ChevronDownIcon />}
            aria-label="Options"
          ></MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;
