import { IDragItem, ITask } from "../Types/board";

// функция для обратотки перестаскивания, она возвращает измененный массив
// и новую позицию для перетаскиваемого элемента
export const handleDrag = ({
  data,
  destination,
  result,
  source,
  end,
  start,
  isTask,
}: IDragItem): {
  changedPosition: any;
  position: number;
} | null => {
  if (!destination) {
    return null;
  }

  const { draggableId } = result;

  let updatedData;

  if (isTask) {
    updatedData = data
      .filter((task: ITask) => task.idList === destination.droppableId)
      .sort((a: any, b: any) => a.position! - b.position!);
  } else {
    updatedData = [...data];
  }

  const currentItem = data.find((item: any) => item.id === draggableId);

  // если при переносе карточка осталась в той же колонне, то она удаляется из нее
  if (destination.droppableId === source.droppableId) {
    updatedData.splice(start, 1);
  }

  // карточка вставляется в место, куда ее перенес пользователь
  updatedData.splice(end, 0, currentItem!);

  let prevItem = updatedData[end - 1];
  let nextItem = updatedData[end + 1];
  let position = currentItem!.position!;

  // формула trello для вычисления позиции
  if (prevItem && nextItem) {
    position = (prevItem.position! + nextItem.position!) / 2;
  } else if (prevItem) {
    position = prevItem.position! + prevItem.position! / 2;
  } else if (nextItem) {
    position = nextItem.position! / 2;
  }

  const changedPosition = data.map((item: any) =>
    item.id === currentItem!.id
      ? {
          ...item,
          position: position,
          idList: destination.droppableId,
        }
      : item
  );

  return { changedPosition, position };
};
