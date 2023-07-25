import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { ITask } from "../Types/board";

export const taskApi = {
  createNewTask: async (task: ITask) => {
    const taskRef = collection(db, "tasks");

    await addDoc(taskRef, task);
  },

  changePositionTask: async ({
    id,
    position,
    idList,
  }: {
    id: string;
    position: number;
    idList: string;
  }) => {
    const taskRef = doc(db, "tasks", id);

    await updateDoc(taskRef, {
      position,
      idList,
    });
  },

  deleteTask: async () => {},

  updateTaskTitle: async () => {},

  updateTaskDesc: async () => {},

  moveTask: async () => {},

  copyTask: async () => {},
};
