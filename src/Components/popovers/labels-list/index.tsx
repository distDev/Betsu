import { FC, ReactNode, useEffect, useState } from "react";

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
import { labelsData } from "../../../Utils/data";
import { useLocation, useParams } from "react-router-dom";
import { boardApi } from "../../../Api/board-api";
import { ILabel } from "../../../Types/board";
import { taskApi } from "../../../Api/task-api";

type Props = {
  children?: ReactNode;
  taskLabels: string[];
};

const LabelsListPopover: FC<Props> = ({ children, taskLabels }) => {
  return (
    <Popover isLazy>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContainer taskLabels={taskLabels} />
    </Popover>
  );
};

const PopoverContainer: FC<Props> = ({ taskLabels }) => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>(taskLabels || []);
  const [boardLabels, setBoardLabels] = useState<ILabel[]>([]);

  const { id: boardId } = useParams();
  const idTask = useLocation().search.replace("?task=", "");

  const handleChange = (id: string) => {
    let label = boardLabels.find((label) => label.id === id);

    // удаление метки
    if (selectedLabels.includes(id)) {
      let removeLabel = selectedLabels.filter((label) => label !== id);

      setSelectedLabels([...removeLabel]);
      taskApi.deleteLabel(idTask, label!);
    }

    // добавление метки
    else {
      setSelectedLabels([...selectedLabels, label!.id]);
      taskApi.addLabel(idTask, label!);
    }
  };

  useEffect(() => {
    const getLabels = async () => {
      const { labels } = await boardApi.getBoardLabels(boardId!);
      setBoardLabels(labels);
    };

    getLabels();
  }, []);

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
                        defaultChecked={selectedLabels.includes(label.id)}
                        onChange={() => handleChange(label.id)}
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
