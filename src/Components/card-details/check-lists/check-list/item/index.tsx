import { FC } from "react";
import { MdAccessTime, MdOutlineDelete } from "react-icons/md";
import { ITodo } from "../../../../../Types/board";
import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

type Props = {
  data: ITodo;
  deleteTodo: (todo: ITodo) => Promise<void>;
  checkedToggle: (todo: ITodo, newTodo: ITodo) => Promise<void>;
};

const CheckListItem: FC<Props> = ({ data, deleteTodo, checkedToggle }) => {
  const { id, completed, name } = data;

  return (
    <ListItem key={id} display="flex">
      <Checkbox
        defaultChecked={completed}
        onChange={() => checkedToggle(data, { ...data, completed: !completed })}
      />
      <Box
        display="flex"
        w="full"
        ml="7px"
        p="7px"
        borderRadius="6px"
        role="group"
        _hover={{ bg: "bgGrey" }}
      >
        <Text>{name}</Text>
        <Spacer />
        <Stack
          direction="row"
          spacing="5px"
          display="none"
          _groupHover={{ display: "flex" }}
        >
          <IconButton
            aria-label="срок выполнения"
            icon={<MdAccessTime />}
            size="xs"
          />
          <IconButton
            onClick={() => deleteTodo(data)}
            aria-label="Удаление задачи"
            icon={<MdOutlineDelete />}
            size="xs"
          />
        </Stack>
      </Box>
    </ListItem>
  );
};

export default CheckListItem;
