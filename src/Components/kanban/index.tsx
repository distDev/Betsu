import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import List from "../list";
import AddList from "../add-list";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { changePositionList, createNewList } from "../../Store/slices/list-slice";
import { useParams } from "react-router-dom";
import { changePositionTask } from "../../Store/slices/task-slice";

const Kanban = () => {
  const { id: idBoard } = useParams();

  const lists = useAppSelector((state) => state.lists.data);
  const filteredLists = [...lists].sort((a, b) => a.position! - b.position!);

  const dispatch = useAppDispatch();

  // Обработка перестаскивания
  const handleOnDragEnd = (result: DropResult) => {
    let { source, destination, type } = result;
    let end = destination!.index;
    let start = source.index;

    if (type === "task") {
      dispatch(
        changePositionTask({
          destination,
          end,
          result,
          source,
          start,
        })
      );
    } else {
      dispatch(changePositionList({ destination, end, result, source, start }));
    }
  };

  // Создание нового списка
  const handleAddList = (name: string) => {
    const newPosition = () => {
      if (filteredLists.length === 0) {
        return 60000;
      }
      return filteredLists[filteredLists.length - 1].position! + 60000;
    };

    dispatch(
      createNewList({ name, idBoard: idBoard!, position: newPosition() })
    );
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
            {filteredLists.map((item, i) => (
              <List key={item.id} id={item.id} name={item.name} index={i} />
            ))}
            {provided.placeholder}
            <AddList handleAddList={handleAddList} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanban;
