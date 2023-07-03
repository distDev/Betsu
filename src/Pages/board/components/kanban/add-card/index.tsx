import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";

type Props = {
  handleAddTask: (data: any) => void;
  sortedCards: {
    id: string;
    description: string;
    name: string;
    position: number;
    cover: {
      color: string;
    };
    checkLists: never[];
    idBoard: string;
    idList: string;
  }[];
};

const AddCard: FC<Props> = ({ handleAddTask, sortedCards }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    // Если массив пустой, то ставлю дефолтную позицию
    // иначе беру последнюю карточку из массива и ее позицию
    const newPosition = () => {
      if (sortedCards.length === 0) {
        return 60000;
      }
      return sortedCards[sortedCards.length - 1].position + 60000;
    };

    handleAddTask({ name: taskName, position: newPosition() });
    setIsAdding((prev) => !prev);
    setTaskName("");
  };

  return (
    <>
      {!isAdding && (
        <Box
          onClick={() => setIsAdding((status) => !status)}
          w="100%"
          h="60px"
          bg="white"
          borderRadius="8px"
          m="5px 0px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px dashed #CCCCCC"
          cursor="pointer"
          _hover={{ opacity: "0.7" }}
        >
          <Text>Добавить задачу</Text>
        </Box>
      )}
      {isAdding && (
        <Box w="100%" bg="white" borderRadius="8px" m="5px 0px" p="10px">
          <Box mb="10px">
            <Textarea
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </Box>
          <Stack direction="row">
            <ButtonGroup size="sm">
              <Button onClick={addTask}>Добавить</Button>
              <Button
                onClick={() => setIsAdding((status) => !status)}
                colorScheme="red"
              >
                Отменить
              </Button>
            </ButtonGroup>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default AddCard;
