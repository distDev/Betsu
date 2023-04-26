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

interface DragColumn {
  lists: List[];
  result: {
    draggableId: string;
  };
  start: number;
  end: number;
}

interface DragTask {
  tasks: Task[];
  destination: {
    droppableId: string;
  };
  source: {
    droppableId: string;
  };
  result: {
    draggableId: string;
  };
  end: number;
  start: number;
}

export const handleDragColumn = ({ lists, result, start, end }: DragColumn) => {
  const currentList = lists.find((e) => e.id === result.draggableId);
  const changedLists = Array.from(lists);
  changedLists.splice(start, 1);
  changedLists.splice(end, 0, currentList!);

  return changedLists;
};

export const handleDragTask = ({
  tasks,
  destination,
  result,
  source,
  end,
  start,
}: DragTask) => {
  if (!destination) {
    return tasks;
  }
  // Фильтрация, сортировка, копирование массива и поиск нужной карточки
  let tasksFiltered = tasks.filter((e) => e.idList === destination.droppableId);
  let taksSorted = [...tasksFiltered].sort((a, b) => a.position - b.position);
  let newArr = Array.from(taksSorted);
  let currentTask = tasks.find((e) => e.id === result.draggableId);

  // Если карточка переносится в тот же список, то она вырезается
  // И вставляется в нужное место, если список другой - просто вставляется
  if (destination.droppableId === source.droppableId) {
    newArr.splice(start, 1);
    newArr.splice(end, 0, currentTask!);
    console.log("Таска добавлена в тот же список:", newArr);
  } else {
    newArr.splice(end, 0, currentTask!);
    console.log("Таска добавлена в другой список:", newArr);
  }

  // Поиск карточек, которые расположены рядом
  let prevTask = newArr[end - 1];
  let nextTask = newArr[end + 1];
  let position = currentTask!.position;

  // Формула Trello для определения позиции карточки
  if (prevTask && nextTask) {
    position = (prevTask.position + nextTask.position) / 2;
    console.log("сработала 1, данные:", prevTask, nextTask);
  } else if (prevTask) {
    position = prevTask.position + prevTask.position / 2;
    console.log("сработала 2, данные:", prevTask);
  } else if (nextTask) {
    position = nextTask.position / 2;
    console.log("сработала 3, данные:", nextTask);
  }

  // Меняю позицию нужной таски в массиве и ее idList
  // Если карточка была перенесена в другой список
  const changedPosition = tasks.map((e) =>
    e.id === currentTask!.id
      ? {
          ...e,
          position: position,
          idList: destination.droppableId,
        }
      : e
  );
  console.log(result)
  return changedPosition;
};
