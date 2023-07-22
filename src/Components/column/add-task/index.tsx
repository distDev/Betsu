import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { ITask } from "../../../Types/board";
import { useAppDispatch } from "../../../Hooks/useAppDispatch";
import { createNewTask } from "../../../Store/task-slice";
import { useParams } from "react-router-dom";

type Props = {
  sortedCards: ITask[];
};

const AddTaskForm: FC<Props> = ({ sortedCards }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [taskName, setTaskName] = useState("");

  const dispatch = useAppDispatch();

  const { id } = useParams();

  const addTask = async () => {
    const idList = sortedCards[0].idList!;
    const newPosition = () => {
      if (sortedCards.length === 0) {
        return 60000;
      }
      return sortedCards[sortedCards.length - 1].position! + 60000;
    };

    dispatch(
      createNewTask({
        idBoard: id!,
        idList,
        name: taskName,
        position: newPosition(),
      })
    );
    
    setIsAdding((prev) => !prev);
    setTaskName("");
  };

  return (
    <>
      {!isAdding && (
        <Button
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
          fontWeight="normal"
          color="textSecond"
          _hover={{ opacity: "0.7" }}
        >
          <Text>Добавить задачу</Text>
        </Button>
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

export default AddTaskForm;
