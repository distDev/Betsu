import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebase.config";
import { ITask } from "../../../Types/board";

type Props = {
  handleAddTask: (data: any) => void;
  sortedCards: ITask[];
};

const AddTaskForm: FC<Props> = ({ handleAddTask, sortedCards }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [taskName, setTaskName] = useState("");

  const addTask = async () => {
    // Если массив пустой, то ставлю дефолтную позицию
    // иначе беру последнюю карточку из массива и ее позицию
    const newPosition = () => {
      if (sortedCards.length === 0) {
        return 60000;
      }
      return sortedCards[sortedCards.length - 1].position! + 60000;
    };
    handleAddTask({ name: taskName, position: newPosition() });

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
