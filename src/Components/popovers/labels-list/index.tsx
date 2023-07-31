import { FC, ReactNode, useState } from "react";

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
  Text,
} from "@chakra-ui/react";

import { MdModeEdit } from "react-icons/md";
import { labels } from "../../../Utils/data";

type Props = {
  children: ReactNode;
};

const userDataLabels = [
  {
    id: "63720e4d8ff291ac8742b8654f",
    color: "#46F3A0",
  },
  {
    id: "63720e4d8291ac833f742b865552",
    idBoard: "63720e4d0437d303ebc6fe3d",
    name: "фиолетовый",
    color: "#2392F8",
  },
];

const LabelsListPopover: FC<Props> = ({ children }) => {
  return (
    <Popover isLazy>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContainer />
    </Popover>
  );
};

const PopoverContainer: FC = () => {
  const [userLabels, setUserLabels] = useState(userDataLabels);
  const [boardLabels, setBoardLabels] = useState(labels);

  const checkIncludes = (id: string) => {
    return userLabels.find((label) => label.id === id) ? true : false;
  };

  return (
    <>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Метки</PopoverHeader>
        <PopoverBody py="10px">
          <Input placeholder="Искать метки..." />
          <Box mt="15px">
            <Text fontSize="14px">Метки</Text>
            <List>
              {boardLabels.map((label) => (
                <ListItem mt="7px" key={label.id}>
                  <span>
                    <Box display="flex" gap="10px">
                      <Checkbox
                        defaultChecked={checkIncludes(label.id)}
                      />
                      <Box
                        bg={label.color}
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
              ))}
            </List>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </>
  );
};

export default LabelsListPopover;
