import { IList, ITask } from "../Types/board";

type List = {
  id: string;
  name: string;
  idBoard: string;
  cover: {
    color: string;
  };
};

type Task = {
  id: string;
  description: string;
  name: string;
  position: number;
  cover: {
    color: string;
  };
  checkLists: never[];
  idBoard: string;
  idList: string;
};

export const handleDragColumn = (
  lists: IList[],
  result: any,
  start: any,
  end: any
) => {
  const currentList = lists.find((e: any) => e.id === result.draggableId);
  const changedLists = Array.from(lists);
  changedLists.splice(start, 1);
  changedLists.splice(end, 0, currentList!);

  return changedLists;
};

export const handleDragTask = (
  tasks: ITask[],
  destination: any,
  result: any,
  source: any,
  end: any,
  start: any
) => {
  if (!destination) {
    return tasks;
  }
  // Фильтрация, сортировка, копирование массива и поиск нужной карточки
  let tasksFiltered = tasks.filter(
    (e) => e.idList === destination.droppableId
  );
  let taksSorted = [...tasksFiltered].sort((a, b) => a.position! - b.position!);
  let newArr = Array.from(taksSorted);
  let currentTask = tasks.find((e) => e.id === result.draggableId);

  // Если карточка переносится в тот же список, то она вырезается
  // И вставляется в нужное место, если список другой - просто вставляется
  if (destination.droppableId === source.droppableId) {
    newArr.splice(start, 1);
    newArr.splice(end, 0, currentTask!);
  } else {
    newArr.splice(end, 0, currentTask!);
  }

  // Поиск карточек, которые расположены рядом
  let prevTask = newArr[end - 1];
  let nextTask = newArr[end + 1];
  let position = currentTask!.position;

  // Формула Trello для определения позиции карточки
  if (prevTask && nextTask) {
    position = (prevTask.position! + nextTask.position!) / 2;
  } else if (prevTask) {
    position = prevTask.position! + prevTask.position! / 2;
  } else if (nextTask) {
    position = nextTask.position! / 2;
  }

  // Изменение позиции нужной таски в массиве и ее idList
  // если карточка была перенесена в другой список
  const changedPosition = tasks.map((e) =>
    e.id === currentTask!.id
      ? {
          ...e,
          position: position,
          idList: destination.droppableId,
        }
      : e
  );
  return changedPosition;
};
