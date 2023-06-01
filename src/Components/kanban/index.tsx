import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import KanbanColumn from "./kanban-column";
import { useState } from "react";
import { cardsData, listsData } from "../../Utils/data";
import { handleDragColumn, handleDragTask } from "../../Utils/kanban-logic";
import AddColumn from "./add-column";
import { nanoid } from "nanoid";

type Props = {};

const Kanban = (props: Props) => {
  const [lists, setLists] = useState(listsData);
  const [tasks, setTasks] = useState(cardsData);

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
      console.log(changedTasks)
      setTasks(changedTasks);
    } else {
      const changedList = handleDragColumn({ lists, result, start, end });
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
            {lists.map((item, i) => (
              <KanbanColumn
                key={item.id}
                id={item.id}
                name={item.name}
                index={i}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
            {provided.placeholder}
            <AddColumn handleAddColumn={handleAddColumn}/>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanban;
