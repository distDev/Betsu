import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
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
import { RxExit } from "react-icons/rx";

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
            <Text fontSize="16px" color="textMain" fontWeight="medium">
              Дмитрий
            </Text>
          </Stack>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<ChevronDownIcon />}
              aria-label="Профиль"
              variant="unstyled"
              fontSize="22px"
              color="textSecond"
            />
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
          {navLinks.map(({ name, path, icon }) => (
            <NavLink
              to={path}
              key={path}
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              <Box display="flex" gap="13px" alignItems="center">
                <Icon as={icon} w="22px" h="22px" fontWeight="medium" />
                {name}
              </Box>
            </NavLink>
          ))}
        </Stack>
      </Stack>
      <Box>
        <Button variant={"ghost"}>
          <Box display="flex" gap="13px" alignItems="center">
            <Icon as={RxExit} w="22px" h="22px" fontWeight="medium" />
            <Text fontWeight="semibold" fontSize="16px" color="#667085">
              Выйти
            </Text>
          </Box>
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
