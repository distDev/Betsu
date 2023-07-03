import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Input,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { MdModeEdit } from "react-icons/md";

type Props = {
  children: ReactNode;
};

const KanbanCardDetailHeaderLabels: FC<Props> = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Метки</PopoverHeader>
        <PopoverBody py="10px">
          <Input placeholder="Искать метки..." />
          <Box mt="15px">
            <Text fontSize="14px">Метки</Text>
            <List>
              <ListItem mt="7px">
                <span>
                  <Box display="flex" gap="10px">
                    <Checkbox />
                    <Box
                      bg="bgGreen"
                      w="full"
                      borderRadius="5px"
                      textAlign="end"
                      p="2px 5px"
                    >
                      <IconButton
                        icon={<MdModeEdit />}
                        aria-label="изменить цвет"
                        size="sm"
                        variant="ghost"
                      />
                    </Box>
                  </Box>
                </span>
              </ListItem>

              <ListItem mt="7px">
                <span>
                  <Box display="flex" gap="10px">
                    <Checkbox />
                    <Box
                      bg="bgPurple"
                      w="full"
                      borderRadius="5px"
                      textAlign="end"
                      p="2px 5px"
                    >
                      <IconButton
                        icon={<MdModeEdit />}
                        aria-label="изменить цвет"
                        size="sm"
                        variant="ghost"
                      />
                    </Box>
                  </Box>
                </span>
              </ListItem>

              <ListItem mt="7px">
                <span>
                  <Box display="flex" gap="10px">
                    <Checkbox />
                    <Box
                      bg="bgGreen"
                      w="full"
                      borderRadius="5px"
                      textAlign="end"
                      p="2px 5px"
                    >
                      <IconButton
                        icon={<MdModeEdit />}
                        aria-label="изменить цвет"
                        size="sm"
                        variant="ghost"
                      />
                    </Box>
                  </Box>
                </span>
              </ListItem>

              <ListItem mt="7px">
                <span>
                  <Box display="flex" gap="10px">
                    <Checkbox />
                    <Box
                      bg="bgPurple"
                      w="full"
                      borderRadius="5px"
                      textAlign="end"
                      p="2px 5px"
                    >
                      <IconButton
                        icon={<MdModeEdit />}
                        aria-label="изменить цвет"
                        size="sm"
                        variant="ghost"
                      />
                    </Box>
                  </Box>
                </span>
              </ListItem>
            </List>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default KanbanCardDetailHeaderLabels;
