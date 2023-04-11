import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../../Utils/nav-data";
import "./navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Flex padding="24px" h="100vh" direction="column" justify="space-between">
      <Stack spacing="40px">
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
              aria-label="Профиль"
              variant="unstyled"
            ></MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Stack spacing="4px">
          {navLinks.map(({ name, path }) => (
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              {name}
            </NavLink>
          ))}
        </Stack>
      </Stack>
      <Box>
        <Button variant={"ghost"}>Выйти</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
