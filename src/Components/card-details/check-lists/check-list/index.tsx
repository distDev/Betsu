import { FC, useState } from "react";
import { ITodo } from "../../../../Types/board";
import CheckListItem from "./item";
import CheckListHeader from "./header";
import { Box, Input, List, ListItem } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

type Props = {
  name: string;
  id: string;
  items: ITodo[];
  addTodo: (id: string, todo: string) => Promise<void>;
  deleteTodo: (id: string, todo: ITodo) => Promise<void>;
  checkedToggle: (id: string, todo: ITodo, newTodo: ITodo) => Promise<void>;
};

const CheckList: FC<Props> = ({
  name,
  id,
  items,
  addTodo,
  deleteTodo,
  checkedToggle,
}) => {
  const [todo, setTodo] = useState("");

  // Добавление задачи
  const handleAddTodo = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await addTodo(id, todo);
      setTodo("");
    }
  };

  // Удаление задачи
  const handleDeleteTodo = async (todo: ITodo) => {
    await deleteTodo(id, todo);
  };

  const handleCheckTodo = async (todo: ITodo, newTodo: ITodo) => {
    await checkedToggle(id, todo, newTodo);
  };

  return (
    <Box>
      <CheckListHeader items={items} name={name} />
      <List mt="15px">
        {items.length > 0 &&
          items.map((item, i) => (
            <CheckListItem
              deleteTodo={handleDeleteTodo}
              checkedToggle={handleCheckTodo}
              data={item}
            />
          ))}
        <ListItem>
          <Input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={handleAddTodo}
            placeholder="Добавить задачу..."
            variant="unstyled"
            fontSize="16px"
            pl="22px"
            py="7px"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default CheckList;
