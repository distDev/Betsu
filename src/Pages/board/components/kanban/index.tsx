import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./column";
import { useEffect } from "react";
import { cardsData, listsData } from "../../../../Utils/data";
import AddColumn from "./add-column";
import { useAppDispatch } from "../../../../Hooks/useAppDispatch";
import { useAppSelector } from "../../../../Hooks/useAppSelector";
import {
  addColumn,
  dragColumn,
  dragTask,
  getTasks,
  setColumns,
} from "../../../../Store/taskSlice";

type Props = {};

const Kanban = (props: Props) => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector((state) => state.tasks.columns);

  useEffect(() => {
    dispatch(getTasks({ list: cardsData }));
    dispatch(setColumns({ columns: listsData }));
  }, []);

  // обработка перестаскивания
  const handleOnDragEnd = (result: any) => {
    let { source, destination, type } = result;
    let end = destination?.index;
    let start = source.index;

    if (type === "task") {
      dispatch(dragTask({ destination, end, result, source, start }));
    } else {
      dispatch(dragColumn({ result, start, end }));
    }
  };

  const handleAddColumn = (name: string) => {
    dispatch(addColumn({ name }));
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
            {columns.map((item: any, i: any) => (
              <Column key={item.id} id={item.id} name={item.name} index={i} />
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
