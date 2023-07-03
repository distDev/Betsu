import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./column";
import { useState, useEffect } from "react";
import { cardsData, listsData } from "../../../../Utils/data";
import {
  handleDragColumn,
  handleDragTask,
} from "../../../../Utils/kanban-logic";
import AddColumn from "./add-column";
import { nanoid } from "nanoid";
import { useAppDispatch } from "../../../../Hooks/useAppDispatch";
import { useAppSelector } from "../../../../Hooks/useAppSelector";
import { dragColumn, getTasks, setColumns } from "../../../../Store/taskSlice";

type Props = {};

const Kanban = (props: Props) => {
  const [lists, setLists] = useState<any>(listsData);
  const [tasks, setTasks] = useState(cardsData);

  const dispatch = useAppDispatch();

  const tasksRx = useAppSelector((state) => state.tasks.list);
  const columns = useAppSelector((state) => state.tasks.columns);

  useEffect(() => {
    dispatch(getTasks({ list: cardsData }));
    dispatch(setColumns({ columns: listsData }));
  }, []);

  console.log(tasksRx);

  const handleOnDragEnd = (result: any) => {
    let { source, destination, type } = result;
    let end = destination?.index;
    let start = source.index;

    if (type === "task") {
      const changedTasks = handleDragTask({
        destination,
        end,
        result,
        source,
        start,
        tasks,
      });
      console.log(changedTasks);
      setTasks(changedTasks);
    } else {
      const changedList = handleDragColumn(lists, result, start, end);
      dispatch(dragColumn({ result, start, end }));
      setLists(changedList);
    }
  };

  const handleAddColumn = (name: string) => {
    setLists([
      ...lists,
      {
        id: nanoid(),
        cover: {
          color: "#F8BD1C",
        },
        name,
        idBoard: "1",
      },
    ]);
  };

  return (
    <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
      <Droppable droppableId="kanban" direction="horizontal" type="board">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ display: "flex", overflowX: "scroll", height: "85vh" }}
          >
            {lists.map((item: any, i: any) => (
              <Column
                key={item.id}
                id={item.id}
                name={item.name}
                index={i}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
            {provided.placeholder}
            <AddColumn handleAddColumn={handleAddColumn} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanban;
