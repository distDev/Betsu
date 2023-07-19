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
): { changedPosition: ITask[]; position: number } | null => {
  if (!destination) {
    return null;
  }

  const { draggableId } = result;

  const filteredTasks = tasks
    .filter((task) => task.idList === destination.droppableId)
    .sort((a, b) => a.position! - b.position!);

  const updatedTasks = [...filteredTasks];

  const currentTask = tasks.find((task) => task.id === draggableId);

  if (destination.droppableId === source.droppableId) {
    updatedTasks.splice(start, 1);
  }

  updatedTasks.splice(end, 0, currentTask!);

  let prevTask = updatedTasks[end - 1];
  let nextTask = updatedTasks[end + 1];
  let position = currentTask!.position!;

  if (prevTask && nextTask) {
    position = (prevTask.position! + nextTask.position!) / 2;
  } else if (prevTask) {
    position = prevTask.position! + prevTask.position! / 2;
  } else if (nextTask) {
    position = nextTask.position! / 2;
  }

  const changedPosition = tasks.map((task) =>
    task.id === currentTask!.id
      ? {
          ...task,
          position: position,
          idList: destination.droppableId,
        }
      : task
  );

  return { changedPosition, position };
};
