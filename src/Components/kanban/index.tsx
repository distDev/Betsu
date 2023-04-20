import { Stack } from "@chakra-ui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import KanbanColumn from "./kanban-column";
import { useState } from "react";
import { listsData } from "../../Utils/data";

type Props = {};

const Kanban = (props: Props) => {
  const [lists, setLists] = useState(listsData);
  const sortedLists = [...lists].sort((a, b) => a.position - b.position);

  const handleOnDragEnd = (result: any) => {
    const start = result.source;
    const end = result.source;

    let index = end.index;
    let prevColumn = sortedLists[index - 1];
    let nextColumn = sortedLists[index + 1];
    let column = lists.find((e) => e.id === result.draggableId);

    let position = column!.position;

    if (prevColumn && nextColumn) {
      position = (prevColumn.position + nextColumn.position) / 2;
    } else if (prevColumn) {
      position = prevColumn.position + prevColumn.position / 2;
    } else if (nextColumn) {
      position = nextColumn.position / 2;
    }

    const changePosition = lists.map((e) =>
      e.id === column!.id
        ? e
        : {
            ...e,
            position: position,
          }
    );

    setLists(changePosition);
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
      <Droppable droppableId="kanban" direction="horizontal" type="BOARD">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ display: "flex", gap: "30px" }}
          >
            {sortedLists.map((item, i) => (
              <KanbanColumn
                key={item.id}
                id={item.id}
                position={item.position}
                name={item.name}
                index={i}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanban;
