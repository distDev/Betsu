import { FC, useState } from "react";
import { Stack } from "@chakra-ui/react";
import { IChecklist, ITodo } from "../../../Types/board";
import { taskApi } from "../../../Api/task-api";
import { nanoid } from "nanoid";
import CheckList from "./check-list";

type Props = {
  checkLists: IChecklist[];
};

const CardDetailsCheckLists: FC<Props> = ({ checkLists }) => {
  const [checklistsData, setChecklistsData] = useState(checkLists);

  // Добавление задачи
  const addTodo = async (id: string, todo: string) => {
    await taskApi.addTodo(id, {
      id: nanoid(),
      name: todo,
      completed: false,
      due: null,
      dueReminder: null,
      idMember: null,
    });
  };

  // Удаление задачи
  const deleteTodo = async (id: string, todo: ITodo) => {
    await taskApi.deleteTodo(id, todo);
  };

  // Изменение завершенности
  const checkedToggle = async (id: string, todo: ITodo, newTodo: ITodo) => {
    const { id: idTodo, completed } = todo;

    const checkedTodo = checklistsData.map((checklist) => {
      if (checklist.id === id) {
        return checklist.items.map((item) =>
          item.id === idTodo ? { ...item, completed: !completed } : item
        );
      }
      return checklist;
    });

    setChecklistsData(checkedTodo as IChecklist[]);
    await taskApi.checkTodoToggle(id, todo, newTodo);
  };
  return (
    <Stack direction="column" spacing="60px">
      {checkLists.map((checklist, i) => (
        <CheckList
          key={checklist.id}
          items={checklist.items}
          name={checklist.name}
          id={checklist.id}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          checkedToggle={checkedToggle}
        />
      ))}
    </Stack>
  );
};

export default CardDetailsCheckLists;
